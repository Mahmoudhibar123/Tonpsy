import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../../constant";
import "./Register.css";
import therapistbg from "../../assets/img/therapist3.png";
import patientbg from "../../assets/img/patient2.jpg";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: "",
    };
  }

  componentDidMount() {
    const { role } = this.props.match.params;
    this.setState({ role: role });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      email,
      password,
      password_confirmation,
      role,
    } = this.state;
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      role: role.toLowerCase() === "therapist" ? 1 : 0,
    };
    axios
      .post(`${API_ENDPOINT}/users`, { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === "created") {
          response.data.user["doctor"] = {};
          response.data.user["doctor"]["id"] = response.data.user.doctor_id;
          response.data.user["doctor"]["name"] = response.data.user.first_name;
          this.props.handleLogin(response.data);
          this.props.showToast(1, "Registration successfull.");
          this.redirect(response.data.user);
        } else {
          this.props.showToast(
            2,
            response.data.errors
              ? response.data.errors[0]
              : "Unbale to create Registration."
          );
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  redirect = (user) => {
    if (user.role.toLowerCase() === "therapist") {
      this.props.history.push("/about", { doctor_id: user.doctor_id });
    } else {
      this.props.history.push("/doctors/psychiatrist");
    }
  };

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { username, email, password, password_confirmation, role } = this.state;

    return (
      <div className="login_form">
        <div className="container-fluid bg-white h-100 overflow-auto">
          <div className="row h-100 justify-content-center">
            <div
              className="col-lg-7 d-none d-lg-block"
              style={{
                backgroundImage: "url(" + (role && role.toLowerCase() === "therapist" ? therapistbg : patientbg) + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="col-lg-5 col-md-8 p-5">
              <div className="register_form1">
                <div className="signup-form">
                  <form onSubmit={this.handleSubmit}>
                    <h2>Register</h2>
                    <p>Create your account</p>
                    <hr />
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        required="required"
                        value={username}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                        required="required"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required="required"
                        value={password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                        required="required"
                        value={password_confirmation}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">
                        Create account
                      </button>
                      <div className="text-center mt-2">
                        Already have an account?{" "}
                        <Link to={`/auth/login/${role}`}>Login here</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
