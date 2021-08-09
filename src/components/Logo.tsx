import React, { FunctionComponent } from "react";
import logo from "../images/logo/103.webp";
import { Link } from "react-router-dom";

const Logo: FunctionComponent = () => {
  return (
    <div className="header">
      <Link to="/">
        <div tabIndex={0} className="logoContainer">
          <img
            className="logo"
            tabIndex={0}
            src={logo}
            alt="Logo"
            width="150px"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
