import React from "react";

import {
  WhyUsParag,
  BenefitsList,
  BenefitItem,
  BenefitP,
  BenefitImg,
} from "./OurBenefits.styled";

import price from "../../../data/svg/p.png";
import cuisine from "../../../data/svg/f.jpeg";
import cookIt from "../../../data/svg/co.avif";
import delivery from "../../../data/svg/de.webp";

const OurBenefits = () => {
  return (
    <>
      <WhyUsParag>why choose us?</WhyUsParag>
      <BenefitsList>
        <BenefitItem>
          <BenefitP>Best prices, no extra charges </BenefitP>
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
