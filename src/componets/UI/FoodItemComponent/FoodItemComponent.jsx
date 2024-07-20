import {
  Item,
  StyledImage,
  StyledStar,
  StyledInfo,
  Title,
  Price,
} from "./FoodItemComponent.styled.js";
import { Button } from "componets/UI/CommonStyles.styled";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { handleLiked } from "store/liked-slice";
import { addItemToCart } from "store/cart-slice";

const FoodItemComponent = ({ item, handleOpenModal }) => {
  // const cartCnxt = useContext(CartContext);
  // const { handleLiked, likedItems } = cartCnxt;

  const likedItems = useSelector((state) => state.liked.itemsLiked);
  const dispatch = useDispatch();

  const handleLikedChanged = () => {
    dispatch(handleLiked(item.id));
    console.log(item.id);
  };

  const addProductToCart = () => {
    dispatch(addItemToCart(item.id));
    console.log(item.id);
  };

  const included = likedItems
    .map((likedItem) => likedItem.id)
    .includes(item.id);

  return (
    <Item
      as={motion.li}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      style={{ position: "relative" }}
    >
      <StyledImage
        src={item.image}
        alt={item.name}
        opacity={included ? "0.5" : "1"}
      />
      <StyledStar
        fillColor={included ? "pink" : "brown"}
        strokeColor={included ? "white" : "green"}
        onClick={handleLikedChanged}
      />
      <StyledInfo>
        <Title>{item.title}</Title>
        <Price>${item.price}</Price>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
          }}
        >
          <Button
            type="button"
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            onClick={addProductToCart}
          >
            Order
          </Button>
          <Button
            type="button"
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            onClick={() => handleOpenModal(item.id)}
          >
            About
          </Button>
        </div>
      </StyledInfo>
    </Item>
  );
};

export default FoodItemComponent;
