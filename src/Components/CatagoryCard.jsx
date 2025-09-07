// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import sliderC1 from '../assets/home/slide1.jpg';
import sliderC2 from '../assets/home/slide2.jpg';
import sliderC3 from '../assets/home/slide3.jpg';
import sliderC4 from '../assets/home/slide4.jpg';
import sliderC5 from '../assets/home/slide5.jpg';


import { Pagination } from 'swiper/modules';

const CatagoryCard = () => {
  return (
    <Swiper 
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img className="w-full" src={sliderC1} alt="" /> <h1 className="text-2xl font-bold  text-center relative bottom-20 text-white">Salads</h1></SwiperSlide>
      <SwiperSlide><img className="w-full" src={sliderC2} alt="" /><h1 className="text-2xl font-bold  text-center relative bottom-20 text-white">Soups</h1></SwiperSlide>
      <SwiperSlide><img className="w-full" src={sliderC3} alt="" /><h1 className="text-2xl font-bold  text-center relative bottom-20 text-white">pizzas</h1></SwiperSlide>
      <SwiperSlide><img className="w-full" src={sliderC4} alt="" /><h1 className="text-2xl font-bold  text-center relative bottom-20 text-white">desserts</h1></SwiperSlide>
      <SwiperSlide><img className="w-full" src={sliderC5} alt="" /><h1 className="text-2xl font-bold  text-center relative bottom-20 text-white">Salads</h1></SwiperSlide>
    </Swiper>
  );
};

export default CatagoryCard;
