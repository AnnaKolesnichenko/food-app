import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ListItems = styled.ul`
  padding: 0;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const StyledSelects = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 30px;
  justify-content: flex-start;
  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
  }
`;
