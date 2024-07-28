// import Modal from "react-modal";
import { Link } from "react-router-dom";
import CountdownTimer from "./Countdown";
import { Backdrop, Modal } from "componets/UI/CommonStyles.styled";
import { motion } from "framer-motion";

const PromoModal = ({ onRequestClose, promotion }) => {
  return (
    <Backdrop>
      <Modal
        onRequestClose={onRequestClose}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <h2>{promotion.title}</h2>
        <p>{promotion.description}</p>
        <CountdownTimer endTime={promotion.endTime} />
        <Link to="/deals">Смотреть все акции</Link>
        <button onClick={onRequestClose}>Закрыть</button>
      </Modal>
    </Backdrop>
  );
};

export default PromoModal;
