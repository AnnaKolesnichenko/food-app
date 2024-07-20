import React from "react";
import {
  WhyUsParag,
  BenefitsList,
  BenefitItem,
  BenefitP,
  BenefitImg,
  BenefitsContainer,
} from "./OurBenefits.styled";

import price from "../../../data/svg/order-it.png";
import cuisine from "../../../data/svg/cook-it.png";
import cookIt from "../../../data/svg/cook-yourself.png";
import delivery from "../../../data/svg/food-dl.png";

import { FaPeopleLine } from "react-icons/fa6";

const OurBenefits = () => {
  return (
    <div style={{ position: "relative", minHeight: "500px" }}>
      <div style={{ zIndex: "1", position: "relative" }}>
        <WhyUsParag>
          why choose us? <FaPeopleLine />
        </WhyUsParag>
        <BenefitsContainer>
          <BenefitsList>
            <BenefitItem>
              {" "}
              <BenefitImg src={price} alt="price" />
              <BenefitP>
                Order online, leave us your order, get it delivered anywhere at
                the time you pick{" "}
              </BenefitP>
            </BenefitItem>
            <BenefitItem>
              <BenefitImg src={delivery} alt="deliver" />
              <BenefitP>
                Special offers, variety of cuisines and flavors, fast deliveries{" "}
              </BenefitP>
            </BenefitItem>
            <BenefitItem>
              <BenefitImg src={cookIt} alt="cook it" />
              <BenefitP>
                Our chefs work for you, to impress and bring the best of the
                flavors to you.
              </BenefitP>
            </BenefitItem>
            <BenefitItem>
              <BenefitImg src={cuisine} alt="cuisine" />
              <BenefitP>
                Be your own chef, find free recipe, follow the steps and
                enjoy...{" "}
              </BenefitP>
            </BenefitItem>
          </BenefitsList>
        </BenefitsContainer>
      </div>
    </div>
  );
};

export default OurBenefits;
