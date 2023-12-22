import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './componets/MainPage/MainPage';
import SushiPage from './componets/SushiPage/SushiPage';
import SaladsPage from './componets/SaladsPage/SaladsPage';
import FastFoodPage from './componets/PizzaPage/FastFoodPage';
import NotFound from './componets/NotFound/NotFound';
import { ContainerMain } from './App.styled';
// import Background from "./data/assets/rest-bg.jpeg";
import CartContextProvider from './store/cart-context';
import HeaderComponent from './componets/Header/Header';

function App() {
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
          <Route path="/salads" element={<SaladsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContainerMain>
    </CartContextProvider>
  );
}

export default App;
