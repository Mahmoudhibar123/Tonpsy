import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../../constant";
import "./Login.css";
import therapistbg from "../../assets/img/therapist3.png";
import patientbg from "../../assets/img/patient2.jpg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      role: "",
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
    const { username, password } = this.state;
    let user = {
      username: username,
      password: password,
    };

    axios
      .post(`${API_ENDPOINT}/login`, { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          response.data.user["doctor"] = {};
          response.data.user["doctor"]["id"] = response.data.user.doctor_id;
          response.data.user["doctor"]["name"] = response.data.user.first_name;
          this.props.handleLogin(response.data);
          this.props.showToast(1, "Login successfull.");
          this.redirect(response.data.user);
        } else {
          this.props.showToast(2, "Invalid username or password.");
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  redirect = (user) => {
    if (user.role.toLowerCase() === "therapist") {
      this.props.history.push("/dashboard");
    } else if (user.role.toLowerCase() === "superadmin") {
      this.props.history.push("/admin");
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
    const { username, password, role } = this.state;
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
              <div>
                <h1 className="h2">Login</h1>
                <p className="text-muted">Sign In to your account</p>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <button type="submit" className="btn btn-block btn-primary">
                          Login
                        </button>
                      </div>
                    </div>
                    <div className="col-sm-12 text-center">
                      <button
                        type="button"
                        className="btn bg-white px-0 text-primary"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <hr />
              <div>
                <h2>Sign up</h2>
                <p>
                  <b>Don't have an account yet ? You can simply create one</b>
                </p>
                <Link className="btn btn-primary btn-block" to="/auth/register/patient">
                  As Patient
                </Link>
                <div className="uc-divider text-center">
                  <span>OR</span>
                </div>
                <Link className="btn btn-primary btn-block" to="/auth/register/therapist">
                  As Therapist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
