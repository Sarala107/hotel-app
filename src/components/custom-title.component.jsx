import React from "react";
import { Link } from "react-router-dom";

const CustomTitleComponent = ({ title, url }) => {
  return (
    <div className="custom-title">
      <h4>
        Explore <span>{title}</span>
      </h4>

      {url ? (
        <Link to={url} className="nav-btn">
          <button>Show All</button>
        </Link>
      ) : null}
    </div>
  );
};

export default CustomTitleComponent;
