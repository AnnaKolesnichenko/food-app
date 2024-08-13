// import Modal from "react-modal";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import CountdownTimer from "./Countdown";
import { IoClose } from "react-icons/io5";
import { LiaHandPointerSolid } from "react-icons/lia";

import { Backdrop } from "componets/UI/CommonStyles.styled";
import {
  Button,
  Image,
  Modal,
  PromoAbout,
  PromoContent,
  PromoDealsLink,
  PromoImage,
  PromoLink,
  PromoTitle,
} from "./PromModal.styled";
import image from "../../../data/deals/s.jpg";

const PromoModal = ({ onRequestClose }) => {
  const promiLink = useSelector((state) => state.deals.deals);
  console.log(promiLink[3].link);
  const getMidnightTimestamp = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to the next midnight (00:00:00)
    return midnight.getTime(); // Return timestamp in milliseconds
  };

  const promotion = {
    title: "Get 10% off all ",
    titleCaption: "Salads Menu",
    description: "Hurry Up!! Do not miss this super cool summer opportunity.",
    endTime: getMidnightTimestamp(), // Set to midnight of the current day
  };
  return (
    <Backdrop>
      <Modal
        onRequestClose={onRequestClose}
        as={motion.div}
        initial={{ opacity: 0, x: 800, y: 600, scale: 0.5 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1.2,
          transition: { duration: 1, type: "spring", bounce: 0.5 },
        }}
        exit={{
          opacity: 0,
          x: 800,
          y: 600,
          scale: 0.5,
          transition: { duration: 1 },
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Button onClick={onRequestClose}>
            <IoClose size={30} />
          </Button>
          <PromoContent>
            <PromoTitle>
              {promotion.title}
              <PromoLink to={promiLink[3].link}>
                {promotion.titleCaption}
              </PromoLink>
              <LiaHandPointerSolid
                size={27}
                fill="coral"
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "50%",
                  transform: "rotate(250deg)",
                }}
              />
            </PromoTitle>
            <PromoAbout>{promotion.description}</PromoAbout>
            <CountdownTimer endTime={promotion.endTime} />
            <div style={{ alignSelf: "flex-end", position: "relative" }}>
              <LiaHandPointerSolid
                size={27}
                fill="#edcf3b"
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "-30px",
                  transform: "rotate(50deg)",
                }}
              />
              <PromoDealsLink to="/deals">
                See more amazing deals!
              </PromoDealsLink>
            </div>
            <PromoAbout style={{ alignSelf: "flex-end" }}>
              Find your discount in the Cart!
            </PromoAbout>{" "}
          </PromoContent>
          <PromoImage>
            <Image src={image} alt="promotion" />
          </PromoImage>
        </div>
      </Modal>
    </Backdrop>
  );
};

export default PromoModal;
