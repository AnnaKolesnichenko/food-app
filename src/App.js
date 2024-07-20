import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./componets/MainPage/MainPage";
import SushiPage from "./componets/SushiPage/SushiPage";
import SaladsPage from "./componets/SaladsPage/SaladsPage";
import FastFoodPage from "./componets/PizzaPage/FastFoodPage";
import NotFound from "./componets/NotFound/NotFound";
import { ContainerMain } from "./App.styled";
// import Background from "./data/assets/rest-bg.jpeg";
import CartContextProvider from "./store/cart-context";
import HeaderComponent from "./componets/Header/Header";
import FavoritesPage from "componets/FavoritesPage/FavoritesPage";
import PromotionsPage from "componets/PromotionsPage/PromotionsPage";
import SimplePage from "./componets/SaladsPage/SaladsPage";

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
      <ContainerMain
      // style={{
      //   backgroundImage: `url(${Background})`,
      //   backgroundSize: "cover",
      //   height: "100vh",
      //   width: "100%",
      //   backgroundPosition: "center",
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      //   zIndex: -1,
      // }}
      >
        {/* <NavigationContainer>
          <div style={{ width: "120px", marginRight: "55px" }}>
            <StyledNavLink to="/">Food Culture</StyledNavLink>
          </div>

          <Header>
            <StyledNavLinkMenu to="/sushi">asian</StyledNavLinkMenu>
            <StyledNavLinkMenu to="/pizza">fast food</StyledNavLinkMenu>
            <StyledNavLinkMenu to="/salads">healthy</StyledNavLinkMenu>{" "}
            <Button>Cart (0)</Button>
          </Header>
        </NavigationContainer> */}
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sushi" element={<SushiPage />} />
          <Route path="/pizza" element={<FastFoodPage />} />
          <Route path="/salads" element={<SimplePage />} />
          <Route path="/deals" element={<PromotionsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContainerMain>
    </CartContextProvider>
  );
}

export default App;
