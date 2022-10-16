import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav__components">
        <div className="nav__componentsLeft">
          <b onClick={() => navigate("/")}>kiran.me</b>
        </div>
        <div className="nav__componentsRight">
          <p onClick={() => navigate("contact")}>Chat now</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
