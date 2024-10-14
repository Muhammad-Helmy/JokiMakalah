import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        className="mySwiper mt-4 bg-white h-72"
      >
        <SwiperSlide><Image className="rounded-md" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
        <SwiperSlide><Image className="rounded-md" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
        <SwiperSlide><Image className="rounded-md" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
        <SwiperSlide><Image className="rounded-md" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
        <SwiperSlide><Image className="rounded-md" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
      </Swiper>
    </>
  );
}
