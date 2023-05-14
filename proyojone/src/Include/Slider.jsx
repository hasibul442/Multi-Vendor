import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
function Slider() {
    const data = [
        {
            id: 1,
            image: "/image/Slider/7.webp",
        },
        {
            id: 7,
            image: "/image/Slider/1.jpg",
        },
        {
            id: 2,
            image: "/image/Slider/2.jpg",
        },
        {
            id: 3,
            image: "/image/Slider/3.jpg",
        },
        {
            id: 4,
            image: "/image/Slider/4.jpg",
        },
        {
            id: 5,
            image: "/image/Slider/5.jpg",
        },
        {
            id: 6,
            image: "/image/Slider/6.webp",
        }
    ]
  return (
    <>
      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
            <SwiperSlide key={item.id}>
                <img src={item.image} className="img-fluid" style={{ width:"100% ", height:"300px"}} alt="" />
            </SwiperSlide>
        ))

        }
      </Swiper>
    </>
  )
}

export default Slider