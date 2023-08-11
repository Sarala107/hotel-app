import React from "react";
import { Link } from "react-router-dom";
import { IconLogo, IconNotification } from "./icon.component";

const pImage =
  "https://images.pexels.com/photos/7319347/pexels-photo-7319347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const HeaderComponent = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="header">
          <Link to="/">
            <div className="logo">
              <IconLogo />
            </div>
          </Link>

          <div className="other">
            <div className="notification">
              <IconNotification />
            </div>

            <Link to="/profile">
              <div className="profile-btn">
                <img src={pImage} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
