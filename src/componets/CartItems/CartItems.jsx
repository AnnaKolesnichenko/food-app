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
import {
  addFreeItem,
  handleDecreaseItem,
  handleIncreaseItem,
  removeFreeItem,
} from "store/cart-slice";
import { useEffect, useState } from "react";
import coke from "../../data/deals/drink.webp";
import rolls from "../../data/deals/sushi.jpg";
import FreeItem from "./FreeItem";

const CartItems = () => {
  //const shopCnxt = useContext(CartContext);
  const items = useSelector((state) => state.cart.items);
  const freeItems = useSelector((state) => state.cart.freeItems);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  console.log(freeItems);

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity;
    });

    setQuantity(total);

    if (quantity < 2 && freeItems.find((item) => item.id === "free-item-1")) {
      dispatch(removeFreeItem("free-item-1"));
    }

    if (quantity < 4 && freeItems.find((item) => item.id === "free-item-2")) {
      dispatch(removeFreeItem("free-item-2"));
    }
  }, [items, quantity, freeItems, dispatch]);

  return (
    <StyledListItems>
      {quantity >= 2 && (
        <>
          {!freeItems.find((item) => item.id === "free-item-1") &&
            dispatch(
              addFreeItem({
                id: "free-item-1",
                title: "Free Beverage",
                quantity: 1,
                price: 0,
                image: coke,
              })
            )}
          <FreeItem image={coke} title="Free Beverage" id="free-item-1" />
        </>
      )}

      {quantity >= 4 && (
        <>
          {!freeItems.find((item) => item.id === "free-item-2") &&
            dispatch(
              addFreeItem({
                id: "free-item-2",
                title: "Free Rolls",
                quantity: 1,
                price: 0,
                image: rolls,
              })
            )}
          <FreeItem image={rolls} title="Free Rolls" id="free-item-2" />
        </>
      )}

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
