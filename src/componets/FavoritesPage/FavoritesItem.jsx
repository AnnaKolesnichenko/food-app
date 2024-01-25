import React, { useState } from 'react';
import {
  FavoritesLiItem,
  FavoritesImage,
  AboutDiv,
  AboutTitle,
  AboutComplexity,
} from './FavoritesPage.styled';
import { Button } from 'componets/UI/CommonStyles.styled';
import FavoritesRecipe from 'componets/FavoritesRecipe/FavoritesRecipe';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

const FavoritesItem = ({ item }) => {
  const [openRecipe, setOpenRecipe] = useState(null);

  const handleOpenRecipe = id => {
    setOpenRecipe(prevId => (prevId === id ? null : id));
  };

  return (
    <FavoritesLiItem key={item.id}>
      <FavoritesImage src={item.image} alt={item.title} />
      <AboutDiv>
        <div>
          <AboutTitle>{item.title}</AboutTitle>
          <AboutComplexity>
            {' '}
            difficulty: {''}
            {item.complexity}
          </AboutComplexity>
        </div>
        <Button
          type="button"
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
          onClick={() => handleOpenRecipe(item.id)}
          style={{
            marginBottom: '0',
            width: '130px',
            display: 'flex',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          {openRecipe ? (
            <>
              <FaArrowLeft />
              Not Today
            </>
          ) : (
            <>
              Cook It?
              <FaArrowRight />{' '}
            </>
          )}
        </Button>
      </AboutDiv>

      <AnimatePresence>
        {openRecipe === item.id && <FavoritesRecipe id={item.id} />}
      </AnimatePresence>
    </FavoritesLiItem>
  );
};

export default FavoritesItem;
