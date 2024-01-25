import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import {
  StyledAction,
  StyledLiItem,
  StyledListItems,
  StyledPrice,
  StyledTitle,
  StyledActionDiv,
  StyledImage,
} from './CartItems.styled';

const CartItems = () => {
  const shopCnxt = useContext(CartContext);
  // console.log(shopCnxt.items);
  return (
    <StyledListItems>
      {shopCnxt.items.map(item => {
        const price = Number(item.price);
        return (
          <StyledLiItem key={item.id}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
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
                  shopCnxt.handleDecreaseItem(item.id);
                  console.log(item.id);
                }}
              >
                -
              </StyledAction>
              <span>{item.quantity}</span>
              <StyledAction
                onClick={() => {
                  shopCnxt.addItemToCart(item.id);
                  console.log(item.id);
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
