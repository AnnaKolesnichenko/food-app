import React, { useState } from "react";

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
import { AnimatePresence } from "framer-motion";
import ModalAbout from "componets/ModalAbout/ModalAbout";

const MainPage = () => {
  const favourites = useSelector((state) => state.liked.itemsLiked);
  const [selectedItem, setSelectedItem] = useState(false);
  console.log(favourites.length);

  const handleOpenModal = (id) => {
    setSelectedItem(id);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  return (
    <div>
      <AnimatePresence>
        {selectedItem && (
          <ModalAbout id={selectedItem} handleCloseModal={handleCloseModal} />
        )}
      </AnimatePresence>
      <Container
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          height: "500px",
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
          <DailyPick handleOpenModal={handleOpenModal} />
          <SliderMenuTitle>Flavours of the East</SliderMenuTitle>
          <SliderResponsive items={ASIAN_DISH} />

          <SliderMenuTitle>Burgers & Grill</SliderMenuTitle>
          <SliderResponsive items={FastFood} />
          <OurBenefits />
        </InformativeBlock>
      </WhiteBackground>
    </div>
  );
};

export default MainPage;
