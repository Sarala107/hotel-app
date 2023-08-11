// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/swiper-bundle.min.css";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// // import Swiper core and required modules
// import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// import { IconHeart, IconMapMarker } from "../icon.component";

// SwiperCore.use([FreeMode, Navigation, Thumbs]);
// const QuickViewComponent = ({ datas, thumbsSwiper }) => {
//   return (
//     <div className="quick-view">
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         {datas !== undefined
//           ? datas.map((data) => (
//               <SwiperSlide key={data.id}>
//                 <div className="quick-view-area">
//                   <div
//                     className="image"
//                     style={{ backgroundImage: `url(${data.image})` }}
//                   ></div>

//                   <div className="details">
//                     <div className="wrapper">
//                       <div className="head">
//                         <div className="name">{data.name}</div>
//                         <button className="wishlist">
//                           <IconHeart />
//                         </button>
//                       </div>

//                       <div className="rating"></div>

//                       <div className="location">
//                         <IconMapMarker /> {data.location}
//                       </div>

//                       <div className="price">
//                         from: <span>Rs {data.price}</span> to:
//                         <span>Rs {data.price}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))
//           : "Loading..."}

//           <SwiperSlide></SwiperSlide>
//           <SwiperSlide></SwiperSlide>
//           <SwiperSlide></SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default QuickViewComponent;
