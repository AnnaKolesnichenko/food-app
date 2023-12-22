import { Backdrop, Modal } from "./CommonStyles.styled";
import {
  StyledOrderDiv,
  StyledOrderTitle,
  StyledTickIcon,
} from "./OrderAccepted.style";

const OrderAccepted = () => {
  return (
    <Backdrop>
      <Modal>
        <StyledOrderDiv>
          <StyledOrderTitle>Your order was accepted!</StyledOrderTitle>
          <StyledTickIcon />
        </StyledOrderDiv>
      </Modal>
    </Backdrop>
  );
};

export default OrderAccepted;
