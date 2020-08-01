import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import Logo from "./../assets/img/logo_2x.png";
import { API_ENDPOINT } from "../constant";

const Header = (props) => {
  let history = useHistory();
  const handleClick = () => {
    axios
      .delete(`${API_ENDPOINT}/logout`, { withCredentials: true })
      .then((response) => {
        props.handleLogout();
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={`nav-bar-custom ${props.isInner ? "nav-bar-custom1" : ""}`}
      >
        <Navbar.Brand href="/">
          <img src={Logo} alt="" className="logo-icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" />
            <Nav.Link href="#pricing" />
          </Nav>
          <Nav>
            <Nav.Item>
              <div id="google_translate_element"></div>
            </Nav.Item>
            {props.loggedInStatus ? (
              <>
                <Nav.Item className="mr-0 mb-2 mr-md-2">
                  <Nav.Link
                    className="btn btn-success green-btn btn-link px-4"
                    href="/doctors/psychiatrist"
                  >
                    Browse Therapists
                  </Nav.Link>
                </Nav.Item>
                <Dropdown alignRight>
                  <Dropdown.Toggle
                    variant="success"
                    className="green-btn"
                    id="user_dropdown"
                  >
                    My Account
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {props.user &&
                      props.user.role.toLowerCase() === "therapist" && (
                        <>
                          <Dropdown.Item href="/dashboard">
                            Dashboard
                          </Dropdown.Item>
                          <Dropdown.Item href="/customer-bookings">
                            Patient Bookings 
                          </Dropdown.Item>
                        </>
                      )}
                    {props.user &&
                      props.user.role.toLowerCase() === "customer" && (
                        <Dropdown.Item href="/mybookings">
                          My Bookings
                        </Dropdown.Item>
                      )}
                    <Dropdown.Item href="/my">My Profile</Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      onClick={() => handleClick()}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Dropdown alignRight className="mr-0 mb-2 mr-md-2">
                  <Dropdown.Toggle
                    variant="success"
                    className="green-btn"
                    id="signup_dropdown"
                  >
                    Log In
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/auth/login/patient">As Patient</Dropdown.Item>
                    <Dropdown.Item href="/auth/login/therapist">
                      As Therapist
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown alignRight>
                  <Dropdown.Toggle
                    variant="success"
                    className="green-btn"
                    id="signup_dropdown"
                  >
                    Sign Up
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/auth/register/patient">
                      As Patient
                    </Dropdown.Item>
                    <Dropdown.Item href="/auth/register/therapist">
                      As Therapist
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Header;
