import React, { Component } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../../constant";
import placeholder from "./../../assets/img/profile-placeholder.png";

class TherapistCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
      userRes: {}
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

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
      userRes: data.data.user
    });

  };

  _handleSubmit(e) {
    e.preventDefault();
    const { userRes } = this.state;
    var imageData = new FormData();
    imageData.append('doctor[certificate]', this.state.file);
    axios
      .put(`${API_ENDPOINT}/doctors/${userRes.doctor.id}/upload_certificate`, imageData, { 'Content-Type': 'multipart/form-data', withCredentials: true })
      .then(response => {
        if (response.status === 200 || response.status === 204) {
          this.props.showToast(1, 'Certificate updated.')
          this.redirect();
        }
      })
      .catch(response => {
        this.props.showToast(2, 'Unbale to update Certificate.')
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

  redirect = () => {
    this.props.showToast(1, 'Wait for Admin Approval.')
    this.handleLogout();
  };

  handleLogout = () => {
    axios
      .delete(`${API_ENDPOINT}/logout`, { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
        this.props.history.push("/");
      })
      .catch((error) => console.log(error));
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="" />;
    } else {
      $imagePreview = <img src={placeholder} alt="certificate" />;
    }
    return (
      <div className="register_form">
        <div className="signup-form">
          <div className="previewComponent">
            <form onSubmit={e => this._handleSubmit(e)}>
              <h4 className="text-center text-dark">Upload Certificate</h4>
              <hr />
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
                  Upload Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default TherapistCertificate;
