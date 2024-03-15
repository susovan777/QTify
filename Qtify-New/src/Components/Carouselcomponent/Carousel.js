import React, { useRef } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Cardcomponent/Card";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = ({ data, swiperId }) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={30}
        navigation={{
          nextEl: `.arrow-right-${swiperId}`,
          prevEl: `.arrow-left-${swiperId}`,
        }}
        virtual
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data.map((value) => (
          <SwiperSlide key={value.id}>
            <Card
              title={value.title}
              follows={value.follows}
              image={value.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`arrow-left arrow arrow-left-${swiperId}`}
        onClick={handlePrev}
      >
        <img src="left.png" alt="left" />
      </div>
      <div
        className={`arrow-right arrow arrow-right-${swiperId}`}
        onClick={handleNext}
      >
        <img src="right.png" alt="right" />
      </div>
    </div>
  );
};

export default Carousel;
