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

  // Image sources for mobile and desktop
  const images = [
    { mobile: '/banner1mobile.png', desktop: '/banner1.png' },
    { mobile: '/banner2mobile.png', desktop: '/banner2.png' },
    { mobile: '/banner3mobile.png', desktop: '/banner3.png' },
  ];

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
          {images.map((image, index) => {
            const imageSrc = isMobile ? image.mobile : image.desktop;
            const imageWidth = isMobile ? 400 : 1000;
            const imageHeight = isMobile ? 200 : 400;

            return (
              <SwiperSlide key={index} className="bg-white dark:bg-black rounded-xl">
                <Image
                  className="rounded-xl"
                  src={imageSrc}
                  alt={`Carousel Image ${index + 1}`}
                  width={imageWidth}
                  height={imageHeight}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
