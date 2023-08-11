import React from "react";
import { useLocation } from "react-router-dom";
import { IconHeart, IconMapMarker } from "../icon.component";

const CardDetailsPageComponent = () => {
  const { state } = useLocation();

  return (
    <div className="card-details-page">
      <div className="image">
        <img src={state.data.image} alt="" />
      </div>

      <div className="details">
        <div className="wrapper">
          <div className="head">
            <div className="name">{state.data.name}</div>
            <button className="wishlist">
              <IconHeart />
            </button>
          </div>

          <div className="rating"></div>

          <div className="location">
            <IconMapMarker /> {state.data.location}
          </div>

          <div className="price">
            from: <span>Rs {state.data.price}</span> to:{" "}
            <span>Rs {state.data.price}</span>
          </div>

          <div className="desc">
            <h3>Description</h3>
            <p>{state.data.descriptions}</p>
          </div>
        </div>
      </div>

      {/* <div className="more-categories">
        <div className="wrapper">
          <CustomTitleComponent title="Popular Categories" />
        </div>
      </div> */}
    </div>
  );
};

export default CardDetailsPageComponent;
