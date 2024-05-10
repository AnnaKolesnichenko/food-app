import React from "react";

import {
  Container,
  LinkContainer,
  SliderMenuTitle,
  StyledLink,
  WhiteBackground,
} from "./MainPage.styled";
import Background from "../../data/assets/re2.jpeg";
import { ASIAN_DISH } from "data/asian";
import SliderResponsive from "./Slider/Slider";
import { FastFood } from "data/available-meals";
import { useSelector } from "react-redux";

// const items = ASIAN_DISH.map((item) => item.title);

const MainPage = () => {
  const favourites = useSelector((state) => state.liked.itemsLiked);
  console.log(favourites.length);
  return (
    <div style={{ height: "100vh" }}>
      <Container
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          height: "700px",
          width: "100%",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <LinkContainer>
          <StyledLink
            // as={motion.NavLink}
            //animate={{ y: 30 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 3, type: "spring", bounce: 0.7 }}
            to="/sushi"
          >
            asian food
          </StyledLink>
          <StyledLink
            // as={motion.NavLink}
            //animate={{ y: 30 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 3, type: "spring", bounce: 0.7 }}
            to="/pizza"
          >
            fast food
          </StyledLink>
          <StyledLink
            // as={motion.NavLink}
            //animate={{ y: 30 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 3, type: "spring", bounce: 0.7 }}
            to="/salads"
          >
            simple food
          </StyledLink>
        </LinkContainer>
      </Container>
      <WhiteBackground>
        <div>
          <p>why choose us?</p>
          <ul>
            <li>
              <p>Best prices, no extra charges </p>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
              <p>Wide range of cuisines and tastes </p>
            </li>
            <li>
              <p>You can order, try, then cook it yourself </p>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
              <p>Special offers and fast deliveries </p>
            </li>
          </ul>
        </div>
        <SliderMenuTitle>Flavours of the East</SliderMenuTitle>
        <SliderResponsive items={ASIAN_DISH} />

        <SliderMenuTitle>Burgers & Grill</SliderMenuTitle>
        <SliderResponsive items={FastFood} />

        <SliderMenuTitle>Any of Your Choice?</SliderMenuTitle>
        {favourites && <SliderResponsive items={favourites} />}
        {favourites.length === 0 && (
          <p>Add something you like, do not be shy!!</p>
        )}
      </WhiteBackground>
    </div>
  );
};

export default MainPage;
