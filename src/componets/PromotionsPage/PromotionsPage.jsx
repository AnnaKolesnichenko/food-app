import React from "react";
import {
  BackImage,
  Background,
  DealAbout,
  Deals,
  DealsDescr,
  DealsTitle,
  MainDealsTitle,
  DealsList,
  DealArrow,
} from "./PromotionsPage.styled";
import { useSelector } from "react-redux";

import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PromotionsPage = () => {
  const deals = useSelector((state) => state.deals.deals);
  console.log(deals);
  return (
    <Deals>
      <MainDealsTitle>
        Check with what's new and refreshing here... Be tuned with more deals to
        come!
      </MainDealsTitle>

      <DealsList>
        {" "}
        {deals.map((deal, i) => (
          <Background key={i}>
            <BackImage src={deal.image} alt={deal.title} />
            <DealAbout>
              <DealsTitle>{deal.title}</DealsTitle>
              <DealsDescr>{deal.about}</DealsDescr>
            </DealAbout>
            <Link to={deal.link}>
              <DealArrow
                style={{ position: "absolute", bottom: "20px", right: "20px" }}
              >
                <FaLongArrowAltRight size={32} fill="black" />
              </DealArrow>
            </Link>
          </Background>
        ))}{" "}
      </DealsList>
    </Deals>
  );
};

export default PromotionsPage;
