import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Nav } from "react-bootstrap";
import Logo from "./../../../assets/img/logo_2x.png";
import { API_ENDPOINT } from "../../../constant";
import "./admin.css";

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
    <Nav className="ucnavbar navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a
        className="ucnavbar-brand col-sm-3 col-md-2 mr-0"
        href="/"
      >
        <img src={Logo} alt="" className="talkspace" width="100" />
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" onClick={() => handleClick()}>
            Sign out
          </a>
        </li>
      </ul>
    </Nav>
  );
};

export default Header;
