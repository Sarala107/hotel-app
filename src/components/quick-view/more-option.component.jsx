import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectFade,
  Pagination,
  FreeMode,
  Thumbs,
} from "swiper";
import { IconArrow, IconHeart, IconMapMarker } from "../icon.component";
import { Link, useNavigate } from "react-router-dom";

// install Swiper modules
// SwiperCore.use([
//   Autoplay,
//   EffectFade,
//   Pagination,
//   FreeMode,
//   Navigation,
//   Thumbs,
// ]);

const MoreOptionComponent = ({ url, datas, clickedData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const navigator = useNavigate();

  return (
    <React.Fragment>
      {thumbsSwiper !== null ? (
        <div className="quick-view">
          <Swiper
            spaceBetween={10}
            effect={"fade"}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs]}
            className="mySwiper2"
          >
            {datas !== undefined
              ? datas.map((data) => (
                  <SwiperSlide key={data.id}>
                    <div className="quick-view-area">
                      <div
                        className="image"
                        style={{ backgroundImage: `url(${data.image})` }}
                      ></div>

                      <div className="details">
                        <div className="wrapper">
                          <div className="head">
                            <div className="name">{data.name}</div>
                            <button className="wishlist">
                              <IconHeart />
                            </button>
                          </div>

                          <div className="rating"></div>

                          <div className="location">
                            <IconMapMarker /> {data.location}
                          </div>

                          <div className="price">
                            from: <span>Rs {data.price}</span> to:
                            <span>Rs {data.price}</span>
                          </div>

                          <button
                            onClick={() => {
                              navigator(`/details-page/${data.id}`, {
                                state: {
                                  data: data,
                                },
                              });
                            }}
                            className="view-btn"
                          >
                            View Details <IconArrow />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : "Loading..."}

            <SwiperSlide></SwiperSlide>

            <SwiperSlide></SwiperSlide>

            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="quick-view">
          <Swiper
            spaceBetween={10}
            effect={"fade"}
            modules={[Thumbs]}
            className="mySwiper2"
          >
            {clickedData !== undefined ? (
              <SwiperSlide key={clickedData.id}>
                <div className="quick-view-area">
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${clickedData.image})` }}
                  ></div>

                  <div className="details">
                    <div className="wrapper">
                      <div className="head">
                        <div className="name">{clickedData.name}</div>
                        <button className="wishlist">
                          <IconHeart />
                        </button>
                      </div>

                      <div className="rating"></div>

                      <div className="location">
                        <IconMapMarker /> {clickedData.location}
                      </div>

                      <div className="price">
                        from: <span>Rs {clickedData.price}</span> to:
                        <span>Rs {clickedData.price}</span>
                      </div>

                      <button
                        onClick={() => {
                          navigator(`/details-page/${clickedData.id}`, {
                            state: {
                              data: clickedData,
                            },
                          });
                        }}
                        className="view-btn"
                      >
                        View Details <IconArrow />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              "Loading..."
            )}

            <SwiperSlide></SwiperSlide>

            <SwiperSlide></SwiperSlide>

            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      )}

      <div className="more-option">
        <div className="all-item">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            // freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"
          >
            {datas !== undefined
              ? datas.map((data, idx) => (
                  <SwiperSlide key={data.id}>
                    <div className="item">
                      <div className="image">
                        <img src={data.image} alt="" />
                      </div>

                      <div className="details">
                        <div className="item-body">
                          <div className="name">{data.name}</div>

                          <div className="location">
                            <IconMapMarker />
                            {data.location}
                          </div>
                        </div>

                        <div className="price">Rs {data.price}/-</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : "Loading..."}

            <SwiperSlide></SwiperSlide>

            <SwiperSlide></SwiperSlide>

            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <Link to={`${url}`} className="explore-all">
          Explore All <IconArrow />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default MoreOptionComponent;
