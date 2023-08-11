import React from "react";
import { useLocation } from "react-router-dom";
import { IconSearch } from "./icon.component";

const SearchBoxComponent = () => {
  const location = useLocation();
  return (
    <div className="search-box">
      <div className="profile-info">
        Hello, <span>Sukhi</span>
      </div>

      <div className="search-area">
        <label className="form-input-label" htmlFor="forSearch">
          Find your delicious dish
        </label>

        <div className="group">
          <div className="search-icon">
            <IconSearch />
          </div>

          {/* <div className="filter-btn">
          <IconFilter />
        </div> */}

          {location.pathname === "/search" ? (
            <input
              className="custom-input"
              id="forSearch"
              type="text"
              placeholder="Search food"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchBoxComponent;
