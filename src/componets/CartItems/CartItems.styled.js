import styled from "styled-components";

export const StyledListItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledLiItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const StyledImage = styled.img`
  width: 80px;
  height: auto;
  border-radius: 5px;
`;

export const StyledTitle = styled.h2`
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  margin: 0;
  margin-bottom: 7px;
`;

export const StyledPrice = styled.span`
  font-size: 14px;
  color: #333;
`;

export const OriginalPrice = styled(StyledPrice)`
  text-decoration: line-through;
  color: coral;
  margin-right: 0.5rem;
  font-size: 14px;
`;

export const DiscountedPrice = styled(StyledPrice)`
  font-size: 14px;
  color: green;
  font-weight: bold;
`;

export const StyledActionDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const StyledAction = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  background-color: #2d2713;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 100px;

  &:hover {
    background-color: #e37f19;
  }
`;
