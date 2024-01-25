// import { lightBlue } from "@mui/material/colors";
import beef_tacos from '../public/images/beef-tacos.jpg';
import caesar from '../public/images/caesar-salad.jpg';
import chicken_curry from '../public/images/chicken-curry.jpg';
import chocolate_brownie from '../public/images/chocolate-brownie.jpg';
import eggplant_parmesan from '../public/images/eggplant-parmesan.jpg';
import falafel from '../public/images/falafel-wrap.jpg';
import grilled_sandwich from '../public/images/grilled-chicken-sandwich.jpg';
import lemon_cheesecake from '../public/images/lemon-cheesecake.jpg';
import lobster_bisque from '../public/images/lobster-bisque.jpg';
import mac_and_cheese from '../public/images/mac-and-cheese.jpg';
import margherita from '../public/images/margherita-pizza.jpg';
import miso from '../public/images/miso-ramen.jpg';
import mushroom_riso from '../public/images/mushroom-risotto.jpg';
import pancakes from '../public/images/pancake-stack.jpg';
import seafood_paella from '../public/images/seafood-paella.jpg';
import spaghetti_carbonara from '../public/images/spaghetti-carbonara.jpg';
import steak from '../public/images/steak-frites.jpg';
import sushi_roll_platter from '../public/images/sushi-roll-platter.jpg';
import vegan_bowl from '../public/images/vegan-buddha-bowl.jpg';
import veggie_burger from '../public/images/veggie-burger.jpg';

import { v4 as uuidv4 } from 'uuid';

export const FastFood = [
  {
    id: uuidv4(),
    image: mac_and_cheese,
    title: 'Mac & Cheese',
    price: 8.99,
    characteristic: ['pasta', 'fastfood', 'italian'],
    cuisine: ['fastfood', 'italian'],
    ingredients: [
      '8 oz elbow macaroni',
      '2 cups shredded cheddar cheese',
      '1 cup milk',
      '2 tablespoons butter',
      '2 tablespoons all-purpose flour',
      'Salt and pepper to taste',
    ],
    complexity: 'easy',
    recipe:
      'Cook macaroni according to package instructions. Drain and set aside.' +
      'In a saucepan, melt butter over medium heat.' +
      'Stir in flour to create a roux. Cook for 1-2 minutes.' +
      'Gradually whisk in milk until smooth. Cook, stirring constantly, until the mixture thickens.' +
      'Add shredded cheddar cheese and stir until melted.' +
      'Season with salt and pepper.' +
      'Combine the cheese sauce with cooked macaroni.',
    description:
      'Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.',

    //characteristic: ["pasta"],
  },
  {
    id: uuidv4(),
    image: margherita,
    title: 'Margherita Pizza',
    price: 12.99,
    characteristic: ['meat', 'pizza'],
    cuisine: ['fastfood', 'italian'],
    ingredients: [
      'Pizza dough',
      '1 cup marinara sauce',
      'Fresh mozzarella cheese, sliced',
      'Fresh basil leaves',
      'Olive oil',
      'Salt and pepper to taste',
    ],
    complexity: 'easy',
    recipe:
      'Preheat oven to the highest temperature (usually around 475°F or 245°C).' +
      'Roll out pizza dough and place it on a pizza stone or baking sheet.' +
      'Spread marinara sauce evenly over the dough.' +
      'Arrange slices of fresh mozzarella on top.' +
      'Bake in the preheated oven until the crust is golden and the cheese is bubbly and slightly browned.' +
      'Remove from the oven and top with fresh basil leaves.' +
      'Drizzle with olive oil and season with salt and pepper.',
    description:
      'A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.',

    //characteristic: ["meat", "pizza", "fastfood", "italian"],
  },
  {
    id: uuidv4(),
    image: caesar,
    title: 'Caesar Salad',
    price: 7.99,
    characteristic: ['meat', 'salad', 'seafood'],
    cuisine: ['italian'],
    ingredients: [
      'Romaine lettuce, chopped',
      '1/2 cup croutons',
      '1/4 cup grated Parmesan cheese',
      '1/4 cup Caesar dressing',
      'Salt and pepper to taste',
    ],
    complexity: 'easy',
    recipe:
      'In a large bowl, combine chopped Romaine lettuce, croutons, and grated Parmesan cheese.' +
      'Drizzle Caesar dressing over the salad.' +
      'Toss the salad until the ingredients are evenly coated with dressing.' +
      'Season with salt and pepper to taste.',
    description:
      'Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.',

    //characteristic: ["meat", "salad", "seafood", 'italian'],
  },
  {
    id: uuidv4(),
    image: spaghetti_carbonara,
    title: 'Spaghetti Carbonara',
    price: 10.99,
    characteristic: ['meat', 'pasta'],
    cuisine: ['italian'],
    ingredients: [],
    complexity: '',
    recipe: '',
    description:
      'Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper.',

    //characteristic: ["meat", "pasta", 'italian'],
  },
  {
    id: uuidv4(),
    image: veggie_burger,
    title: 'Veggie Burger',
    price: 9.99,
    characteristic: ['burger'],
    cuisine: ['vegeterian', 'fastfood'],
    ingredients: [
      '1 can (15 oz) black beans, drained and rinsed',
      '1/2 cup breadcrumbs',
      '1/4 cup finely chopped onion',
      '1/4 cup chopped bell peppers',
      '1 teaspoon cumin',
      '1 teaspoon garlic powder',
      'Salt and pepper to taste',
      'Vegan burger buns',
      'Toppings of your choice (lettuce, tomato, vegan mayo, etc.)',
    ],
    complexity: 'easy',
    recipe:
      'In a bowl, mash black beans with a fork.' +
      'Add breadcrumbs, chopped onion, bell peppers, cumin, garlic powder, salt, and pepper. Mix well.' +
      'Form the mixture into burger patties.' +
      'Cook the patties in a skillet or grill until they are browned on both sides.' +
      'Toast vegan burger buns and assemble with your favorite toppings.',
    description:
      'A juicy veggie patty served on a whole grain bun with lettuce, tomato, and a tangy sauce.',

    //characteristic: ["burger","vegeterian", "fastfood"],
  },
  {
    id: uuidv4(),
    image: grilled_sandwich,
    title: 'Grilled Chicken Sandwich',
    price: 10.99,
    characteristic: ['meat', 'burger'],
    cuisine: ['fastfood'],
    ingredients: [
      'Boneless, skinless chicken breast',
      'Salt and pepper to taste',
      'Olive oil',
      'Burger buns',
      'Lettuce, tomato, and onion slices',
      'Mayonnaise or your favorite sauce',
    ],
    complexity: 'easy',
    recipe:
      'Season chicken breast with salt and pepper.' +
      'Grill chicken in olive oil until fully cooked.' +
      'Toast burger buns on the grill or in a toaster.' +
      'Assemble the sandwich with grilled chicken, lettuce, tomato, onion slices, and mayonnaise.' +
      'Serve hot.',
    description:
      'Tender grilled chicken breast with avocado, bacon, lettuce, and honey mustard on a toasted bun.',

    //characteristic: ["meat", "burger", 'fastfood],
  },
  {
    id: uuidv4(),
    image: steak,
    title: 'Steak Frites',
    price: 17.99,
    characteristic: ['meat'],
    cuisine: ['bbq'],
    ingredients: [
      'Steak of your choice (e.g., sirloin, ribeye)',
      'Salt and pepper to taste',
      'Olive oil',
      'Potatoes for fries',
      'Fresh parsley for garnish',
      'Optional: garlic powder, paprika, or preferred steak seasoning',
    ],
    complexity: 'medium',
    recipe:
      'Preheat oven to 400°F (200°C).' +
      'Season the steak with salt, pepper, and optional seasonings.' +
      'Heat olive oil in a pan and sear the steak on both sides until desired doneness.' +
      'While the steak cooks, cut potatoes into fries and bake them in the oven until crispy.' +
      'Allow the steak to rest for a few minutes before slicing.' +
      'Serve the steak with a side of crispy fries.' +
      'Garnish with fresh parsley.',
    description:
      'Succulent steak cooked to your preference, served with crispy golden fries and herb butter.',

    //characteristic: ["meat", 'bbq'],
  },
  {
    id: uuidv4(),
    image: sushi_roll_platter,
    title: 'Sushi Roll Platter',
    price: 15.99,
    characteristic: ['spicy', 'rice', 'seafood', 'shrimp', 'oriental'],
    cuisine: ['oriental'],
    ingredients: [
      'Nori (seaweed) sheets',
      'Sushi rice',
      'Imitation crab sticks, shredded',
      'Avocado, sliced',
      'Cucumber, julienned',
      'Soy sauce for dipping',
      'Pickled ginger and wasabi for serving',
    ],
    complexity: 'medium',
    recipe:
      'Place a sheet of nori on a bamboo sushi rolling mat.' +
      'Spread a layer of sushi rice over the nori, leaving a small border at the top.' +
      'Arrange shredded imitation crab, avocado slices, and julienned cucumber in the center of the rice.' +
      'Roll the sushi tightly using the bamboo mat, sealing the edge with a little water.' +
      'Slice the roll into bite-sized pieces.' +
      'Serve with soy sauce, pickled ginger, and wasabi.',
    description:
      'An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.',

    //characteristic: ["spicy", "rice", "seafood", "shrimp"],
  },
  {
    id: uuidv4(),
    image: chicken_curry,
    title: 'Chicken Curry',
    price: 13.99,
    characteristic: ['spicy', 'meat', 'oriental'],
    cuisine: ['oriental'],
    ingredients: [
      '1 lb chicken, cut into pieces',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '1 can (14 oz) coconut milk',
      '2 tablespoons curry powder',
      '1 tablespoon vegetable oil',
      'Salt and pepper to taste',
      'Fresh cilantro for garnish',
    ],
    complexity: 'easy',
    recipe:
      'In a pan, heat vegetable oil and sauté chopped onion and minced garlic until fragrant.' +
      'Add chicken pieces and cook until browned.' +
      'Sprinkle curry powder over the chicken and stir well.' +
      'Pour in coconut milk and simmer until the chicken is cooked through.' +
      'Season with salt and pepper to taste.' +
      'Garnish with fresh cilantro before serving.',
    description:
      'Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with basmati rice.',

    //characteristic: ["spicy", "meat"],
  },
  {
    id: uuidv4(),
    image: vegan_bowl,
    title: 'Vegan Buddha Bowl',
    price: 11.99,
    characteristic: ['salad'],
    cuisine: ['vegeterian'],
    ingredients: [
      'Quinoa or brown rice',
      'Mixed vegetables (e.g., broccoli, bell peppers, carrots)',
      'Chickpeas or tofu, cooked',
      'Avocado, sliced',
      'Leafy greens (e.g., spinach, kale)',
      'Sauce or dressing of choice',
    ],
    complexity: 'easy',
    recipe:
      'Cook quinoa or brown rice according to package instructions.' +
      'Steam or stir-fry mixed vegetables until tender-crisp.' +
      'Arrange cooked quinoa, mixed vegetables, chickpeas or tofu, sliced avocado, and leafy greens in a bowl.' +
      'Drizzle with your favorite sauce or dressing.',
    description:
      'A hearty bowl filled with quinoa, roasted veggies, avocado, and a tahini dressing.',

    //characteristic: ["salad","vegeterian"],
  },
  {
    id: uuidv4(),
    image: seafood_paella,
    title: 'Seafood Paella',
    price: 19.99,
    characteristic: ['rice', 'seafood', 'shrimp'],
    cuisine: ['italian', 'oriental'],
    ingredients: [
      '1 cup paella rice',
      '1/2 lb shrimp, peeled and deveined',
      '1/2 lb mussels, cleaned and debearded',
      '1/2 lb squid, cleaned and sliced into rings',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '1 red bell pepper, sliced',
      '1 tomato, diced',
      '1 teaspoon smoked paprika',
      'Pinch of saffron threads (optional)',
      '4 cups vegetable or seafood broth',
      'Salt and pepper to taste',
      'Olive oil',
      'Lemon wedges for serving',
    ],
    complexity: 'complex',
    recipe:
      'In a paella pan, sauté chopped onion and minced garlic in olive oil until softened.' +
      'Add sliced red bell pepper, diced tomato, and smoked paprika. Cook until vegetables are tender.' +
      'Add paella rice and saffron threads (if using). Stir to coat the rice in the flavors.' +
      'Pour in vegetable or seafood broth and bring to a simmer.' +
      'Arrange shrimp, mussels, and squid over the rice. Season with salt and pepper.' +
      'Simmer until the rice is cooked and the seafood is done.' +
      'Garnish with lemon wedges before serving.',
    description:
      'A Spanish delicacy filled with saffron-infused rice, shrimp, mussels, and chorizo.',

    //characteristic: ["rice", "seafood", "shrimp", 'italian', 'oriental'],
  },
  {
    id: uuidv4(),
    image: pancakes,
    title: 'Pancake Stack',
    price: 8.99,
    characteristic: ['pasta'],
    cuisine: ['sweets'],
    ingredients: [
      '1 cup all-purpose flour',
      '2 tablespoons sugar',
      '1 teaspoon baking powder',
      '1/2 teaspoon baking soda',
      '1 cup buttermilk',
      '1 large egg',
      '2 tablespoons melted butter',
      'Maple syrup for serving',
      'Optional: Fresh berries or sliced bananas for topping',
    ],
    complexity: 'easy',
    recipe:
      'In a bowl, whisk together flour, sugar, baking powder, and baking soda.' +
      'In another bowl, whisk buttermilk, egg, and melted butter.' +
      'Pour the wet ingredients into the dry ingredients and mix until just combined.' +
      'Heat a griddle or non-stick pan over medium heat.' +
      'Pour 1/4 cup portions of batter onto the griddle to form pancakes.' +
      'Cook until bubbles form on the surface, then flip and cook until golden brown.' +
      'Stack the pancakes and serve with maple syrup. Top with fresh berries or sliced bananas if desired.',
    description:
      'Fluffy pancakes stacked high, drizzled with maple syrup and topped with fresh berries.',

    //characteristic: ["pasta", "sweets"],
  },
  {
    id: uuidv4(),
    image: miso,
    title: 'Miso Ramen',
    price: 12.99,
    characteristic: ['spicy', 'seafood', 'shrimp', 'vegeterian', 'oriental'],
    cuisine: ['vegeterian', 'oriental'],
    ingredients: [
      '2 packs of ramen noodles',
      '4 cups vegetable or chicken broth',
      '3 tablespoons miso paste',
      '1 tablespoon soy sauce',
      '1 tablespoon sesame oil',
      'Toppings of your choice (e.g., sliced green onions, tofu, mushrooms, seaweed)',
    ],
    complexity: 'easy',
    recipe:
      'Cook ramen noodles according to package instructions. Drain and set aside.' +
      'In a pot, heat broth over medium heat.' +
      'Whisk miso paste into the broth until dissolved.' +
      'Add soy sauce and sesame oil to the pot and stir well.' +
      'Divide cooked noodles among serving bowls and ladle miso broth over them.' +
      'Add your choice of toppings.',
    description:
      'A warming bowl of ramen with miso broth, tender pork, soft-boiled egg, and green onions.',

    //characteristic: ["spicy", "seafood", "shrimp"],
  },
  {
    id: uuidv4(),
    image: beef_tacos,
    title: 'Beef Tacos',
    price: 9.99,
    characteristic: ['spicy', 'meat', 'fastfood', 'mexican'],
    cuisine: ['fastfood', 'mexican'],
    ingredients: [
      '1 lb ground beef',
      '1 packet taco seasoning',
      'Taco shells',
      'Shredded lettuce',
      'Diced tomatoes',
      'Shredded cheese',
      'Sour cream',
      'Salsa',
    ],
    complexity: 'easy',
    recipe:
      'In a skillet, cook ground beef until browned.' +
      'Drain excess fat and add taco seasoning according to packet instructions.' +
      'Warm taco shells in the oven or on the stovetop.' +
      'Fill taco shells with seasoned ground beef.' +
      'Top with shredded lettuce, diced tomatoes, shredded cheese, sour cream, and salsa.',
    description:
      'Three soft tortillas filled with seasoned beef, fresh salsa, cheese, and sour cream.',

    //characteristic: ["spicy", "meat"],
  },
  {
    id: uuidv4(),
    image: chocolate_brownie,
    title: 'Chocolate Brownie',
    price: 5.99,
    characteristic: ['dessert', 'sweets'],
    cuisine: ['sweets'],
    ingredients: [
      '1 cup unsalted butter',
      '2 cups granulated sugar',
      '4 large eggs',
      '1 teaspoon vanilla extract',
      '1 cup all-purpose flour',
      '1/2 cup cocoa powder',
      '1/4 teaspoon salt',
      'Optional: Chopped nuts or chocolate chips',
    ],
    complexity: 'easy',
    recipe:
      'Preheat oven to 350°F (175°C) and grease a baking pan.' +
      'Melt butter in a microwave-safe bowl.' +
      'In a separate bowl, whisk together sugar, eggs, and vanilla extract.' +
      'Add melted butter to the sugar mixture and mix well.' +
      'Sift in flour, cocoa powder, and salt. Mix until just combined.' +
      'Fold in chopped nuts or chocolate chips if desired.' +
      'Pour the batter into the prepared pan and smooth the top.' +
      'Bake in the preheated oven for 20-25 minutes or until a toothpick inserted comes out with moist crumbs.' +
      'Allow to cool before cutting into squares.',
    description:
      'A rich and fudgy brownie, topped with a scoop of vanilla ice cream and chocolate sauce.',

    //characteristic: ["dessert"],
  },
  {
    id: uuidv4(),
    image: lobster_bisque,
    title: 'Lobster Bisque',
    price: 14.99,
    characteristic: ['seafood', 'shrimp', 'mexican', 'italian'],
    cuisine: ['mexican', 'italian'],
    ingredients: [
      '2 lobster tails, shells removed and meat chopped',
      '1/4 cup butter',
      '1/4 cup all-purpose flour',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '4 cups seafood or vegetable broth',
      '1 cup heavy cream',
      '1/4 cup brandy or white wine (optional)',
      'Salt and pepper to taste',
      'Chopped fresh parsley for garnish',
    ],
    complexity: 'complex',
    recipe:
      'In a pot, melt butter and sauté chopped lobster meat until cooked. Remove lobster and set aside.' +
      'In the same pot, add chopped onion and minced garlic. Cook until softened.' +
      'Sprinkle flour over the vegetables and cook, stirring, for a few minutes.' +
      'Gradually whisk in broth, ensuring no lumps.' +
      'Add heavy cream, brandy or white wine (if using), and cooked lobster.' +
      'Simmer until the soup thickens and flavors meld.' +
      'Season with salt and pepper to taste.' +
      'Serve hot, garnished with chopped fresh parsley.',
    description:
      'A creamy soup made from lobster stock, aromatic vegetables, and a touch of brandy.',

    //characteristic: ["seafood", "shrimp"],
  },
  {
    id: uuidv4(),
    image: mushroom_riso,
    title: 'Mushroom Risotto',
    price: 13.99,
    characteristic: ['rice', 'seafood', 'vegeterian', 'italian'],
    cuisine: ['vegeterian', 'italian'],
    ingredients: [
      '1 cup Arborio rice',
      '1/2 cup dry white wine',
      '4 cups vegetable or chicken broth, heated',
      '1 cup mushrooms, sliced',
      '1/2 cup grated Parmesan cheese',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '2 tablespoons butter',
      '2 tablespoons olive oil',
      'Salt and pepper to taste',
      'Fresh parsley for garnish',
    ],
    complexity: 'medium',
    recipe:
      'In a pan, heat olive oil and sauté chopped onion and minced garlic until softened.' +
      'Add Arborio rice and cook until lightly toasted.' +
      'Pour in white wine and stir until mostly absorbed.' +
      'Begin adding hot broth one ladle at a time, stirring frequently. Allow each addition to be absorbed before adding more.' +
      'In a separate pan, sauté sliced mushrooms in butter until golden brown.' +
      'Once the rice is creamy and cooked to al dente, stir in sautéed mushrooms and grated Parmesan cheese.' +
      'Season with salt and pepper to taste.' +
      'Garnish with fresh parsley and serve hot.',
    description:
      'Creamy Arborio rice cooked with a medley of wild mushrooms and finished with parmesan.',

    //characteristic: ["rice", "seafood"],
  },
  {
    id: uuidv4(),
    image: eggplant_parmesan,
    title: 'Eggplant Parmesan',
    price: 11.9,
    characteristic: ['spicy', 'salad', 'vegeterian'],
    cuisine: ['vegeterian'],
    ingredients: [
      '2 large eggplants, sliced',
      '2 cups marinara sauce',
      '1 cup grated Parmesan cheese',
      '1 cup mozzarella cheese, shredded',
      '1 cup breadcrumbs',
      '2 eggs, beaten',
      '1/4 cup fresh basil, chopped',
      'Salt and pepper to taste',
      'Olive oil for frying',
    ],
    complexity: 'medium',
    recipe:
      'Preheat oven to 375°F (190°C).' +
      'Season eggplant slices with salt and pepper.' +
      'Dip each slice in beaten eggs, then coat with breadcrumbs.' +
      'In a pan, heat olive oil and fry eggplant slices until golden brown. Drain excess oil on paper towels.' +
      'In a baking dish, layer fried eggplant, marinara sauce, Parmesan cheese, and mozzarella cheese.' +
      'Repeat the layers until all ingredients are used, finishing with a layer of cheese on top.' +
      'Bake in the preheated oven for 25-30 minutes or until cheese is melted and bubbly.' +
      'Garnish with fresh basil before serving.',
    description:
      'Layers of breaded eggplant, marinara sauce, and melted mozzarella and parmesan cheeses.',

    // characteristic: ["spicy", "salad"],
  },
  {
    id: uuidv4(),
    image: lemon_cheesecake,
    title: 'Lemon Cheesecake',
    price: 6.99,
    characteristic: ['dessert', 'sweets'],
    cuisine: ['sweets'],
    ingredients: [
      '2 cups graham cracker crumbs',
      '1/2 cup unsalted butter, melted',
      '4 packages (32 oz total) cream cheese, softened',
      '1 cup granulated sugar',
      '4 large eggs',
      '1/4 cup all-purpose flour',
      '1/4 cup sour cream',
      '1/4 cup fresh lemon juice',
      'Zest of one lemon',
      '1 teaspoon vanilla extract',
    ],
    complexity: 'medium',
    recipe:
      'Preheat oven to 325°F (163°C).' +
      'Mix graham cracker crumbs with melted butter and press into the base of a springform pan to create the crust.' +
      'In a large bowl, beat cream cheese and sugar until smooth.' +
      'Add eggs one at a time, beating well after each addition.' +
      'Stir in flour, sour cream, lemon juice, lemon zest, and vanilla extract until well combined.' +
      'Pour the batter over the crust in the springform pan.' +
      'Bake in the preheated oven for 50-60 minutes or until the center is set.' +
      'Allow the cheesecake to cool, then refrigerate for several hours or overnight before serving.',
    description:
      'A creamy cheesecake with a tangy lemon flavor, served on a crumbly biscuit base.',

    //characteristic: ["dessert"],
  },
  {
    id: uuidv4(),
    image: falafel,
    title: 'Falafel Wrap',
    price: 8.99,
    characteristic: ['salad', 'vegeterian'],
    cuisine: ['vegeterian'],
    ingredients: [
      'Falafel patties (store-bought or homemade)',
      'Whole wheat wraps or flatbreads',
      'Hummus',
      'Cherry tomatoes, halved',
      'Cucumber, sliced',
      'Red onion, thinly sliced',
      'Fresh parsley, chopped',
      'Tahini sauce for drizzling',
    ],
    complexity: 'easy',
    recipe:
      'Heat falafel patties according to package instructions or prepare homemade falafel.' +
      'Warm wraps in a dry skillet or microwave.' +
      'Spread hummus on each wrap.' +
      'Place falafel patties in the center of the wraps.' +
      'Add cherry tomatoes, cucumber slices, red onion slices, and fresh parsley.' +
      'Drizzle with tahini sauce.' +
      'Fold the wraps, securing the fillings inside.' +
      'Serve immediately.',
    description:
      'Crispy falafels wrapped in a warm pita with lettuce, tomatoes, and a tahini sauce.',

    //characteristic: ["salad"],
  },
];
