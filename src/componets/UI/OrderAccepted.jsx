import { motion } from "framer-motion";
import { Backdrop, Modal } from "./CommonStyles.styled";
import {
  StyledOrderDiv,
  StyledOrderTitle,
  StyledTickIcon,
} from "./OrderAccepted.style";

const OrderAccepted = ({ text }) => {
  return (
    <Backdrop>
      <Modal
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      >
        <StyledOrderDiv>
          <StyledOrderTitle>{text}</StyledOrderTitle>
          <StyledTickIcon />
        </StyledOrderDiv>
      </Modal>
    </Backdrop>
  );
};

export default OrderAccepted;
