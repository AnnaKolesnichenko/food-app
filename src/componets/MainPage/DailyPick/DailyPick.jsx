import React, { useState } from "react";
import { ASIAN_DISH } from "data/asian";
import { FastFood } from "data/available-meals";
import hot from "../../../data/svg/fire.png";
import {
  HotImage,
  HotsIcon,
  HotsItem,
  HotsList,
  Fire,
  HotText,
  HotTitle,
} from "./DailyPick.styled";

const DailyPick = ({ handleOpenModal }) => {
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getUniqueRandomItems(arr, count) {
    const items = new Set();
    while (items.size < count) {
      items.add(getRandomItem(arr));
    }
    return Array.from(items);
  }

  const uniqueAsianItems = getUniqueRandomItems(ASIAN_DISH, 3);
  const uniqueFastItems = getUniqueRandomItems(FastFood, 3);

  const picked = Math.random() > 0.5 ? uniqueAsianItems[0] : uniqueFastItems[0];
  const picked1 =
    Math.random() > 0.5 ? uniqueAsianItems[1] : uniqueFastItems[1];
  const picked2 =
    Math.random() > 0.5 ? uniqueAsianItems[2] : uniqueFastItems[2];

  return (
    <div>
      <HotTitle>Hot Pick of the Moment!</HotTitle>

      <HotsList>
        <HotsItem onClick={() => handleOpenModal(picked.id)}>
          <Fire />
          <HotImage src={picked.image} alt="meal of the day" />
          <HotText>{picked.title}</HotText>
        </HotsItem>
        <HotsItem onClick={() => handleOpenModal(picked1.id)}>
          <Fire />
          <HotImage src={picked1.image} alt="meal of the day" />
          <HotText>{picked1.title}</HotText>
        </HotsItem>
        <HotsItem
          onClick={() => {
            console.log(picked2.id);
            handleOpenModal(picked2.id);
          }}
        >
          <Fire />
          <HotImage src={picked2.image} alt="meal of the day" />
          <HotText>{picked2.title}</HotText>
        </HotsItem>
      </HotsList>
    </div>
  );
};

export default DailyPick;
