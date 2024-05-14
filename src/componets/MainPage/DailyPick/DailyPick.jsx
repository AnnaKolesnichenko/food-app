import React from "react";
import { ASIAN_DISH } from "data/asian";
import { FastFood } from "data/available-meals";
import hot from "../../../data/svg/hottest.png";

const DailyPick = () => {
  const asianRandom = Math.floor(Math.random() * ASIAN_DISH.length);
  const fastRandom = Math.floor(Math.random() * FastFood.length);

  const existingAsianItem = ASIAN_DISH[asianRandom];
  const existingFastItem = FastFood[fastRandom];

  const picked = Math.random() > 0.5 ? existingAsianItem : existingFastItem;
  return (
    <div>
      <h3>Today's Pick</h3>

      <div>
        <img src={hot} alt="hot icon" />
        <img src={picked.image} alt="meal of the day" />
        <p>{picked.title}</p>
      </div>
    </div>
  );
};

export default DailyPick;
