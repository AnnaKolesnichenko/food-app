import React from "react";
import {
  StyledLiItem,
  StyledImage,
  StyledTitle,
  StyledPrice,
  StyledActionDiv,
  StyledAction,
} from "./CartItems.styled";

const FreeItem = ({ image, title, id }) => {
  return (
    <StyledLiItem key={id}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <StyledImage src={image} alt={title} />
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledPrice>$0</StyledPrice>
        </div>
      </div>
      <StyledActionDiv>
        <StyledAction style={{ backgroundColor: "grey" }}>-</StyledAction>
        <span>1</span>
        <StyledAction style={{ backgroundColor: "grey" }}>-</StyledAction>
      </StyledActionDiv>
    </StyledLiItem>
  );
};

export default FreeItem;
