import { useState, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import image1 from "../images/clients/1.png";
import image2 from "../images/clients/2.png";
import image3 from "../images/clients/3.png";
import image4 from "../images/clients/4.png";
import image5 from "../images/clients/5.png";
import image6 from "../images/clients/6.png";
import image7 from "../images/clients/7.png";
import image8 from "../images/clients/8.png";
import image9 from "../images/clients/9.png";
import image10 from "../images/clients/10.png";
import image11 from "../images/clients/11.png";
import image12 from "../images/clients/12.png";
import image13 from "../images/clients/13.png";
import image14 from "../images/clients/14.png";
import image15 from "../images/clients/15.png";
import image16 from "../images/clients/16.png";
import image17 from "../images/clients/17.png";
import image18 from "../images/clients/18.png";

// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./styles/OurClients.css";

const images = [
  { image1 },
  { image2 },
  { image3 },
  { image4 },
  { image5 },
  { image6 },
  { image7 },
  { image8 },
  { image9 },

  // add more logo objects as needed
];

const images2 = [
  { image10 },
  { image11 },
  { image12 },
  { image13 },
  { image14 },
  { image15 },
  { image16 },
  { image17 },
  { image18 },
];

const imagesWithIndex = images.map((image, index) => (
  <SwiperSlide key={index} className="netImage">
    <img width={320} height={150} effect="blur" src={Object.values(image)[0]} />
  </SwiperSlide>
));

const imagesWithInd = images2.map((image, index) => (
  <SwiperSlide key={index} className="netImage">
    <img width={320} height={150} effect="blur" src={Object.values(image)[0]} />
  </SwiperSlide>
));

const OurClients = () => {
  return (
    <div className="clientsBg">
      <div className="slidefour container">
        <h1>Our Clients</h1>
      </div>
      <div>
        <Swiper
          data-aos="fade-up"
          data-aos-duration="1500"
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}>
          <div>{imagesWithIndex}</div>
        </Swiper>
      </div>
      <div>
        <Swiper
          data-aos="fade-up"
          data-aos-duration="1500"
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper2"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}>
          <div>{imagesWithInd}</div>
        </Swiper>
      </div>
    </div>
  );
};

export default OurClients;
