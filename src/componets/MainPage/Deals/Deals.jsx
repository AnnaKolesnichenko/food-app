import React from "react";
import specials from "./specials.jpg";
import arrow from "./arr.png";
import {
  DealsContainer,
  DealsImage,
  DealsTitle,
  GreenArrow,
} from "./Deals.styled";

import { SiFireship } from "react-icons/si";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

const Deals = () => {
  return (
    <AnimatePresence>
      <div>
        {" "}
        <DealsTitle>
          Check out our Specials <SiFireship />
        </DealsTitle>
        <DealsContainer>
          <motion.div
            initial={{ x: -300 }}
            whileHover={{
              x: 150,
              transition: { duration: 10, type: "spring" },
            }}
            exit={{ x: 0, transition: { duration: 10, type: "spring" } }}
          >
            <GreenArrow src={arrow} alt="arrow" />{" "}
          </motion.div>

          <Link to="/deals">
            {" "}
            <DealsImage src={specials} alt="specials" />
          </Link>
        </DealsContainer>
      </div>
    </AnimatePresence>
  );
};

export default Deals;
