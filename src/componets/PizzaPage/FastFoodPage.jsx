import React, { useEffect, useState } from "react";
import Select from "react-select";
import { FastFood } from "../../data/available-meals.js";
import { Container, ListItems, StyledSelects } from "./FastFoodPage.styled.js";
// import FastFoodItem from "../removed/FastFoodItem.jsx";

import { cuisines, characteristics } from "../../data/options.js";
import ModalAbout from "componets/ModalAbout/ModalAbout.jsx";
import { AnimatePresence, motion } from "framer-motion";
import FoodItemComponent from "componets/UI/FoodItemComponent/FoodItemComponent.jsx";

const FastFoodPage = () => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [itemsFiltered, setItemsFiltered] = useState(FastFood);
  const [selectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    let filteredData = FastFood;

    if (selectedCuisine) {
      filteredData = filteredData.filter((item) =>
        item.cuisine.includes(selectedCuisine.value)
      );
    }

    if (selectedType) {
      filteredData = filteredData.filter((item) =>
        item.characteristic.includes(selectedType.value)
      );
    }

    setItemsFiltered(filteredData);
  }, [selectedCuisine, selectedType]);

  const handleCuisineChange = (option) => {
    setSelectedCuisine(option);
  };

  const handleTypeChange = (option) => {
    setSelectedType(option);
  };

  const handleOpenModal = (id) => {
    setSelectedItem(id);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const customStyledSelect = {
    control: (provided, state) => ({
      ...provided,
      "width": "260px",
      "marginLeft": "auto",
      "marginRight": "auto",
      // "marginTop": "50px",
      "backgroundColor": "#D5CFC7",
      "borderRadius": "15px",
      "color": "#1C180A",
      "fontFamily": "Raleway, sans-serif",

      "&:hover": {
        border: "1px solid #24485b",
      },
    }),

    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "#f2f2f2",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      fontFamily: "Raleway, sans-serif",
    }),
    option: (provided, state) => ({
      ...provided,
      "fontFamily": "Raleway, sans-serif",
      "backgroundColor": state.isSelected ? "#1e90ff" : "transparent",
      "color": state.isSelected ? "#ffffff" : "#333333",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#e37f19",
        fontSize: "20px",
      },
    }),
  };
  return (
    <Container>
      <AnimatePresence>
        {selectedItem && (
          <ModalAbout id={selectedItem} handleCloseModal={handleCloseModal} />
        )}
      </AnimatePresence>
      {itemsFiltered.length === 0 && <p>there are no items picked</p>}

      <StyledSelects>
        <Select
          isClearable
          isSearchable
          className="basic-single"
          classNamePrefix="select"
          styles={customStyledSelect}
          name="selectType"
          options={cuisines}
          value={selectedCuisine}
          onChange={handleCuisineChange}
          placeholder="Pick a cuisine..."
        />
        <Select
          isClearable
          isSearchable
          className="basic-single"
          classNamePrefix="select"
          styles={customStyledSelect}
          name="selectCuisine"
          options={characteristics}
          value={selectedType}
          onChange={handleTypeChange}
          placeholder="Pick a taste..."
        />
      </StyledSelects>
      {/*MULTI SELECTS THAT DID NOT WORK <Select
        value={selectedCuisine}
        onChange={handleCuisineChange}
        // defaultValue={[options[0]]}
        isMulti
        name="selectedCuisine"
        options={cuisines}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Pick A Taste....."
        styles={customStyledSelect}
      /> */}
      {/* <Select
        value={selectedType}
        onChange={handleTypeChange}
        // defaultValue={[options[0]]}
        isMulti
        name="selectedType"
        options={characteristics}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Pick A Taste....."
        styles={customStyledSelect}
      /> */}
      <ListItems
        as={motion.ul}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {itemsFiltered.map((item) => (
          <FoodItemComponent
            key={item.id}
            item={item}
            handleOpenModal={handleOpenModal}
            price={item.price}
          />
        ))}
      </ListItems>
    </Container>
  );
};

export default FastFoodPage;
