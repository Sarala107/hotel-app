import React from "react";
import CustomSectionComponent from "../components/custom-section.component";
import SearchBoxComponent from "../components/search-box.component";

const SearchPageComponent = () => {
  return (
    <div className="search-page">
      <CustomSectionComponent>
        <SearchBoxComponent />
      </CustomSectionComponent>
    </div>
  );
};

export default SearchPageComponent;
