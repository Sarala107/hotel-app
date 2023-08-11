import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const pImage1 =
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const pImage2 =
  "https://images.pexels.com/photos/6136302/pexels-photo-6136302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const pImage3 =
  "https://images.pexels.com/photos/2432299/pexels-photo-2432299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const pImage4 =
  "https://images.pexels.com/photos/2267339/pexels-photo-2267339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const BannerComponent = () => {
  return (
    <div className="banner-component">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner-image">
            <img src={pImage1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-image">
            <img src={pImage2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-image">
            <img src={pImage3} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-image">
            <img src={pImage4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerComponent;
