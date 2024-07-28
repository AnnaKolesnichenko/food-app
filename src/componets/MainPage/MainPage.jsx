import React, { useEffect, useState } from "react";

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
// import { useSelector } from "react-redux";
import OurBenefits from "./OurBenefits/OurBenefits";
import DailyPick from "./DailyPick/DailyPick";
import Deals from "./Deals/Deals";
import { AnimatePresence } from "framer-motion";
import ModalAbout from "componets/ModalAbout/ModalAbout";
import { LuJapaneseYen } from "react-icons/lu";
import { GiHamburger } from "react-icons/gi";
import SubscriptionArea from "./SubscriptionArea/SubscriptionArea";
import PromoModal from "./Countdown/PromoModal";

const MainPage = () => {
  // const favourites = useSelector((state) => state.liked.itemsLiked);
  const [selectedItem, setSelectedItem] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true);
    }, 1000); // Открытие модального окна через 10 секунд

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const getMidnightTimestamp = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to the next midnight (00:00:00)
    return midnight.getTime(); // Return timestamp in milliseconds
  };

  const promotion = {
    title: "Скидка 10% на первый заказ!",
    description: "Сделайте первый заказ до конца дня и получите 10% скидку.",
    endTime: getMidnightTimestamp(), // Set to midnight of the current day
  };

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
            asian vibe
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
            simply good
          </StyledLink>
        </LinkContainer>
        <SubscriptionArea />
      </Container>
      <WhiteBackground>
        <InformativeBlock>
          <AnimatePresence>
            <DailyPick handleOpenModal={handleOpenModal} />
          </AnimatePresence>
          <AnimatePresence>
            <Deals />
          </AnimatePresence>
          <SliderMenuTitle>
            Flavours of the East
            <LuJapaneseYen />
          </SliderMenuTitle>
          <SliderResponsive items={ASIAN_DISH} />

          <SliderMenuTitle>
            Burgers & Grill <GiHamburger />
          </SliderMenuTitle>
          <SliderResponsive items={FastFood} />

          <OurBenefits />
        </InformativeBlock>
      </WhiteBackground>
      <AnimatePresence>
        {modalIsOpen && (
          <PromoModal onRequestClose={handleClose} promotion={promotion} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainPage;
