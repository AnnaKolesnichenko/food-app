import { useDispatch, useSelector } from "react-redux";
import {
  StyledAction,
  StyledLiItem,
  StyledListItems,
  StyledPrice,
  StyledTitle,
  StyledActionDiv,
  StyledImage,
} from "./CartItems.styled";
import { handleDecreaseItem, handleIncreaseItem } from "store/cart-slice";

const CartItems = () => {
  //const shopCnxt = useContext(CartContext);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <StyledListItems>
      {items.map((item) => {
        const price = Number(item.price);
        return (
          <StyledLiItem key={item.id}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <StyledImage src={item.image} alt={item.title} />
              <div>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledPrice>${price}</StyledPrice>
              </div>
            </div>
            <StyledActionDiv>
              <StyledAction
                onClick={() => {
                  dispatch(handleDecreaseItem(item.id));
                  console.log(item.id);
                }}
              >
                -
              </StyledAction>
              <span>{item.quantity}</span>
              <StyledAction
                onClick={() => {
                  dispatch(handleIncreaseItem(item.id));
                }}
              >
                +
              </StyledAction>
            </StyledActionDiv>
          </StyledLiItem>
        );
      })}
    </StyledListItems>
  );
};

export default CartItems;
