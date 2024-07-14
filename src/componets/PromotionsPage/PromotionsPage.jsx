import React from "react";
import { Deals, DealsTitle, MainDealsTitle } from "./PromotionsPage.styled";

const PromotionsPage = () => {
  return (
    <Deals>
      <MainDealsTitle>
        Here would be the best sales and Deals of the day and week
      </MainDealsTitle>
      <ul>
        <li>
          <div>
            <DealsTitle>Summer Sale</DealsTitle>
          </div>
        </li>
        <li>
          <div>
            <DealsTitle>Deal of the Day</DealsTitle>
          </div>
        </li>
        <li>
          <div>
            <DealsTitle>Buy 2, get 1 free drink! </DealsTitle>
            <DealsTitle>Buy 4, get 1 set of rolls!</DealsTitle>
          </div>
        </li>
      </ul>
    </Deals>
  );
};

export default PromotionsPage;
