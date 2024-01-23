import React, { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
//import sushiBg from "../../data/assets/asian.jpeg";
import { ASIAN_DISH } from '../../data/asian';
import FoodItem from './FoodItem';
import { ListItems, Container, Selected } from './SushiPage.styled';
import { options, regions } from '../../data/options';
import { motion } from 'framer-motion';
import ModalAbout from 'componets/ModalAbout/ModalAbout';
//import Loader from "../Loader/Loader";

const SushiPage = () => {
  const [selected, setSelected] = useState(null);
  const [region, setRegion] = useState(null);
  const [itemsFiltered, setItemsFiltered] = useState(ASIAN_DISH);
  const [selectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    let selectedItems = ASIAN_DISH;
    if (selected && selected.value === 'All') {
      setItemsFiltered(ASIAN_DISH);
      return;
    }

    // const filteredItems = ASIAN_DISH.filter((item) =>
    //   item.characteristic.includes(selected.value)
    // );

    if (selected) {
      selectedItems = selectedItems.filter(item =>
        item.characteristic.includes(selected.value)
      );
    }

    if (region) {
      selectedItems = selectedItems.filter(item =>
        item.cuisine.includes(region.value)
      );
    }

    setItemsFiltered(selectedItems);
  }, [selected, region]);

  const handleSelectChange = option => {
    setSelected(option);
  };

  const handleRegionChange = option => {
    setRegion(option);
  };

  const handleOpenModal = id => {
    setSelectedItem(id);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const customStyledSelect = {
    control: (provided, state) => ({
      ...provided,
      width: '240px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px',
      backgroundColor: '#D5CFC7',
      borderRadius: '15px',
      color: '#1C180A',
      fontFamily: 'Raleway, sans-serif',

      '&:hover': {
        border: '1px solid #24485b', // Change border color on hover
      },
    }),

    menu: (provided, state) => ({
      ...provided,
      fontFamily: 'Raleway, sans-serif',
      backgroundColor: '#f2f2f2',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: 'Raleway, sans-serif',
      backgroundColor: state.isSelected ? '#e37f19' : 'transparent',
      color: state.isSelected ? '#ffffff' : '#333333',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#e37f19',
        fontSize: '20px',
      },
    }),
  };

  return (
    <Container>
      {selectedItem && (
        <ModalAbout id={selectedItem} handleCloseModal={handleCloseModal} />
      )}
      <Selected>
        <Select
          isClearable
          isSearchable
          className="basic-single"
          classNamePrefix="select"
          styles={customStyledSelect}
          name="selectCuisine"
          options={options}
          value={selected}
          onChange={handleSelectChange}
          placeholder="Pick a taste..."
        />
        <Select
          isClearable
          isSearchable
          className="basic-single"
          classNamePrefix="select"
          styles={customStyledSelect}
          name="selectCuisine"
          options={regions}
          value={region}
          onChange={handleRegionChange}
          placeholder="Pick a region..."
        />
      </Selected>
      {/* <Select
        value={selected}
        onChange={handleSelectChange}
        // defaultValue={[options[0]]}
        isMulti
        name="options"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Pick A Taste....."
        styles={customStyledSelect}
      /> */}
      {/* <button onClick={handleFilteredItems}>Choose</button> */}
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
        {itemsFiltered.map(item => (
          <FoodItem
            key={item.id}
            item={item}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </ListItems>
    </Container>
  );
};

export default SushiPage;
