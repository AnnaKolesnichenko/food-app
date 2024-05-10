import styled from "styled-components";

export const WhyUsParag = styled.p`
  margin: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  color: grey;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const BenefitItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  width: calc((100% - 30px) / 4);
  height: 200px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const BenefitP = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BenefitImg = styled.img`
  border-radius: 16px;
  width: 100px;
  height: 80px;
`;
