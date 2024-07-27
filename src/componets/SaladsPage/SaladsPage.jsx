import React, { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

import FoodItemComponent from "../../componets/UI/FoodItemComponent/FoodItemComponent";
import { ListItems, Container, Selected } from "../SushiPage/SushiPage.styled";
import { saladIngredients, salads } from "../../data/options";
import { AnimatePresence, motion } from "framer-motion";
import ModalAbout from "componets/ModalAbout/ModalAbout";
import { HealthyFood } from "data/simpleHealthy";

const SimplePage = () => {
  const [selectedCuisine, setSelected] = useState(null);
  const [selectedType, setRegion] = useState(null);
  const [itemsFiltered, setItemsFiltered] = useState(HealthyFood);
  const [selectedItem, setSelectedItem] = useState(false);
  console.log(selectedCuisine, selectedType);

  useEffect(() => {
    let selectedItems = HealthyFood;

    // const filteredItems = ASIAN_DISH.filter((item) =>
    //   item.characteristic.includes(selected.value)
    // );

    if (selectedType) {
      selectedItems = selectedItems.filter((item) =>
        item.characteristic.includes(selectedType.value)
      );
    }

    if (selectedCuisine) {
      selectedItems = selectedItems.filter((item) =>
        item.cuisine.includes(selectedCuisine.value)
      );
    }

    setItemsFiltered(selectedItems);
  }, [selectedCuisine, selectedType]);

  const handleSelectChange = (option) => {
    setSelected(option);
  };

  const handleRegionChange = (option) => {
    setRegion(option);
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
        border: "1px solid #24485b", // Change border color on hover
      },
    }),

    menu: (provided, state) => ({
      ...provided,
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "Raleway, sans-serif",
      backgroundColor: "#f2f2f2",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }),
    option: (provided, state) => ({
      ...provided,
      "fontFamily": "Raleway, sans-serif",
      "backgroundColor": state.isSelected ? "#e37f19" : "transparent",
      "color": state.isSelected ? "#ffffff" : "#333333",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#e37f19",
        fontSize: "20px",
        marginTop: "-1px",
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
      <Selected>
        <Select
          isClearable
          isSearchable
          className="basic-single"
          classNamePrefix="select"
          styles={customStyledSelect}
          name="selectCuisine"
          options={salads}
          value={selectedCuisine}
          onChange={handleSelectChange}
          placeholder="Which is yours?"
        />
        <Select
          isClearable
          isSearchable
          className="basic-single"
          classNamePrefix="select"
          styles={customStyledSelect}
          name="selectCuisine"
          options={saladIngredients}
          value={selectedType}
          onChange={handleRegionChange}
          placeholder="Choose the best"
        />
      </Selected>

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
          />
        ))}
      </ListItems>
    </Container>
  );
};

export default SimplePage;
