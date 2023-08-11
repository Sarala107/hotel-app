import React from "react";
import { Link } from "react-router-dom";
import BannerComponent from "../components/banner.component";
import CustomSectionComponent from "../components/custom-section.component";
import HotelServicesComponent from "../components/hotel-services.component";
import PackageComponent from "../components/package.component";
import SearchBoxComponent from "../components/search-box.component";

const HomePageComponent = ({ datas }) => {
  return (
    <div className="home-page">
      <CustomSectionComponent>
        <Link to="/search">
          <SearchBoxComponent />
        </Link>
      </CustomSectionComponent>

      <CustomSectionComponent>
        <BannerComponent datas={datas} />
      </CustomSectionComponent>

      <CustomSectionComponent>
        <HotelServicesComponent />
      </CustomSectionComponent>

      <CustomSectionComponent>
        <PackageComponent datas={datas} />
      </CustomSectionComponent>
    </div>
  );
};

export default HomePageComponent;
