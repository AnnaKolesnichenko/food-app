import { ASIAN_DISH } from "data/asian";
import { FastFood } from "data/available-meals";
import { HealthyFood } from "data/simpleHealthy";
import React from "react";
import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { id } = useParams();
  console.log(id);

  let productFoundById = ASIAN_DISH.find((item) => item.id === id);

  if (!productFoundById) {
    productFoundById = FastFood.find((item) => item.id === id);
  }

  if (!productFoundById) {
    productFoundById = HealthyFood.find((item) => item.id === id);
  }

  if (!productFoundById) {
    return <div>Item not found</div>;
  }

  console.log(productFoundById);

  return (
    <div>
      <img src={productFoundById.image} alt={productFoundById.title} />

      <h1 style={{ color: "white" }}>{productFoundById.title}</h1>
    </div>
  );
};

export default ItemPage;
