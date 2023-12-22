import { lightBlue } from "@mui/material/colors";
import beef_tacos from "../public/images/beef-tacos.jpg";
import caesar from "../public/images/caesar-salad.jpg";
import chicken_curry from "../public/images/chicken-curry.jpg";
import chocolate_brownie from "../public/images/chocolate-brownie.jpg";
import eggplant_parmesan from "../public/images/eggplant-parmesan.jpg";
import falafel from "../public/images/falafel-wrap.jpg";
import grilled_sandwich from "../public/images/grilled-chicken-sandwich.jpg";
import lemon_cheesecake from "../public/images/lemon-cheesecake.jpg";
import lobster_bisque from "../public/images/lobster-bisque.jpg";
import mac_and_cheese from "../public/images/mac-and-cheese.jpg";
import margherita from "../public/images/margherita-pizza.jpg";
import miso from "../public/images/miso-ramen.jpg";
import mushroom_riso from "../public/images/mushroom-risotto.jpg";
import pancakes from "../public/images/pancake-stack.jpg";
import seafood_paella from "../public/images/seafood-paella.jpg";
import spaghetti_carbonara from "../public/images/spaghetti-carbonara.jpg";
import steak from "../public/images/steak-frites.jpg";
import sushi_roll_platter from "../public/images/sushi-roll-platter.jpg";
import vegan_bowl from "../public/images/vegan-buddha-bowl.jpg";
import veggie_burger from "../public/images/veggie-burger.jpg";

import { v4 as uuidv4 } from "uuid";

export const FastFood = [
  {
    id: uuidv4(),
    image: mac_and_cheese,
    title: "Mac & Cheese",
    price: 8.99,
    characteristic: ["pasta", "fastfood", "italian"],
    cuisine: ["fastfood", "italian"],
    description:
      "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",

    //characteristic: ["pasta"],
  },
  {
    id: uuidv4(),
    image: margherita,
    title: "Margherita Pizza",
    price: 12.99,
    characteristic: ["meat", "pizza"],
    cuisine: ["fastfood", "italian"],
    description:
      "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",

    //characteristic: ["meat", "pizza", "fastfood", "italian"],
  },
  {
    id: uuidv4(),
    image: caesar,
    title: "Caesar Salad",
    price: 7.99,
    characteristic: ["meat", "salad", "seafood"],
    cuisine: ["italian"],
    description:
      "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.",

    //characteristic: ["meat", "salad", "seafood", 'italian'],
  },
  {
    id: uuidv4(),
    image: spaghetti_carbonara,
    title: "Spaghetti Carbonara",
    price: 10.99,
    characteristic: ["meat", "pasta"],
    cuisine: ["italian"],
    description:
      "Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper.",

    //characteristic: ["meat", "pasta", 'italian'],
  },
  {
    id: uuidv4(),
    image: veggie_burger,
    title: "Veggie Burger",
    price: 9.99,
    characteristic: ["burger"],
    cuisine: ["vegeterian", "fastfood"],
    description:
      "A juicy veggie patty served on a whole grain bun with lettuce, tomato, and a tangy sauce.",

    //characteristic: ["burger","vegeterian", "fastfood"],
  },
  {
    id: uuidv4(),
    image: grilled_sandwich,
    title: "Grilled Chicken Sandwich",
    price: 10.99,
    characteristic: ["meat", "burger"],
    cuisine: ["fastfood"],
    description:
      "Tender grilled chicken breast with avocado, bacon, lettuce, and honey mustard on a toasted bun.",

    //characteristic: ["meat", "burger", 'fastfood],
  },
  {
    id: uuidv4(),
    image: steak,
    title: "Steak Frites",
    price: 17.99,
    characteristic: ["meat"],
    cuisine: ["bbq"],
    description:
      "Succulent steak cooked to your preference, served with crispy golden fries and herb butter.",

    //characteristic: ["meat", 'bbq'],
  },
  {
    id: uuidv4(),
    image: sushi_roll_platter,
    title: "Sushi Roll Platter",
    price: 15.99,
    characteristic: ["spicy", "rice", "seafood", "shrimp", "oriental"],
    cuisine: ["oriental"],
    description:
      "An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.",

    //characteristic: ["spicy", "rice", "seafood", "shrimp"],
  },
  {
    id: uuidv4(),
    image: chicken_curry,
    title: "Chicken Curry",
    price: 13.99,
    characteristic: ["spicy", "meat", "oriental"],
    cuisine: ["oriental"],
    description:
      "Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with basmati rice.",

    //characteristic: ["spicy", "meat"],
  },
  {
    id: uuidv4(),
    image: vegan_bowl,
    title: "Vegan Buddha Bowl",
    price: 11.99,
    characteristic: ["salad"],
    cuisine: ["vegeterian"],
    description:
      "A hearty bowl filled with quinoa, roasted veggies, avocado, and a tahini dressing.",

    //characteristic: ["salad","vegeterian"],
  },
  {
    id: uuidv4(),
    image: seafood_paella,
    title: "Seafood Paella",
    price: 19.99,
    characteristic: ["rice", "seafood", "shrimp"],
    cuisine: ["italian", "oriental"],
    description:
      "A Spanish delicacy filled with saffron-infused rice, shrimp, mussels, and chorizo.",

    //characteristic: ["rice", "seafood", "shrimp", 'italian', 'oriental'],
  },
  {
    id: uuidv4(),
    image: pancakes,
    title: "Pancake Stack",
    price: 8.99,
    characteristic: ["pasta"],
    cuisine: ["sweets"],
    description:
      "Fluffy pancakes stacked high, drizzled with maple syrup and topped with fresh berries.",

    //characteristic: ["pasta", "sweets"],
  },
  {
    id: uuidv4(),
    image: miso,
    title: "Miso Ramen",
    price: 12.99,
    characteristic: ["spicy", "seafood", "shrimp", "vegeterian", "oriental"],
    cuisine: ["vegeterian", "oriental"],
    description:
      "A warming bowl of ramen with miso broth, tender pork, soft-boiled egg, and green onions.",

    //characteristic: ["spicy", "seafood", "shrimp"],
  },
  {
    id: uuidv4(),
    image: beef_tacos,
    title: "Beef Tacos",
    price: 9.99,
    characteristic: ["spicy", "meat", "fastfood", "mexican"],
    cuisine: ["fastfood", "mexican"],
    description:
      "Three soft tortillas filled with seasoned beef, fresh salsa, cheese, and sour cream.",

    //characteristic: ["spicy", "meat"],
  },
  {
    id: uuidv4(),
    image: chocolate_brownie,
    title: "Chocolate Brownie",
    price: 5.99,
    characteristic: ["dessert", "sweets"],
    cuisine: ["sweets"],
    description:
      "A rich and fudgy brownie, topped with a scoop of vanilla ice cream and chocolate sauce.",

    //characteristic: ["dessert"],
  },
  {
    id: uuidv4(),
    image: lobster_bisque,
    title: "Lobster Bisque",
    price: 14.99,
    characteristic: ["seafood", "shrimp", "mexican", "italian"],
    cuisine: ["mexican", "italian"],
    description:
      "A creamy soup made from lobster stock, aromatic vegetables, and a touch of brandy.",

    //characteristic: ["seafood", "shrimp"],
  },
  {
    id: uuidv4(),
    image: mushroom_riso,
    title: "Mushroom Risotto",
    price: 13.99,
    characteristic: ["rice", "seafood", "vegeterian", "italian"],
    cuisine: ["vegeterian", "italian"],
    description:
      "Creamy Arborio rice cooked with a medley of wild mushrooms and finished with parmesan.",

    //characteristic: ["rice", "seafood"],
  },
  {
    id: uuidv4(),
    image: eggplant_parmesan,
    title: "Eggplant Parmesan",
    price: 11.9,
    characteristic: ["spicy", "salad", "vegeterian"],
    cuisine: ["vegeterian"],
    description:
      "Layers of breaded eggplant, marinara sauce, and melted mozzarella and parmesan cheeses.",

    // characteristic: ["spicy", "salad"],
  },
  {
    id: uuidv4(),
    image: lemon_cheesecake,
    title: "Lemon Cheesecake",
    price: 6.99,
    characteristic: ["dessert", "sweets"],
    cuisine: ["sweets"],
    description:
      "A creamy cheesecake with a tangy lemon flavor, served on a crumbly biscuit base.",

    //characteristic: ["dessert"],
  },
  {
    id: uuidv4(),
    image: falafel,
    title: "Falafel Wrap",
    price: 8.99,
    characteristic: ["salad", "vegeterian"],
    cuisine: ["vegeterian"],
    description:
      "Crispy falafels wrapped in a warm pita with lettuce, tomatoes, and a tahini sauce.",

    //characteristic: ["salad"],
  },
];
