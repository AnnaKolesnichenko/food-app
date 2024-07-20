// import { useState } from "react";
// import Select from "react-select";
// import { ASIAN_DISH } from "../../data/asian";

// const options = [
//   { value: "all", label: "All" },
//   { value: "spicy", label: "Spicy" },
//   { value: "vegeterian", label: "Vegeterian" },
//   { value: "chicken", label: "Chicken" },
//   { value: "noodles", label: "Noodles" },
//   { value: "rice", label: "Rice" },
//   { value: "beef", label: "Beef" },
//   { value: "seafood", label: "Seafood" },
//   { value: "shrimp", label: "Shrimp" },
//   { value: "soup", label: "Soup" },
// ];

// const Selects = () => {
//   const [selected, setSelected] = useState(null);

//   const handleSelectChange = (option) => {
//     setSelected(option);
//   };

//   const handleFilteredItems = () => {
//     let filteredItems = ASIAN_DISH;
//   };

//   return (
//     <Select
//       defaultValue={[options[0]]}
//       isMulti
//       name="colors"
//       options={options}
//       className="basic-multi-select"
//       classNamePrefix="select"
//     />
//   );
// };

// export default Selects;
