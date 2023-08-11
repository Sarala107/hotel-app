import React from "react";
import { useNavigate } from "react-router-dom";
import { IconMapMarker } from "../icon.component";

const CardComponent = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="image">
        <img src={data.image} alt="" />
      </div>

      <div
        onClick={() => {
          navigate(`/details-page/${data.id}`, {
            state: {
              data: data,
            },
          });
        }}
      >
        <div className="details">
          <h4 className="name">{data.name}</h4>

          <div className="item-footer">
            <div className="location">
              <IconMapMarker />
              {data.location}
            </div>

            <div className="price">Rs {data.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
