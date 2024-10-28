// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import the autoplay style

import './style.css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Carousel() {
  // Media query checks
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrLaptop = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

  // Set the image source based on the device type
  const imageSrc = isMobile
    ? '/bannermobile.png'
    : '/banner1.png'; // Default for tablet and larger screens

  const imageWidth = isMobile ? 400 : 1000; // Width adjustments for mobile and larger screens
  const imageHeight = isMobile ? 200 : 400; // Height adjustments for mobile and larger screens

  return (
    <>
      <div className="mySwiper mt-5 bg-white dark:bg-black rounded-xl overflow-hidden">
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000, // Slide every 5 seconds
            disableOnInteraction: false, // Keep autoplay after user interaction
          }}
          className="h-[22rem] md:h-96"
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <SwiperSlide key={index} className="bg-white dark:bg-black rounded-xl">
              <Image
                className="rounded-xl"
                src={imageSrc}
                alt="Carousel Image"
                width={imageWidth}
                height={imageHeight}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
