import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./componets/MainPage/MainPage";
import SushiPage from "./componets/SushiPage/SushiPage";
import FastFoodPage from "./componets/PizzaPage/FastFoodPage";
import NotFound from "./componets/NotFound/NotFound";
import { ContainerMain } from "./App.styled";
import CartContextProvider from "./store/cart-context";
import HeaderComponent from "./componets/Header/Header";
import FavoritesPage from "componets/FavoritesPage/FavoritesPage";
import PromotionsPage from "componets/PromotionsPage/PromotionsPage";
import SimplePage from "./componets/SaladsPage/SaladsPage";
import PromotionRoll from "./componets/PromotionsPage/PromotionRoll";
import ItemPage from "componets/UI/ItemPage/ItemPage";

//import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://cook-and-deliver-default-rtdb.asia-southeast1.firebasedatabase.app/asian.json"
  //       );
  //       const data = await response.json();
  //       console.log(data); // Log the fetched data to the console
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();

  //   // No cleanup needed, so no return statement here
  // }, []);

  return (
    <CartContextProvider>
      <ContainerMain>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sushi" element={<SushiPage />} />
          <Route path="/pizza" element={<FastFoodPage />} />
          <Route path="/salads" element={<SimplePage />} />
          <Route path="/deals" element={<PromotionsPage />}>
            <Route path="bonanza" element={<PromotionRoll />}></Route>
          </Route>
          {/* <Route path="/item/:id" element={<ItemPage />} /> */}
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContainerMain>
    </CartContextProvider>
  );
}

export default App;
