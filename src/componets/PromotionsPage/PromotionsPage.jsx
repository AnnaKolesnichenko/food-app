import React from "react";
import {
  BackImage,
  Background,
  DealAbout,
  Deals,
  DealsTitle,
  MainDealsTitle,
} from "./PromotionsPage.styled";
import { useSelector } from "react-redux";

const PromotionsPage = () => {
  const deals = useSelector((state) => state.deals.deals);
  console.log(deals);
  return (
    <Deals>
      <MainDealsTitle>
        Here would be the best sales and Deals of the day and week
      </MainDealsTitle>
      <ul>
        {deals.map((deal) => (
          <li>
            <Background>
              <BackImage src={deal.image} alt={deal.title} />
              <DealAbout>
                <DealsTitle>{deal.title}</DealsTitle>
                <p>{deal.about}</p>
              </DealAbout>
            </Background>
          </li>
        ))}
      </ul>
    </Deals>
  );
};

export default PromotionsPage;
