// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import the autoplay style

import './style.css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Autoplay]} // Include Autoplay module
        autoplay={{
          delay: 5000, // Slide every 5 seconds
          disableOnInteraction: false, // Keep autoplay after user interaction
        }}
        className="mySwiper mt-4 bg-white h-72"
      >
        <SwiperSlide><Image className="rounded-xl" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
        <SwiperSlide><Image className="rounded-xl" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
        <SwiperSlide><Image className="rounded-xl" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
        <SwiperSlide><Image className="rounded-xl" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
        <SwiperSlide><Image className="rounded-xl" src="/banner1.png" alt="Logo" width={500} height={400} /></SwiperSlide>
      </Swiper>
    </>
  );
}
