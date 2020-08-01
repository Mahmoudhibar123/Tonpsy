import React, { Component } from "react";
import axios from "axios";
import ReactChipInput from "react-chip-input";
import Header from "../Header";
import Footer from "../Footer";
import "./MyProfile.css";
import placeholder from "./../../assets/img/profile-placeholder.png";
import { API_ENDPOINT, IMAGE_ENDPOINT } from "../../constant";

class TherapistProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRes: {},
      name: "",
      description: "",
      fees: "",
      chips: [],
      ids: [],
      file: "",
      imagePreviewUrl: "",
      errors: "",
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { description, name, fees, userRes } = this.state;

    axios
      .put(
        `${API_ENDPOINT}/doctors/${userRes.doctor.id}`,
        {
          name: name,
          description: description,
          fees: fees,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200) {
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  loginStatus = () => {
    axios
      .get(`${API_ENDPOINT}/logged_in`, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
          let chips = [];
          let ids = [];
          response.data.user.doctor.treatments.forEach((element) => {
            chips.push(element.name);
            ids.push(element.id);
          });
          this.setState({ chips: chips });
          this.setState({ ids: ids });
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  handleLogin = (data) => {
    this.setState({
      userRes: data.data.user,
      name: data.data.user.doctor.name,
      fees: data.data.user.doctor.fees,
      description: data.data.user.doctor.description,
      image: data.data.user.image,
      cert: data.data.user.doctor.certificate
        ? IMAGE_ENDPOINT + data.data.user.doctor.certificate
        : "",
    });
  };

  _handleSubmit(e) {
    e.preventDefault();
    const { userRes } = this.state;
    var imageData = new FormData();
    imageData.append("user[avatar]", this.state.file);
    axios
      .put(`${API_ENDPOINT}/users/${userRes.id}`, imageData, {
        "Content-Type": "multipart/form-data",
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          this.redirect();
        }
      })
      .catch((response) => {
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
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  handleLogout = () => {
    this.setState({
      userRes: {},
    });
  };

  addChip = (value) => {
    const { userRes, ids } = this.state;
    axios
      .post(
        `${API_ENDPOINT}/doctors/${userRes.doctor.id}/treatments`,
        { treatment: { name: value } },
        { withCredentials: true }
      )
      .then((response) => {
        const chips = this.state.chips.slice();
        chips.push(value);
        this.setState({ chips });
        ids.push(response.data.treatment.id);
        this.setState({ ids });
      })
      .catch((response) => {
        console.log(response);
      });
  };

  removeChip = (index) => {
    const { userRes, ids } = this.state;
    axios
      .delete(
        `${API_ENDPOINT}/doctors/${userRes.doctor.id}/treatments/${ids[index]}`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        const chips = this.state.chips.slice();
        chips.splice(index, 1);
        this.setState({ chips });
        const ids = this.state.ids.slice();
        ids.splice(index, 1);
        this.setState({ ids });
      })
      .catch((response) => {
        console.log(response);
      });
  };

  render() {
    const { loggedInStatus, user, handleLogout } = this.props;
    const {
      description,
      name,
      fees,
      cert,
      chips,
      imagePreviewUrl,
      image,
    } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="" />;
    } else {
      $imagePreview = (
        <img
          src={image ? IMAGE_ENDPOINT + image : placeholder}
          alt="upload profile"
        />
      );
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
                  <form onSubmit={(e) => this._handleSubmit(e)}>
                    <div className="image_container mx-auto mb-4">
                      {$imagePreview}
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => this._handleImageChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={(e) => this._handleSubmit(e)}
                      >
                        Upload Image
                      </button>
                      <hr />
                      <a
                        href={cert}
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        View Certificate
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-8 col-lg-8">
                <h1 className="h3 my-5">Therapist Profile</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required="required"
                      value={name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>About Me</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      name="description"
                      placeholder="Please describe about yourself..."
                      required="required"
                      maxLength="500"
                      value={description}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Specialization</label>
                    <ReactChipInput
                      classes="uc-chips"
                      chips={chips}
                      onSubmit={(value) => this.addChip(value)}
                      onRemove={(index) => this.removeChip(index)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Fees</label>
                    <input
                      type="number"
                      min="1"
                      className="form-control"
                      name="fees"
                      placeholder="Fees"
                      required="required"
                      value={fees}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary w-auto">
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
}

export default TherapistProfile;
