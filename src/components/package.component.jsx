import React from "react";
import CustomTitleComponent from "./custom-title.component";
import { IconMapMarker } from "./icon.component";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const PackageComponent = ({ datas }) => {
  const navigate = useNavigate();

  return (
    <div className="package">
      <CustomTitleComponent title="Package" url="/package" />

      <div className="package-list">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {datas.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="item"
                onClick={() => {
                  navigate(`/quick-view/${data.id}`, {
                    state: {
                      package: "/package",
                      datas: datas,
                      data: data,
                    },
                  });
                }}
              >
                <div className="image">
                  <img src={data.image} alt="" />
                </div>

                <div>
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
            </SwiperSlide>
          ))}

          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PackageComponent;
