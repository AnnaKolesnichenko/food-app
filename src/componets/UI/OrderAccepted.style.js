import styled from "styled-components";
import { FcCheckmark } from "react-icons/fc";

export const StyledOrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const StyledOrderTitle = styled.h1``;

export const StyledTickIcon = styled(FcCheckmark)`
  width: 40px;
  height: 40px;
`;
