import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  IconNavActive,
  IconNavCart,
  IconNavHome,
  IconNavSearch,
} from "./icon.component";

const MobileNavigationComponent = () => {
  const [navButton1, setNavButton1] = useState(false);
  const [navButton2, setNavButton2] = useState(false);
  const [navButton3, setNavButton3] = useState(false);

  const navigator = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setNavButton1(true);
      setNavButton2(false);
      setNavButton3(false);
    }

    if (location.pathname === "/cart") {
      setNavButton1(false);
      setNavButton2(true);
      setNavButton3(false);
    }

    if (location.pathname === "/search") {
      setNavButton1(false);
      setNavButton2(false);
      setNavButton3(true);
    }
  }, [location.pathname]);
  return (
    <div className="mobile-navigation">
      <div className="nav-sec">
        <button
          onClick={() => {
            navigator("/");
          }}
          className={`${navButton1 ? "actice" : ""}`}
        >
          <div className="icon-sec">
            <div className="indicator">
              <IconNavActive />
            </div>

            <div className="icon">
              <IconNavHome />
            </div>
          </div>
          <div className="name">Home</div>
        </button>

        <button
          onClick={() => {
            navigator("/cart");
          }}
          className={`${navButton2 ? "actice" : ""}`}
        >
          <div className="icon-sec">
            <div className="indicator">
              <IconNavActive />
            </div>

            <div className="icon">
              <IconNavCart />
            </div>
          </div>
          <div className="name">Home</div>
        </button>

        <button
          onClick={() => {
            navigator("/search");
          }}
          className={`${navButton3 ? "actice" : ""}`}
        >
          <div className="icon-sec">
            <div className="indicator">
              <IconNavActive />
            </div>

            <div className="icon">
              <IconNavSearch />
            </div>
          </div>
          <div className="name">Home</div>
        </button>
      </div>
    </div>
  );
};

export default MobileNavigationComponent;
