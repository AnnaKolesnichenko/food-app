import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SliderContainer,
  SliderImage,
  SliderItem,
  SliderText,
} from "./Slider.styled";
import { motion } from "framer-motion";

const SliderResponsive = ({ items }) => {
  const CustomArrow = ({ className, style, onClick }) => (
    <button
      className={className}
      style={{
        ...style,
        backgroundColor: "grey",
        width: "20px",
        height: "20px",
        borderRadius: "100px",
      }}
      onClick={onClick}
    ></button>
  );
  var settings = {
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: <CustomArrow />,
    nextArrow: <CustomArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        {items.map((item) => (
          <SliderItem>
            <div
              style={{
                width: "95%",
                height: "220px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              <SliderImage
                as={motion.img}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "spring" }}
                src={item.image}
                alt={item.title}
                // width={250}
                // height={200}
              />
              <SliderText>{item.title}</SliderText>
            </div>
          </SliderItem>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default SliderResponsive;
