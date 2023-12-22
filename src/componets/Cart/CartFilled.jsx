import { Button } from "./CartEmpty.styled";

const CartFilled = ({ totalCost, handleCloseButton, handleCheckOutOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <h2 style={{ fontSize: "16px", fontFamily: "Raleway, sans-serif" }}>
        Cart Total: ${totalCost}
      </h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          onClick={handleCheckOutOpen}
          type="button"
          style={{ width: "90px" }}
        >
          Checkout
        </Button>
        <Button
          onClick={() => handleCloseButton()}
          type="button"
          style={{ width: "90px" }}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default CartFilled;
