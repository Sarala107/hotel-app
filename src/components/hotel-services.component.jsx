import React from "react";
import { Link } from "react-router-dom";
import CustomTitleComponent from "./custom-title.component";
import {
  IconBar,
  IconCab,
  IconHotel,
  IconMusic,
  IconParking,
  IconRestaurant,
  IconSPA,
  IconTrekking,
} from "./icon.component";

const HotelServicesComponent = () => {
  return (
    <div className="hotel-services">
      <CustomTitleComponent title="Hotel Services" />

      <div className="service-btn-list">
        <div className="item">
          <Link to="/hotel">
            <button>
              <div className="icon">
                <IconHotel />
              </div>
              <div className="name">Hotel</div>
            </button>
          </Link>
        </div>

        <div className="item">
          <Link to="/restaurant">
            <button>
              <div className="icon">
                <IconRestaurant />
              </div>
              <div className="name">Restaurant</div>
            </button>
          </Link>
        </div>

        <div className="item">
          <Link to="/cab">
            <button>
              <div className="icon">
                <IconCab />
              </div>
              <div className="name">Cab</div>
            </button>
          </Link>
        </div>

        <div className="item">
          <Link to="/trekking">
            <button>
              <div className="icon">
                <IconTrekking />
              </div>
              <div className="name">Trekking</div>
            </button>
          </Link>
        </div>

        <div className="item">
          <Link to="/spa">
            <button>
              <div className="icon">
                <IconSPA />
              </div>
              <div className="name">SPA</div>
            </button>
          </Link>
        </div>

        <div className="item">
          <Link to="/parking">
            <button>
              <div className="icon">
                <IconParking />
              </div>
              <div className="name">Parking</div>
            </button>
          </Link>
        </div>

        <div className="item">
          <Link to="/bar">
            <button>
              <div className="icon">
                <IconBar />
              </div>
              <div className="name">Bar</div>
            </button>
          </Link>
        </div>

        <div className="item">
          <Link to="/music">
            <button>
              <div className="icon">
                <IconMusic />
              </div>
              <div className="name">Music</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelServicesComponent;
