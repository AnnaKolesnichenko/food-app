import React from "react";

import {
  Container,
  LinkContainer,
  SliderMenuTitle,
  StyledLink,
  WhiteBackground,
  InformativeBlock,
} from "./MainPage.styled";
import Background from "../../data/assets/re2.jpeg";
import { ASIAN_DISH } from "data/asian";
import SliderResponsive from "./Slider/Slider";
import { FastFood } from "data/available-meals";
import { useSelector } from "react-redux";
import OurBenefits from "./OurBenefits/OurBenefits";
import DailyPick from "./DailyPick/DailyPick";

const MainPage = () => {
  const favourites = useSelector((state) => state.liked.itemsLiked);
  console.log(favourites.length);
  return (
    <div>
      <Container
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          height: "900px",
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
            whileHover={{ y: -20 }}
            transition={{ duration: 3, type: "spring", bounce: 0.7 }}
            to="/sushi"
          >
            asian food
          </StyledLink>
          <StyledLink
            whileHover={{ y: -20 }}
            transition={{ duration: 3, type: "spring", bounce: 0.7 }}
            to="/pizza"
          >
            fast food
          </StyledLink>
          <StyledLink
            whileHover={{ y: -20 }}
            transition={{ duration: 3, type: "spring", bounce: 0.7 }}
            to="/salads"
          >
            simple food
          </StyledLink>
        </LinkContainer>
      </Container>
      <WhiteBackground>
        <InformativeBlock>
          <OurBenefits />

          <DailyPick />
          <SliderMenuTitle>Flavours of the East</SliderMenuTitle>
          <SliderResponsive items={ASIAN_DISH} />

          <SliderMenuTitle>Burgers & Grill</SliderMenuTitle>
          <SliderResponsive items={FastFood} />
        </InformativeBlock>
      </WhiteBackground>
    </div>
  );
};

export default MainPage;
