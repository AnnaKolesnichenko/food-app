import React from 'react';

import { Container, LinkContainer, StyledLink } from './MainPage.styled';
import Background from '../../data/assets/re2.jpeg';

const MainPage = () => {
  return (
    <Container
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        backgroundPosition: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <LinkContainer>
        <StyledLink to="/sushi">asian food</StyledLink>
        <StyledLink to="/pizza">fast food</StyledLink>
        <StyledLink to="/salads">simple food</StyledLink>
      </LinkContainer>
    </Container>
  );
};

export default MainPage;
