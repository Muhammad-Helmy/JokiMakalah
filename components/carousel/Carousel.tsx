// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './style.css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Carousel() {
  // Media query checks
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Set the image source based on the device type
  const imageSrc = isMobile ? '/bannermobile.png' : '/banner1.png';
  const imageWidth = isMobile ? 400 : 1000;
  const imageHeight = isMobile ? 200 : 400;

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
            delay: 5000,
            disableOnInteraction: false,
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
