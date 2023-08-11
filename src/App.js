import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./assets/styles/styles.sass";

import BackBtnComponent from "./components/back-btn.component";
import CardDetailsPageComponent from "./components/card/card-details-page.component";
import HeaderComponent from "./components/header.component";
import MobileNavigationComponent from "./components/mobile-navigation.component";
import UserProfileComponent from "./components/user-profile.component";
import { ALL_DATA } from "./data/data";
import BarPageComponent from "./pages/bar-page.component";
import CabPageComponent from "./pages/cab-page.component";
import CartPageComponent from "./pages/cart-page.component";
import HomePageComponent from "./pages/home-page.component";
import HotelPageComponent from "./pages/hotel-page.component";
import MusicPageComponent from "./pages/music-page.component";
import PackagePageComponant from "./pages/package-page.componant";
import ParkingPageComponent from "./pages/parking-page.component";
import PersonalDataPageComponent from "./pages/personal-data-page.component";
import ProfilePageComponent from "./pages/profile-page.component";
import QuickViewPageComponent from "./pages/quick-view-page.component";
import RestaurantPageComponent from "./pages/restaurant-page.component";
import SearchPageComponent from "./pages/search-page.component";
import SpaPageComponent from "./pages/spa-page.component";
import TrekkingPageComponent from "./pages/trekking-page.component";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className={`App ${
        location.pathname === "/" ||
        location.pathname === "/search" ||
        location.pathname === "/cart"
          ? "padding"
          : ""
      }`}
    >
      {location.pathname === "/" ||
      location.pathname === "/search" ||
      location.pathname === "/cart" ? (
        <React.Fragment>
          <HeaderComponent />
        </React.Fragment>
      ) : (
        <BackBtnComponent />
      )}

      <Routes>
        <Route path="/" element={<HomePageComponent datas={ALL_DATA} />} />

        <Route
          exact
          path="/quick-view/:name"
          element={<QuickViewPageComponent urlName={location.state} />}
        />

        <Route
          exact
          path="/package"
          element={<PackagePageComponant datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/hotel"
          element={<HotelPageComponent datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/restaurant"
          element={<RestaurantPageComponent datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/cab"
          element={<CabPageComponent datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/trekking"
          element={<TrekkingPageComponent datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/spa"
          element={<SpaPageComponent datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/parking"
          element={<ParkingPageComponent datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/bar"
          element={<BarPageComponent datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/music"
          element={<MusicPageComponent datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/details-page/:id"
          element={<CardDetailsPageComponent />}
        />

        <Route exact path="/cart" element={<CartPageComponent />} />

        <Route exact path="/search" element={<SearchPageComponent />} />

        <Route exact path="/profile" element={<ProfilePageComponent />} />

        <Route
          exact
          path="/personal-data"
          element={<PersonalDataPageComponent />}
        />
      </Routes>

      {location.pathname === "/" ||
      location.pathname === "/search" ||
      location.pathname === "/cart" ? (
        <React.Fragment>
          <MobileNavigationComponent />
        </React.Fragment>
      ) : (
        <BackBtnComponent />
      )}
    </div>
  );
};

export default App;
