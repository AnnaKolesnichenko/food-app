import React from "react";
import { BsArrowUpLeftSquareFill } from "react-icons/bs";
import { BsArrowDownRightSquareFill } from "react-icons/bs";
import { ArrowDiv } from "./FixedPromos.styled";

const FixedPromos = ({ modalIsOpen, handlePromoClose, handlePromoOpen }) => {
  return (
    <ArrowDiv>
      {modalIsOpen ? (
        <BsArrowDownRightSquareFill
          fill="orange"
          size={50}
          onClick={handlePromoClose}
        />
      ) : (
        <BsArrowUpLeftSquareFill
          fill="orange"
          size={50}
          onClick={handlePromoOpen}
        />
      )}
    </ArrowDiv>
  );
};

export default FixedPromos;
