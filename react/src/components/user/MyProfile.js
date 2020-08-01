import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import "./MyProfile.css";
import placeholder from "./../../assets/img/profile-placeholder.png";
import {
    API_ENDPOINT,
    IMAGE_ENDPOINT
} from "../../constant";

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRes: {},
            first_name: "",
            last_name: "",
            address: "",
            description: "",
            file: "",
            imagePreviewUrl: "",
            errors: ""
        };
    }

    componentDidMount() {
        this.loginStatus();
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { first_name, last_name, address, description, userRes } = this.state;

        let user = {
            first_name: first_name,
            last_name: last_name,
            address: address,
            description: description
        };
        axios
            .put(`${API_ENDPOINT}/users/${userRes.id}`, { user }, { withCredentials: true })
            .then(response => {
                if (response.data.status === "created") {
                    this.props.handleLogin(response.data);
                    this.redirect();
                } else {
                    this.setState({
                        errors: response.data.errors
                    });
                }
            })
            .catch(error => console.log("api errors:", error));
    };

    loginStatus = () => {
        axios
            .get(`${API_ENDPOINT}/logged_in`, { withCredentials: true })
            .then(response => {
                if (response.data.logged_in) {
                    this.handleLogin(response);
                } else {
                    this.handleLogout();
                }
            })
            .catch(error => console.log("api errors:", error));
    };

    handleLogin = data => {
        this.setState({
            userRes: data.data.user,
            first_name: data.data.user.first_name,
            last_name: data.data.user.last_name,
            address: data.data.user.address,
            description: data.data.user.description,
            image: data.data.user.image
        });

    };

    _handleSubmit(e) {
        e.preventDefault();
        const { userRes } = this.state;
        var imageData = new FormData();
        imageData.append('user[avatar]', this.state.file);
        axios
            .put(`${API_ENDPOINT}/users/${userRes.id}`, imageData, { 'Content-Type': 'multipart/form-data', withCredentials: true })
            .then(response => {
                if (response.status === 200 || response.status === 204) {
                    this.redirect();
                }
            })
            .catch(response => {
                console.log(response);
            });
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file);
    }

    handleLogout = () => {
        this.setState({
            userRes: {}
        });
    };

    render() {
        const { loggedInStatus, user, handleLogout } = this.props;
        const { first_name, last_name, address, description, imagePreviewUrl, image } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = <img src={imagePreviewUrl} alt=""/>;
        } else {
            $imagePreview = <img src={image ? IMAGE_ENDPOINT + image : placeholder} alt="avatar" />;
        }

        return (
            <div>
                <Header
                    loggedInStatus={loggedInStatus}
                    user={user}
                    isInner={true}
                    handleLogout={handleLogout}
                />
                <section id="therapists">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="previewComponent pt-5">
                                    <form onSubmit={e => this._handleSubmit(e)}>
                                        <div className="image_container mx-auto mb-4">
                                            {$imagePreview}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={e => this._handleImageChange(e)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                                onClick={e => this._handleSubmit(e)}
                                            >
                                                Upload Image
                                                </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-8">
                                <h1 className="h3 my-5">
                                    My Profile
                                </h1>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="first_name"
                                            placeholder="Firstname"
                                            required="required"
                                            value={first_name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="last_name"
                                            placeholder="Lastname"
                                            required="required"
                                            value={last_name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            name="address"
                                            placeholder="Complete address"
                                            required="required"
                                            value={address}
                                            onChange={this.handleChange}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            name="description"
                                            placeholder="Description"
                                            required="required"
                                            value={description}
                                            onChange={this.handleChange}
                                        >
                                        </textarea>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
};

export default MyProfile;
