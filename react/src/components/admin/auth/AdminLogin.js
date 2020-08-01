import React, { Component } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../../../constant";
import "./AdminLogin.css";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: "",
    };
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
      this.props.history.push("/admin/dashboard");
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
    const { username, password } = this.state;
    return (
      <div className="login_form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="card-group my-5">
                <div className="card p-sm-4">
                  <div className="card-body text-center">
                    <h1 className="h3">Admin Login</h1>
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
                        <div className="col-sm-6">
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
