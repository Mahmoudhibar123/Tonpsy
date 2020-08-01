import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Register";
import Afterlogin from "./components/auth/Afterlogin";

import Doctor from "./components/doctors/Doctor";
import Appointment from "./components/appointment/Appointment";
import MyProfile from "./components/user/MyProfile";
import MyBookings from "./components/user/MyBookings";
import Success from "./components/appointment/Success";
import PaySuccess from "./components/pay/PaySuccess";
import PayFailed from "./components/pay/PayFailed";
import { API_ENDPOINT, IMAGE_ENDPOINT } from "./constant";
import AboutMe from "./components/user/AboutMe";
import ProfileImage from "./components/user/ProfileImage";
import TherapistProfile from "./components/user/TherapistProfile";
import TherapistBookings from "./components/user/TherapistBookings";
import PayForm from "./components/pay/PayForm";
import TherapistDashboard from "./components/user/TherapistDashboard";
import Main from "./components/Chat/Main/Main";
import { AppString } from "./constant";
import AdminDashboard from "./components/admin/AdminDashboard";
import Booking from "./components/admin/Booking";
import Customer from "./components/admin/Customer";
import Therapist from "./components/admin/Therapists";
import Transaction from "./components/admin/Transaction";
import AdminLogin from "./components/admin/auth/AdminLogin";
import TherapistCertificate from "./components/user/TherapistCertificate";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {},
        };
    }

    componentDidMount() {
        this.loginStatus();
    }

    loginStatus = () => {
        axios
            .get(`${API_ENDPOINT}/logged_in`, { withCredentials: true })
            .then((response) => {
                if (response.data.logged_in) {
                    this.handleLogin(response.data);
                } else {
                    this.handleLogout();
                }
            })
            .catch((error) => console.log("api errors:", error));
    };

    handleLogin = (data) => {
        this.setState({
            isLoggedIn: true,
            user: data.user,
        });
        if (data.user.role.toLowerCase() === "therapist") {
            localStorage.setItem(AppString.ID, data.user.doctor.id);
            localStorage.setItem(AppString.NICKNAME, data.user.doctor.name);
        } else {
            localStorage.setItem(AppString.ID, data.user.id);
            localStorage.setItem(AppString.NICKNAME, data.user.first_name);
        }
        localStorage.setItem(AppString.ROLE, data.user.role);
        localStorage.setItem(AppString.PHOTO_URL, IMAGE_ENDPOINT + data.user.image);
    };

    handleLogout = () => {
        this.setState({
            isLoggedIn: false,
            user: {},
        });
    };

    showToast = (type, message) => {
        // 0 = warning, 1 = success
        switch (type) {
            case 0:
                toast.warning(message);
                break;
            case 1:
                toast.success(message);
                break;
            case 2:
                toast.error(message);
                break;
            default:
                break;
        }
    };

    render() {
        console.log("First: ", this.state.user, this.props);

        return ( <
            div >
            <
            ToastContainer autoClose = { 2000 }
            hideProgressBar = { true }
            position = { toast.POSITION.BOTTOM_RIGHT }
            /> <
            Switch >
            <
            Route exact path = "/"
            render = {
                (props) => ( <
                    Home {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route exact path = "/auth/login/:role"
            render = {
                (props) => ( <
                    Login {...props }
                    handleLogin = { this.handleLogin }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route path = "/auth/register/:role"
            render = {
                (props) => ( <
                    Signup {...props }
                    handleLogin = { this.handleLogin }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route path = "/search"
            component = { Afterlogin }
            /> <
            Route path = "/doctors/psychiatrist"
            render = {
                (props) => ( <
                    Doctor {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route path = "/booking"
            render = {
                (props) => ( <
                    Appointment {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route path = "/my"
            render = {
                (props) =>
                this.state.isLoggedIn &&
                this.state.user.role.toLowerCase() === "therapist" ? ( <
                    TherapistProfile {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                ) : ( <
                    MyProfile {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route path = "/mybookings"
            render = {
                (props) => ( <
                    MyBookings {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route path = "/booking-success"
            render = {
                (props) => ( <
                    Success {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route path = "/about"
            render = {
                (props) => ( <
                    AboutMe {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route path = "/profile-picture"
            render = {
                (props) => ( <
                    ProfileImage {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route path = "/therapist-certificate"
            render = {
                (props) => ( <
                    TherapistCertificate {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route path = "/customer-bookings"
            render = {
                (props) => ( <
                    TherapistBookings {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route path = "/pay"
            render = {
                (props) => ( <
                    PayForm {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route path = "/pay-success"
            render = {
                (props) => ( <
                    PaySuccess {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route path = "/pay-failed"
            render = {
                (props) => ( <
                    PayFailed {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route path = "/dashboard"
            render = {
                (props) => ( <
                    TherapistDashboard {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            /> <
            Route path = "/main"
            render = {
                (props) => ( <
                    Main {...props }
                    handleLogout = { this.handleLogout }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    user = { this.state.user }
                    />
                )
            }
            />

            { /* Admin  Routes */ } <
            Route exact path = "/admin"
            render = {
                (props) => ( <
                    AdminLogin {...props }
                    handleLogin = { this.handleLogin }
                    showToast = { this.showToast }
                    />
                )
            }
            /> <
            Route exact path = "/admin/dashboard"
            render = {
                (props) => ( <
                    AdminDashboard {...props }
                    handleLogout = { this.handleLogout }
                    handleLogin = { this.handleLogin }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route exact path = "/admin/bookings"
            render = {
                (props) => ( <
                    Booking {...props }
                    handleLogout = { this.handleLogout }
                    handleLogin = { this.handleLogin }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route exact path = "/admin/customers"
            render = {
                (props) => ( <
                    Customer {...props }
                    handleLogout = { this.handleLogout }
                    handleLogin = { this.handleLogin }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route exact path = "/admin/therapists"
            render = {
                (props) => ( <
                    Therapist {...props }
                    handleLogout = { this.handleLogout }
                    handleLogin = { this.handleLogin }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            Route exact path = "/admin/transactions"
            render = {
                (props) => ( <
                    Transaction {...props }
                    handleLogout = { this.handleLogout }
                    handleLogin = { this.handleLogin }
                    showToast = { this.showToast }
                    loggedInStatus = { this.state.isLoggedIn }
                    />
                )
            }
            /> <
            /Switch> <
            /div>
        );
    }
}
export default App;