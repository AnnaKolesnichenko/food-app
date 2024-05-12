import React from "react";

import {
  WhyUsParag,
  BenefitsList,
  BenefitItem,
  BenefitP,
  BenefitImg,
} from "./OurBenefits.styled";

import price from "../../../data/svg/online.jpeg";
import cuisine from "../../../data/svg/food.jpeg";
import cookIt from "../../../data/svg/f.jpeg";
import delivery from "../../../data/svg/de.webp";

const OurBenefits = () => {
  return (
    <>
      <WhyUsParag>why choose us?</WhyUsParag>
      <BenefitsList>
        <BenefitItem>
          <BenefitP>
            Order online, get it delivered anywhere you choose{" "}
          </BenefitP>
          <BenefitImg src={price} alt="price" />
        </BenefitItem>
        <BenefitItem>
          <BenefitImg src={cuisine} alt="cuisine" />
          <BenefitP>Wide range of cuisines and tastes </BenefitP>
        </BenefitItem>
        <BenefitItem>
          <BenefitP>You can order, try, then cook it yourself </BenefitP>
          <BenefitImg src={cookIt} alt="cook it" />
        </BenefitItem>
        <BenefitItem>
          <BenefitImg src={delivery} alt="deliver" />
          <BenefitP>Special offers and fast deliveries </BenefitP>
        </BenefitItem>
      </BenefitsList>
    </>
  );
};

export default OurBenefits;
