import Modal from "react-modal";
import { Link } from "react-router-dom";
import CountdownTimer from "./Countdown";

const PromoModal = ({ isOpen, onRequestClose, promotion }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          padding: "20px",
        },
      }}
    >
      <h2>{promotion.title}</h2>
      <p>{promotion.description}</p>
      <CountdownTimer endTime={promotion.endTime} />
      <Link to="/deals">Смотреть все акции</Link>
      <button onClick={onRequestClose}>Закрыть</button>
    </Modal>
  );
};

export default PromoModal;
