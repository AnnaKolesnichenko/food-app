import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import {
  StyledAction,
  StyledLiItem,
  StyledListItems,
  StyledPrice,
  StyledTitle,
  StyledActionDiv,
} from "./CartItems.styled";

const CartItems = () => {
  const shopCnxt = useContext(CartContext);
  // console.log(shopCnxt.items);
  return (
    <StyledListItems>
      {shopCnxt.items.map((item) => {
        const price = Number(item.price);
        return (
          <StyledLiItem key={item.id}>
            <div>
              <StyledTitle>{item.title}</StyledTitle>
              <StyledPrice>${price}</StyledPrice>
            </div>
            <StyledActionDiv>
              <StyledAction>-</StyledAction>
              <span>{item.quantity}</span>
              <StyledAction>+</StyledAction>
            </StyledActionDiv>
          </StyledLiItem>
        );
      })}
    </StyledListItems>
  );
};

export default CartItems;
