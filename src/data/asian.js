import alpanas from '../data/images/masala.jpeg';
import asianCucumber from '../data/images/Dragon-Roll-0293-II.jpg';
import asianManty from '../data/images/dumpl.webp';
import asianShrimp from '../data/images/Shrimp-Fried-Noodle.jpg';
import beefBulgogi from '../data/images/Bulgogi-Korean-BBQ-HERO1.jpeg';
import beijingBeef from '../data/images/beijing-beef-panda-express-recipe-photo-tablefortwoblog-10-scaled.jpg';
import boLuc from '../data/images/Bo_Luc.jpeg';
import bunCha from '../data/images/Vietnamese-Grilled-Pork-Meatballs-with-Vermicelli-Noodles-Bun-Cha-2.jpg';
import turkeyStir from '../data/images/ground-turkey-stir-fry-recipe_2c018df3966aff7e9d5669c2ea0b2162.jpeg';
import hibachi from '../data/images/hibachi-fried-rice-11-735x1101.webp';
import hunan from '../data/images/HunanShrimp-blog-5.jpg';
import japaneseBeef from '../data/images/Beef_stir.jpg';
import japchae from '../data/images/JaaP.jpeg';
import jatsuKurry from '../data/images/Vegan-Katsu-Curry-35.jpg';
import koreanStyle from '../data/images/Gamjatang-2-scaled.webp';
import kungPao from '../data/images/Kung-Pao-Chicken-11.jpg';
import meatRice from '../data/images/POrk_veggies_stir.jpeg';
import mongolianGround from '../data/images/Mongolian-Ground-Beef-1200-3265.jpg';
import nasi from '../data/images/Nasi-Goreng-Indonesian-Fried-Rice-SQ.jpg';
import pancit from '../data/images/pancit-bihon.jpg';
import asianRiceBowl from '../data/images/asian_rice_bowl.jpeg';
import veggieNoodle from '../data/images/Green_noodles.avif';
import vindaloo from '../data/images/thai-coconut-shrimp-curry-1-f0a39bc9-480x721.jpg';
import shanghai from '../data/images/Shanghai-Noodles.webp';
import sourSweetPork from '../data/images/Sweet-and-Sour-Pork_7-SQ.webp';
import spicyNoodle from '../data/images/Spicy_noodles.jpg';
import spicyRamen from '../data/images/Spicy_ramen.jpg';
import spicyShrimp from '../data/images/spicy-shrimp-bowl-3_mini.webp';
import psicySquid from '../data/images/squid.jpeg';
import sweetMeatballs from '../data/images/Sweet-And-Sour-Meatballs.jpg';
import teryaki from '../data/images/Teryaki_wings.jpg';
import thaiBasil from '../data/images/Thai-fried-rice-21.jpg';
import thaiGreen from '../data/images/Thai-Green-Curry_5.webp';
import thaiShrimp from '../data/images/Shrimp-Chow-Mein-18-Edit.jpg';
import vietnamese from '../data/images/Vietnamese_Chicken_Curry_with_Potatoes_Recipe-1.jpg';
import wonton from '../data/images/Wonton-Soup-15-1200x1800.webp';

import { v4 as uuidv4 } from 'uuid';

export const ASIAN_DISH = [
  {
    id: uuidv4(),
    image: alpanas,
    title: 'Indian Chicken Masala',
    price: 21.99,
    characteristic: ['spicy', 'chicken', 'rice'],
    cuisine: ['indian'],
    ingredients: [
      '500gr chicken, cut to pieces',
      '1 cup yougurt',
      '1 tablespoon ginger-garlic paste',
      '1 teaspoon turmeric powder',
      '1 teaspoon red chili powder',
      'Salt to taste',
      '2 tblspoon oil',
      '2 onions, chopped',
      '2 tomatoes, pureed',
      '1 teaspoon of cumin seeds, coriander, garam masala, paprika',
    ],
    complexity: 'medium',
    recipe:
      'Marinate chicken in yogurt, ginger-garlic paste, turmeric, red chili, and salt for 30 minutes.' +
      'Sauté cumin seeds and onions in hot oil. Add coriander, garam masala, paprika. Cook spices for 1-2 minutes.' +
      'Pour in tomato puree; cook until oil separates.' +
      'Cook marinated chicken for 10-15 minutes until done, stirring occasionally.' +
      'Enjoy your flavorful chicken dish!',
    description:
      'This chicken masala curry has staple Indian herbs and spices. You can make it as hot or spicy as you like by making a few adjustments, just the way you would enjoy. Pair it with a plateful of rice, perhaps some rotis or naan and you are all set.',
  },
  {
    id: uuidv4(),
    image: asianRiceBowl,
    title: 'Ground Chicken Bowl',
    price: 23.99,
    characteristic: ['rice', 'chicken'],
    cuisine: ['all asian'],
    ingredients: [
      '1 lb ground chicken',
      '1 cup cooked quinoa or rice',
      '1 cup diced vegetables (bell peppers, onions, etc.)',
      '2 cloves garlic, minced',
      '2 tablespoons soy sauce',
      '1 tablespoon sesame oil',
    ],
    complexity: 'easy',
    recipe:
      'Brown ground chicken in a pan.' +
      'Add minced garlic, soy sauce, and sesame oil.' +
      'Stir in diced vegetables and cook until tender.' +
      'Serve over cooked quinoa or rice.' +
      'Garnish with green onions and sesame seeds.' +
      'Enjoy your quick and tasty ground chicken bowl!',
    description:
      'This easy Pork Stir Fry whips up in no time. Loaded with fresh veggies and tender pork, it’s a perfect weeknight dinner idea!',
  },
  {
    id: uuidv4(),
    image: veggieNoodle,
    title: 'Greens Soba',
    price: 22,
    characteristic: ['vegeterian', 'noodles'],
    cuisine: ['japanese'],
    ingredients: [
      '200g soba noodles',
      '2 cups mixed greens (spinach, kale, or bok choy)',
      '1 cup sliced shiitake mushrooms',
      '1 carrot, julienned',
      '2 tablespoons soy sauce',
      '1 tablespoon sesame oil',
      '1 tablespoon rice vinegar',
      'Sesame seeds for garnish',
      'Green onions, chopped, for garnish',
    ],
    complexity: 'easy',
    recipe:
      'Cook soba noodles according to package instructions.' +
      'Sauté mushrooms and carrots in sesame oil until tender.' +
      'Add mixed greens and cook until wilted.' +
      'Toss in cooked soba noodles, soy sauce, and rice vinegar.' +
      'Garnish with sesame seeds and green onions.' +
      'Serve your greens soba bowl warm and enjoy!',
    description:
      'Sweet and Sour...what could be better, along with vegetables and tender pineapple pieces, this is a true masterpiece',
  },
  // {
  //   id: uuidv4(),
  //   image: porkRice,
  //   title: "Korean Style POrk Soup",
  //   price: 22.99,
  //   description:
  //     "This Korean inspired soup is a new favorite.        Perfectly seasoned ground pork, twirly noodles, bok choy and soft boiled eggs in a delectable coconut based broth. Slurp!",
  // },
  {
    id: uuidv4(),
    image: koreanStyle,
    title: 'Korean Bone Soup',
    price: 21.99,
    characteristic: ['spicy', 'beef', 'soup'],
    cuisine: ['korean'],
    ingredients: [
      '1.5 lbs beef or pork bones',
      '8 cups water',
      '1 onion, sliced',
      '4 cloves garlic, minced',
      '1 daikon radish, peeled and sliced',
      '2 carrots, sliced',
      '4 green onions, chopped',
      '2 tablespoons soy sauce',
      '1 tablespoon sesame oil',
      'Salt and pepper to taste',
      'Cooked rice for serving',
      'Optional: Korean red pepper flakes (gochugaru) for extra spice',
    ],
    complexity: 'medium',
    recipe:
      'Rinse bones under cold water. Place in a pot with 8 cups of water. Bring to a boil, then simmer for 1-2 hours, skimming impurities.' +
      'Add sliced onion, minced garlic, daikon radish, carrots, and soy sauce. Simmer for an additional hour.' +
      'Season with salt, pepper, and sesame oil. Adjust seasoning to taste.' +
      'Add chopped green onions and optional red pepper flakes.' +
      'Serve hot over cooked rice.' +
      'Enjoy the comforting and flavorful Korean bone soup!',
    description:
      'This chicken masala curry has staple Indian herbs and spices. You can make it as hot or spicy as you like by making a few adjustments, just the way you would enjoy. Pair it with a plateful of rice, perhaps some rotis or naan and you are all set.',
  },
  {
    id: uuidv4(),
    image: asianManty,
    title: 'Asian Style Manty',
    price: 22.49,
    characteristic: ['spicy', 'pork', 'chicken', 'beef', 'shrimp'],
    cuisine: ['all asian'],
    ingredients: [
      '1/2 lb ground pork or chicken',
      '1 cup finely chopped cabbage',
      '1/4 cup finely chopped green onions',
      '2 cloves garlic, minced',
      '1 tsp ginger, grated',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      'Salt and pepper to taste',
      '3 tbsp soy sauce',
      '1 tbsp rice vinegar',
      '1 tsp sesame oil',
      'Optional: chopped green onions or sesame seeds for garnish',
    ],
    complexity: 'medium',
    recipe:
      'Prepare Filling: Combine all filling ingredients in a bowl.' +
      'Assemble Dumplings: Place filling on dumpling wrappers, fold, and seal edges.' +
      'Steam Dumplings: Steam for 15-20 minutes until cooked.' +
      'Make Dipping Sauce: Mix soy sauce, rice vinegar, and sesame oil.' +
      'Serve: Garnish dumplings, serve warm with dipping sauce.' +
      'Enjoy your quick and tasty Asian Style Mantu!',
    description:
      'Delicious steam cooked, any kind of filling you want to, or randomly picked by our chef, get surprised or pick what you already know',
  },
  {
    id: uuidv4(),
    image: asianCucumber,
    title: 'Green Dragon Roll',
    price: 13.99,
    characteristic: ['rice', 'seafood', 'shrimp'],
    cuisine: ['japanese'],
    ingredients: [
      'Nori (seaweed) sheets',
      'Sushi rice',
      'Avocado, sliced',
      'Cucumber, julienned',
      'Fresh salmon or imitation crab, thinly sliced',
      'Soy sauce for dipping',
      'Pickled ginger and wasabi for serving',
    ],
    complexity: 'medium',
    recipe:
      'Prepare Sushi Rice: Cook and season sushi rice according to package instructions.' +
      'Assemble Roll: Place nori sheet on a bamboo sushi mat. Spread a thin layer of rice, leaving a border at the top.' +
      'Add Ingredients: Arrange avocado, cucumber, and salmon/crab on the rice.' +
      'Roll: Roll the sushi tightly, using the bamboo mat for assistance. Seal the edge with a bit of water.' +
      'Slice and Serve: Slice the roll into bite-sized pieces. Serve with soy sauce, pickled ginger, and wasabi.',
    description:
      'Smashed Cucumber Salad – a classic Asian salad recipe.        It has little bruised chunks of crisp cucumber and a savory toasted sesame dressing, this salad is flavorful, refreshing and so simple to throw together.',
  },
  {
    id: uuidv4(),
    image: asianShrimp,
    title: 'Shirmp and Noodle',
    price: 26.99,
    characteristic: ['noodles', 'seafood', 'shrimp'],
    cuisine: ['all asian'],
    ingredients: [
      '8 oz rice noodles',
      '1 lb shrimp, peeled and deveined',
      '2 cups broccoli florets',
      '3 cloves garlic, minced',
      '1/4 cup soy sauce',
      '2 tablespoons oyster sauce',
      '1 tablespoon sesame oil',
      'Green onions and sesame seeds for garnish',
    ],
    complexity: 'easy',
    recipe:
      'Cook Noodles: Boil rice noodles according to package instructions. Drain and set aside.' +
      'Sauté Shrimp and Veggies: In a pan, sauté shrimp, broccoli, and garlic until shrimp turns pink and broccoli is tender.' +
      'Combine Ingredients: Add cooked noodles to the pan. Stir in soy sauce, oyster sauce, and sesame oil. Toss until well combined.' +
      'Garnish and Serve: Garnish with green onions and sesame seeds. Serve hot.',
    description: 'Delicious combination of seafood and oysetr sauce',
  },
  {
    id: uuidv4(),
    image: beefBulgogi,
    title: 'Beef Bulgogi',
    price: 22.77,
    characteristic: ['spicy', 'pork', 'beef'],
    cuisine: ['korean'],
    ingredients: [
      '1 lb thinly sliced beef (ribeye or sirloin)',
      '1/2 cup soy sauce',
      '3 tablespoons sugar',
      '2 tablespoons sesame oil',
      '3 cloves garlic, minced',
      '1 tablespoon grated ginger',
      '2 tablespoons mirin or rice wine',
      'Green onions and sesame seeds for garnish',
    ],
    complexity: 'medium',
    recipe:
      'Marinate Beef: Combine sliced beef with soy sauce, sugar, sesame oil, garlic, ginger, and mirin. Marinate for at least 30 minutes.' +
      'Sauté: In a hot pan, cook marinated beef until browned and cooked through.' +
      'Garnish and Serve: Garnish with green onions and sesame seeds. Serve over rice or in lettuce wraps.',
    description:
      'Bulgogi hardly needs any introduction for Korean food lovers. For the rest of you, its about time to welcome this iconic Korean dish into your life.If you love grilled meats with bold flavors, this Korean BBQ Beef, aka Bulgogi, is a MUST try. Tender, juicy, slightly caramelized beef strips with savory soy, garlicky flavors and a hint of sweetness. Ahhh…',
  },
  {
    id: uuidv4(),
    image: beijingBeef,
    title: 'PandaExpress Beijing Beef',
    price: 23.99,
    characteristic: ['vegeterian', 'beef'],
    cuisine: ['chinese'],
    ingredients: [
      '1 lb flank steak, thinly sliced',
      '1/4 cup soy sauce',
      '2 tablespoons hoisin sauce',
      '2 tablespoons cornstarch',
      'Vegetable oil for frying',
      '2 cloves garlic, minced',
      '1 tablespoon ginger, grated',
      '1/4 cup water',
      '3 tablespoons sugar',
      '2 tablespoons rice vinegar',
      '1/4 cup green onions, chopped',
      '1 tablespoon sesame oil',
    ],
    complexity: 'medium',
    recipe:
      'Coat Beef: Toss sliced flank steak with soy sauce and cornstarch.' +
      'Fry Beef: In a pan, heat oil and fry the beef until crispy. Set aside.' +
      'Sauté Aromatics: In the same pan, sauté garlic and ginger. Add water, soy sauce, hoisin sauce, sugar, and rice vinegar. Simmer until sauce thickens.' +
      'Combine and Finish: Add the crispy beef back to the pan. Stir in green onions and sesame oil. Toss until well coated.',
    description:
      'This Beijing Beef is based off of the hugely popular Panda Express dish.         Crispy beef strips with onion and red bell pepper in a tangy and sweet sticky sauce with just a touch of heat.',
  },

  {
    id: uuidv4(),
    image: bunCha,
    title: 'Bun Cha (Cutlet Bowl)',
    price: 17.99,
    characteristic: ['pork', 'chicken', 'noodles', 'beef'],
    cuisine: ['vietnamese'],
    ingredients: [
      '1 lb pork shoulder, thinly sliced',
      '3 tablespoons fish sauce',
      '2 tablespoons soy sauce',
      '3 tablespoons honey or sugar',
      '3 cloves garlic, minced',
      '1 tablespoon vegetable oil',
      'Vermicelli noodles, cooked',
      'Fresh herbs (mint, cilantro)',
      'Lettuce leaves',
      'Vietnamese dipping sauce (Nuoc Cham)',
    ],
    complexity: 'medium',
    recipe:
      'Marinate Pork: Combine pork slices with fish sauce, soy sauce, honey/sugar, minced garlic, and vegetable oil. Marinate for at least 30 minutes.' +
      'Grill Pork: Grill marinated pork until cooked and slightly caramelized.' +
      'Prepare Accompaniments: Cook vermicelli noodles, chop fresh herbs, and arrange lettuce leaves.' +
      'Serve: Place grilled pork on a plate with noodles, herbs, and lettuce. Serve with Vietnamese dipping sauce.',
    description:
      'Bun Cha are famous caramelized pork meatballs from the streets of Hanoi. This is an easy Vietnamese recipe that anyone can make that’s fresh and full of flavor.',
  },
  {
    id: uuidv4(),
    image: turkeyStir,
    title: 'Ground Turkey Stir Fry',
    price: 24.99,
    characteristic: ['chicken', 'rice'],
    cuisine: ['all asian'],
    ingredients: [
      '1 lb ground turkey',
      '2 tablespoons soy sauce',
      '1 tablespoon oyster sauce',
      '1 tablespoon hoisin sauce',
      '1 tablespoon sesame oil',
      '1 tablespoon vegetable oil',
      '3 cloves garlic, minced',
      '1 tablespoon ginger, grated',
      'Vegetables (bell peppers, broccoli, carrots), chopped',
      'Green onions for garnish',
    ],
    complexity: 'easy',
    recipe:
      'Cook Turkey: In a pan, brown ground turkey in vegetable oil.' +
      'Sauce Mixture: Mix soy sauce, oyster sauce, hoisin sauce, and sesame oil in a bowl.' +
      'Add Aromatics: Add minced garlic and grated ginger to the turkey. Stir briefly.' +
      'Stir Fry Vegetables: Add chopped vegetables and cook until tender.' +
      'Combine and Serve: Pour sauce mixture over the turkey and vegetables. Stir until well-coated. Garnish with green onions.' +
      'Serve: Serve over rice or noodles.',
    description:
      'This Ground Turkey Stir Fry is one of the easiest weeknight dinners you could imagine.With tender ground turkey and a variety of veggies, it’s both tasty and nutritious!',
  },
  {
    id: uuidv4(),
    image: hibachi,
    title: 'Hibachi Fried Rice',
    price: 19.99,
    characteristic: ['vegeterian', 'rice'],
    cuisine: ['japanese'],
    ingredients: [
      '3 cups cooked and chilled rice',
      '1 cup cooked protein (chicken, shrimp, or tofu), diced',
      '2 eggs, beaten',
      '1 cup mixed vegetables (peas, carrots, corn)',
      '3 tablespoons soy sauce',
      '1 tablespoon butter',
      '1 tablespoon vegetable oil',
      'Salt and pepper to taste',
      'Green onions for garnish',
    ],
    complexity: 'medium',
    recipe:
      'Prep Ingredients: Have all ingredients ready and within reach.' +
      'Sauté Vegetables: In a large pan, sauté mixed vegetables in vegetable oil.' +
      'Add Protein and Rice: Add diced protein and cooked, chilled rice to the pan. Stir to combine.' +
      'Push to the Side: Create a well in the center of the pan. Pour beaten eggs into the well, scramble, and mix with rice.' +
      'Season and Finish: Add soy sauce, butter, salt, and pepper. Stir to combine and cook until everything is heated through.' +
      'Garnish and Serve: Garnish with chopped green onions. Serve hot.',
    description:
      'If you’re a rice lover like me, this easy Hibachi Fried Rice recipe is a must! It’s so quick to make, and the taste is just too good.Made famous by Japanese steakhouses like Benihana, it’s the perfect side dish for any of your favorite stir fry dishes.Trust me, this recipe is a real keeper…',
  },
  {
    id: uuidv4(),
    image: hunan,
    title: 'Hunan Shrimp',
    price: 29.99,
    characteristic: ['spicy', 'rice', 'seafood', 'shrimp'],
    cuisine: ['chinese'],
    ingredients: [
      '1 lb shrimp, peeled and deveined',
      '2 tablespoons soy sauce',
      '1 tablespoon hoisin sauce',
      '1 tablespoon oyster sauce',
      '1 tablespoon rice vinegar',
      '1 tablespoon sugar',
      '1 tablespoon cornstarch',
      '2 tablespoons vegetable oil',
      '3 cloves garlic, minced',
      '1 tablespoon ginger, grated',
      '1 teaspoon chili paste (adjust to taste)',
      '2 cups broccoli florets',
      'Green onions for garnish',
    ],
    complexity: 'complex',
    recipe:
      'Marinate Shrimp: In a bowl, combine shrimp with soy sauce, hoisin sauce, oyster sauce, rice vinegar, sugar, and cornstarch. Marinate for 15-20 minutes.' +
      'Sauté Aromatics: Heat vegetable oil in a pan. Sauté minced garlic, grated ginger, and chili paste.' +
      'Cook Shrimp: Add marinated shrimp to the pan. Cook until shrimp turns pink.' +
      'Add Vegetables: Stir in broccoli florets and cook until tender-crisp.' +
      'Garnish and Serve: Garnish with chopped green onions. Serve over rice.',
    description:
      'These fiery Hunan shrimp are super quick and super tasty. Don’t worry, you can always adjust the heat level if you’re not into too much spice.',
  },
  {
    id: uuidv4(),
    image: japaneseBeef,
    title: 'Japanese Beef Curry',
    price: 19.99,
    characteristic: ['rice', 'beef'],
    cuisine: ['japanese'],
    ingredients: [
      '1 lb beef stew meat, cubed',
      '2 large potatoes, diced',
      '2 carrots, sliced',
      '1 large onion, chopped',
      '2 cloves garlic, minced',
      '2 tbsp vegetable oil',
      '3 cups beef or vegetable broth',
      '2 tbsp curry powder',
      '1 tbsp garam masala',
      '1 tbsp soy sauce',
      '2 tbsp tomato paste',
      '2 bay leaves',
      'Salt and pepper to taste',
      'Cooked rice for serving',
    ],
    complexity: 'complex',
    recipe:
      'Sauté & Brown: In a pot, brown beef in vegetable oil. Add onions and garlic; sauté until onions are soft.' +
      'Add Spices: Stir in curry powder, garam masala, and tomato paste; cook for a few minutes.' +
      'Simmer: Pour in broth, add soy sauce, bay leaves, salt, and pepper. Simmer.' +
      'Add Vegetables: Add potatoes and carrots; simmer until vegetables are tender.' +
      'Serve: Discard bay leaves. Serve Japanese beef curry over rice.',
    description:
      'Curry… It’s more “Japanese” than you think. Yes, curry is so popular in Japan that it’s regarded as one of the top two national dishes, along with ramen.This Japanese Beef Curry has a milder and sweeter flavor than the curries of India and the Caribbean, but it’s equally packed with flavor.',
  },
  {
    id: uuidv4(),
    image: japchae,
    title: 'Japchae (Korean Stir Fry)',
    price: 28.99,
    characteristic: ['spicy', 'vegeterian', 'pork', 'chicken', 'noodles'],
    cuisine: ['korean'],
    ingredients: [
      '6 oz sweet potato glass noodles',
      '1/2 lb beef, thinly sliced',
      '1 cup julienned carrots',
      '1 cup sliced mushrooms',
      '1 cup spinach, blanched',
      '1 onion, thinly sliced',
      '3 cloves garlic, minced',
      '3 tablespoons soy sauce',
      '2 tablespoons sesame oil',
      '1 tablespoon sugar',
      'Sesame seeds for garnish',
      'Green onions for garnish',
    ],
    complexity: 'medium',
    recipe:
      'Cook Noodles: Boil sweet potato glass noodles according to package instructions. Drain and rinse with cold water.' +
      'Sauté Beef & Vegetables: In a pan, sauté thinly sliced beef, julienned carrots, sliced mushrooms, and sliced onions until cooked.' +
      'Mix Sauce: In a bowl, mix minced garlic, soy sauce, sesame oil, and sugar.' +
      'Combine & Toss: Add the cooked noodles and blanched spinach to the pan. Pour the sauce over and toss until well-coated.' +
      'Garnish and Serve: Garnish with sesame seeds and green onions. Serve Japchae warm or at room temperature.',
    description:
      'Japchae is a unique Korean glass noodle stir fry that is often served at special occasions, and is also popular at parties and pot lucks.',
  },

  {
    id: uuidv4(),
    image: jatsuKurry,
    title: 'Katsudon (Vegan Bowl)',
    price: 23.99,
    characteristic: ['spicy', 'vegeterian', 'rice'],
    cuisine: ['japanese'],
    ingredients: [
      '4 pork cutlets (tonkatsu)',
      '1 onion, thinly sliced',
      '3 eggs, beaten',
      '2 cups cooked rice',
      '2 cups dashi broth',
      '4 tablespoons soy sauce',
      '2 tablespoons mirin',
      '2 tablespoons sugar',
      '2 tablespoons vegetable oil',
      'Chopped green onions for garnish',
    ],
    complexity: 'complex',
    recipe:
      'Cook Tonkatsu: Fry pork cutlets until golden brown. Set aside.' +
      'Sauté Onion: In the same pan, sauté thinly sliced onions until softened.' +
      'Prepare Broth: Mix dashi broth, soy sauce, mirin, and sugar. Pour over onions.' +
      'Simmer & Add Tonkatsu: Simmer until onions are tender. Add tonkatsu to the pan.' +
      'Pour Beaten Eggs: Pour beaten eggs over the mixture. Cover and cook until eggs are set.' +
      'Serve: Serve Katsudon over cooked rice. Garnish with chopped green onions.',
    description:
      'Katsudon is a popular Japanese rice bowl featuring a fried pork cutlet that gets simmered with eggs and onions in a savory sauce. ',
  },
  {
    id: uuidv4(),
    image: kungPao,
    title: 'Kung Pao Chicken',
    price: 24.08,
    characteristic: ['spicy', 'chicken'],
    cuisine: ['chinese'],
    ingredients: [
      '1 lb boneless, skinless chicken, diced',
      '1/2 cup peanuts',
      '1 red bell pepper, diced',
      '1 green bell pepper, diced',
      '3 green onions, sliced',
      '2 tablespoons vegetable oil',
      '3 cloves garlic, minced',
      '1 tablespoon ginger, grated',
      '2 tablespoons soy sauce',
      '1 tablespoon rice vinegar',
      '1 tablespoon hoisin sauce',
      '2 teaspoons sugar',
      '1 teaspoon cornstarch, dissolved in water',
      'Chili flakes for heat (optional)',
      'Cooked rice for serving',
    ],
    complexity: 'complex',
    recipe:
      'Sauté Chicken: In a pan, sauté diced chicken in vegetable oil until cooked through.' +
      'Add Aromatics: Add minced garlic and grated ginger; stir briefly.' +
      'Stir Fry Veggies: Add diced bell peppers, sliced green onions, and peanuts. Stir fry until veggies are tender.' +
      'Make Sauce: Mix soy sauce, rice vinegar, hoisin sauce, sugar, and cornstarch slurry. Pour over the chicken and veggies.' +
      'Toss & Serve: Toss until everything is well-coated and the sauce thickens. Optionally, add chili flakes for heat.' +
      'Serve: Serve Kung Pao Chicken over cooked rice.',
    description:
      'Kung Pao Chicken – it’s savory, it’s sweet, it’s tangy, and those dried chilis give it just a bit of kick! Another restaurant copycat… just a tad bid better.',
  },
  {
    id: uuidv4(),
    image: meatRice,
    title: 'Chicken & Eggplant',
    price: 20.99,
    characteristic: ['chicken'],
    cuisine: ['chinese'],
    ingredients: [
      '1 lb boneless, skinless chicken, thinly sliced',
      '2 medium-sized eggplants, diced',
      '3 cloves garlic, minced',
      '1 tablespoon ginger, grated',
      '2 tablespoons soy sauce',
      '1 tablespoon oyster sauce',
      '1 tablespoon cornstarch',
      '1 tablespoon vegetable oil',
      '2 green onions, chopped',
      'Cooked rice for serving',
    ],
    complexity: 'medium',
    recipe:
      'Marinate Chicken: Mix sliced chicken with soy sauce, oyster sauce, and cornstarch. Let it marinate for 15-20 minutes.' +
      'Sauté Chicken: In a pan, heat vegetable oil. Sauté marinated chicken until cooked through.' +
      'Add Aromatics and Eggplant: Add minced garlic, grated ginger, and diced eggplants. Stir-fry until eggplants are tender.' +
      'Combine Ingredients: Mix in chopped green onions and toss until well combined.' +
      'Serve: Serve the chicken and eggplant stir-fry over cooked rice.',
    description:
      'Tender and delicious stew of chicken breasts and greens, served with rice, perfect combination',
  },
  {
    id: uuidv4(),
    image: mongolianGround,
    title: 'Mongolian Ground Beef',
    price: 24.99,
    characteristic: ['rice', 'beef'],
    cuisine: ['mongolian'],
    ingredients: [
      '1 lb ground beef',
      '1/4 cup soy sauce',
      '2 tablespoons hoisin sauce',
      '2 tablespoons brown sugar',
      '1 tablespoon sesame oil',
      '3 cloves garlic, minced',
      '1 tablespoon ginger, grated',
      '2 green onions, chopped',
      'Sesame seeds for garnish',
      'Cooked rice for serving',
    ],
    complexity: 'easy',
    recipe:
      'Cook Ground Beef: Brown ground beef in a pan over medium heat.' +
      'Make Sauce: Mix soy sauce, hoisin sauce, brown sugar, sesame oil, minced garlic, and grated ginger.' +
      'Combine & Simmer: Pour the sauce over the cooked beef. Simmer until the sauce thickens.' +
      'Garnish and Serve: Add chopped green onions and sesame seeds. Serve over cooked rice.',
    description:
      'Mongolian Ground Beef is a 20 minute stir fry bursting with sweet and savory Asian flavors.It’s a perfect weeknight meal to come back to again and again.',
  },
  {
    id: uuidv4(),
    image: nasi,
    title: 'Nasi Goreng',
    price: 25.99,
    characteristic: ['vegeterian', 'rice'],
    cuisine: ['indonesian'],
    ingredients: [
      '2 cups cooked rice, preferably day-old',
      '2 tablespoons vegetable oil',
      '3 cloves garlic, minced',
      '1 onion, finely chopped',
      '2 eggs, beaten',
      '200g (7 oz) chicken, cooked and shredded',
      '100g (3.5 oz) shrimp, peeled and deveined',
      '2 tablespoons sweet soy sauce (kecap manis)',
      '1 tablespoon soy sauce',
      '1 teaspoon chili paste (sambal) or to taste',
      'Salt and pepper to taste',
      'Green onions and fried shallots for garnish',
    ],
    complexity: 'easy',
    recipe:
      'Heat oil in a wok or large skillet over medium-high heat.' +
      'Add garlic and onion, sauté until fragrant.' +
      'Push the garlic and onion to the side, pour beaten eggs into the empty side of the wok, scramble them, and then mix with the garlic and onion.' +
      'Add chicken and shrimp, cook until they are cooked through.' +
      'Add rice to the wok, breaking up any clumps.' +
      'Pour sweet soy sauce, soy sauce, and chili paste over the rice. Mix well.' +
      'Season with salt and pepper to taste.' +
      'Continue cooking, stirring frequently, until the rice is heated through and has a nice golden color.' +
      'Garnish with green onions and fried shallots.',
    description:
      'This is just not your regular fried rice. Nasi Goreng is a national dish of Indonesia, for good reason. It is a simple yet flavorful fried rice with an intriguing blend of ingredients, techniques, and traditions.From street vendors to households to high end restaurants, everyone likes to stir fry Nasi Goreng with their own tweaks and tricks. Make this savory, sweet umami flavor bomb with bold notes of spicy.',
  },
  {
    id: uuidv4(),
    image: pancit,
    title: 'Filipino Pancit',
    price: 27.98,
    characteristic: ['spicy', 'pork', 'chicken', 'noodles'],
    cuisine: ['filipino'],
    ingredients: [
      '250g (9 oz) pancit noodles',
      '2 tablespoons cooking oil',
      '3 cloves garlic, minced',
      '1 onion, sliced',
      '200g (7 oz) chicken breast, sliced',
      '200g (7 oz) pork belly, sliced',
      '1 carrot, julienned',
      '1/2 cup soy sauce',
      '1/4 cup oyster sauce',
      '1 cup chicken broth',
      '1 cup cabbage, shredded',
      'Green onions and lemon wedges for garnish',
    ],
    complexity: 'medium',
    recipe:
      'Cook pancit noodles according to package instructions. Drain and set aside.' +
      'In a large pan or wok, heat cooking oil over medium-high heat.' +
      'Sauté garlic and onion until fragrant and onions are translucent.' +
      'Add sliced chicken and pork, cook until browned.' +
      'Stir in julienned carrots and cook for a few minutes until slightly tender.' +
      'Pour soy sauce, oyster sauce, and chicken broth into the pan. Mix well.' +
      'Add cooked pancit noodles and toss until well-coated with the sauce.' +
      'Mix in shredded cabbage and cook until wilted.' +
      'Garnish with chopped green onions and serve with lemon wedges.',
    description:
      'Pancit, or Pancit Bihon, is a cherished noodle dish in Filipino cuisine, beloved for generations. It’s a perfect stir fry of thin rice vermicelli noodles, tender meats, and crisp vegetables.Try this easy and quick noodle stir fry, Filipino style, in about 30 minutes. If noodles are what you crave for, you are going to love this one.',
  },
  {
    id: uuidv4(),
    image: sweetMeatballs,
    title: 'Sweet and Sour Meatballs',
    price: 23.99,
    characteristic: ['pork', 'rice'],
    cuisine: ['all asian'],
    ingredients: [
      '1 lb ground meat (beef, pork, or chicken)',
      '1/2 cup breadcrumbs',
      '1 egg',
      'Salt and pepper to taste',
      '1 cup pineapple chunks',
      '1 bell pepper, diced',
      '1/2 cup ketchup',
      '1/4 cup soy sauce',
      '3 tablespoons brown sugar',
      '2 tablespoons vinegar',
    ],
    complexity: 'easy',
    recipe:
      'Preheat oven to 375°F (190°C).' +
      'In a bowl, mix ground meat, breadcrumbs, egg, salt, and pepper. Form into meatballs.' +
      'Bake meatballs in the oven until browned and cooked through.' +
      'In a saucepan, combine pineapple, bell pepper, ketchup, soy sauce, brown sugar, and vinegar.' +
      'Simmer the sauce until it thickens.' +
      'Add cooked meatballs to the sauce and coat them evenly.' +
      'Serve over rice or as desired.',
    description:
      'This classic Asian recipe can be done in 25-minutes with pineapple, bell pepper, and the most delicious sweet and tangy sauce.Serve it alongside hot white rice or noodles.',
  },

  {
    id: uuidv4(),
    image: vindaloo,
    title: 'Shrimp curry',
    price: 18.99,
    characteristic: ['spicy', 'seafood', 'shrimp'],
    cuisine: ['indian'],
    ingredients: [
      '1 lb shrimp, peeled and deveined',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '1 can (14 oz) coconut milk',
      '2 tablespoons red curry paste',
      '1 tablespoon fish sauce',
      '1 tablespoon vegetable oil',
      '1 red bell pepper, sliced',
      'Fresh cilantro for garnish',
    ],
    complexity: 'easy',
    recipe:
      'In a pan, heat vegetable oil and sauté onions and garlic until fragrant.' +
      'Add red curry paste and cook for a minute.' +
      'Pour in coconut milk and bring to a simmer.' +
      'Add fish sauce and sliced bell pepper, simmer for a few minutes.' +
      'Add shrimp and cook until they turn pink and opaque.' +
      'Garnish with fresh cilantro.' +
      'Serve over rice or noodles.',
    description:
      'Shrimp curry is one of the easiest Indian meals you can cook in your kitchen.        The shrimp is marinated first in vibrant and tangy hot vindaloo paste and later slow cooked along with caramelized onions for hours.Result? Melt in you mouth deliciousness.',
  },
  {
    id: uuidv4(),
    image: shanghai,
    title: 'Shanghai Fried Noodles',
    price: 22.99,
    characteristic: ['spicy', 'vegeterian', 'pork', 'noodles'],
    cuisine: ['chinese'],
    ingredients: [
      '250g (9 oz) Shanghai noodles or egg noodles',
      '2 tablespoons vegetable oil',
      '2 cloves garlic, minced',
      '1 cup shiitake mushrooms, sliced',
      '1 cup bok choy, chopped',
      '200g (7 oz) pork or chicken, sliced',
      '2 tablespoons soy sauce',
      '1 tablespoon oyster sauce',
      '1 teaspoon sesame oil',
      'Green onions for garnish',
    ],
    complexity: 'easy',
    recipe:
      'Cook Shanghai noodles according to package instructions. Drain and set aside.' +
      'In a wok or large skillet, heat vegetable oil and sauté garlic until fragrant.' +
      'Add sliced pork or chicken and cook until browned.' +
      'Add shiitake mushrooms and bok choy, stir-fry until vegetables are tender.' +
      'Add cooked noodles to the wok.' +
      'Pour soy sauce, oyster sauce, and sesame oil over the noodles. Toss until well-coated.' +
      'Garnish with chopped green onions.',
    description:
      'Restaurant style fried noodles, stir fried quick in your very own kitchen!! Shanghai Fried Noodles is a one pan Asian dish that is a complete meal with noodles, meat and veggies.The chewy, thick noodles are so much fun to slurp when coated in a delicious sweet and savory sauce.',
  },
  {
    id: uuidv4(),
    image: sourSweetPork,
    title: 'Sour and Sweet Pork',
    price: 23.99,
    characteristic: ['pork', 'rice'],
    cuisine: ['all asian'],
    ingredients: [
      '1 lb pork tenderloin, cut into bite-sized pieces',
      '1 cup pineapple chunks',
      '1 bell pepper, diced',
      '1 onion, cut into chunks',
      '1/2 cup ketchup',
      '1/4 cup soy sauce',
      '3 tablespoons brown sugar',
      '2 tablespoons vinegar',
      '1 tablespoon cornstarch (optional for thickening)',
      'Vegetable oil for frying',
    ],
    complexity: 'medium',
    recipe:
      'In a bowl, mix pork with salt and pepper. Fry until browned and cooked through.' +
      'In a separate pan, combine pineapple, bell pepper, onion, ketchup, soy sauce, brown sugar, and vinegar.' +
      'Simmer the sauce until it thickens. If desired, mix cornstarch with water and add to thicken further.' +
      'Add fried pork to the sauce and coat evenly.' +
      'Serve over rice or as desired.',
    description:
      'Delicious pork in sour and slightly sweet sauce would never leave anyone indifferent',
  },
  {
    id: uuidv4(),
    image: spicyNoodle,
    title: 'Spicy Noodle',
    price: 22.89,
    characteristic: ['spicy', 'pork', 'chicken', 'noodles'],
    cuisine: ['chinese', 'all asian'],
    ingredients: [
      '200g (7 oz) noodles of your choice',
      '2 tablespoons chili oil',
      '2 cloves garlic, minced',
      '1 tablespoon soy sauce',
      '1 teaspoon sugar',
      '1 green onion, chopped',
      'Sesame seeds for garnish',
    ],
    complexity: 'easy',
    recipe:
      'Cook noodles according to package instructions. Drain and set aside.' +
      'In a pan, heat chili oil and sauté minced garlic until fragrant.' +
      'Add cooked noodles to the pan.' +
      'Pour soy sauce and sugar over the noodles. Toss until well-coated.' +
      'Garnish with chopped green onions and sesame seeds.',
    description:
      'I know there are spice hunters out there, and this post is inspired by and dedicated to such souls. These Spicy Noodles are just the thing you might want in your life. They are absolutely fiery delicious, a perfect balance of HOT with a good dose of umami and a tad bit of sweet. These spicy garlic noodles are perfect for lazy days, as they happen in under 15 minutes, and can be customizable in so many ways.',
  },
  {
    id: uuidv4(),
    image: spicyRamen,
    title: 'Spicy Ramen',
    price: 19.99,
    characteristic: ['spicy', 'pork', 'chicken', 'noodles', 'soup'],
    cuisine: ['chinese', 'japanese', 'korean'],
    ingredients: [
      '2 packs of ramen noodles',
      '4 cups chicken or vegetable broth',
      '2 tablespoons soy sauce',
      '1 tablespoon sesame oil',
      '2 cloves garlic, minced',
      '1 tablespoon gochujang (Korean chili paste)',
      '1 teaspoon sriracha or to taste',
      'Green onions and boiled egg for garnish',
    ],
    complexity: 'easy',
    recipe:
      'Cook ramen noodles according to package instructions. Drain and set aside.' +
      'In a pot, bring broth to a simmer.' +
      'Add soy sauce, sesame oil, minced garlic, gochujang, and sriracha to the broth. Stir well.' +
      'Add cooked ramen noodles to the pot and heat through.' +
      'Garnish with chopped green onions and a boiled egg.ion:',
    description:
      'Ready to ignite your taste buds and warm your soul? Say hello to this extraordinary Spicy Ramen recipe, which is so much more than just a bowl of noodles.Imagine a symphony of flavors – spicy, umami, savory, and just a hint of sweetness – coming together in a harmonious blend that’s sure to make you go “Wow!”',
  },
  {
    id: uuidv4(),
    image: spicyShrimp,
    title: 'Spicy shrimp bowl',
    price: 21.99,
    characteristic: ['spicy', 'seafood', 'shrimp'],
    cuisine: ['japanese', 'indonesian'],
    ingredients: [
      '1 lb shrimp, peeled and deveined',
      '2 cups cooked rice',
      '1 cup broccoli florets',
      '2 tablespoons soy sauce',
      '1 tablespoon sriracha or to taste',
      '1 tablespoon honey',
      '1 tablespoon vegetable oil',
      '2 cloves garlic, minced',
      'Sesame seeds and sliced green onions for garnish',
    ],
    complexity: 'easy',
    recipe:
      'Cook rice according to package instructions.' +
      'In a pan, heat vegetable oil and sauté minced garlic until fragrant.' +
      'Add shrimp to the pan and cook until pink and opaque.' +
      'Steam broccoli until tender-crisp.' +
      'In a small bowl, mix soy sauce, sriracha, and honey. Pour over the shrimp and toss to coat.' +
      'Serve the spicy shrimp over rice, garnished with sesame seeds and sliced green onions.',
    description:
      'Get ready, this Spicy Shrimp Bowl is going to be you new weeknight addiction! Super easy and nutritious, it has a variety of flavors and textures that are just spot on.Plump, juicy shrimp, chewy quinoa, creamy avocado and cool Mango Salad all combine for bowl meal that can’t be beat.',
  },
  {
    id: uuidv4(),
    image: psicySquid,
    title: 'Spicy Squid',
    price: 30.0,
    characteristic: ['spicy', 'seafood', 'shrimp'],
    cuisine: ['korean'],
    ingredients: [
      '1 lb squid tubes, cleaned and sliced',
      '2 tablespoons gochujang (Korean chili paste)',
      '1 tablespoon soy sauce',
      '1 tablespoon sesame oil',
      '2 cloves garlic, minced',
      '1 teaspoon sugar',
      '1 tablespoon vegetable oil',
      'Sliced green onions and sesame seeds for garnish',
    ],
    complexity: 'medium',
    recipe:
      'In a bowl, mix gochujang, soy sauce, sesame oil, minced garlic, and sugar.' +
      'Heat vegetable oil in a pan over medium-high heat.' +
      'Add sliced squid to the pan and cook until opaque.' +
      'Pour the spicy sauce over the squid and toss to coat evenly.' +
      'Cook for an additional 2-3 minutes until the sauce thickens.' +
      'Garnish with sliced green onions and sesame seeds.',
    description:
      'This Spicy Squid Stir Fry, known as Ojingeo Bokkeum in Korea, is a quick throw together meal that is sure to satisfy your Asian cravings.Tender squid and fresh veggies are quickly stir fried, then tossed with a flavorful Korean chili sauce, which has a fair share of kick.',
  },

  {
    id: uuidv4(),
    image: teryaki,
    title: 'Teryiaki Chicken Wings',
    price: 13.99,
    characteristic: ['chicken'],
    cuisine: ['all asian', 'chinese', 'japanese'],
    ingredients: [
      '2 lbs chicken wings',
      '1/2 cup soy sauce',
      '1/4 cup mirin',
      '3 tablespoons brown sugar',
      '2 cloves garlic, minced',
      '1 teaspoon ginger, grated',
      'Sesame seeds and chopped green onions for garnish',
    ],
    complexity: 'easy',
    recipe:
      'Preheat oven to 400°F (200°C).' +
      'In a bowl, mix soy sauce, mirin, brown sugar, minced garlic, and grated ginger.' +
      'Place chicken wings in a baking dish and pour half of the teriyaki sauce over them.' +
      'Bake wings in the preheated oven for 40-45 minutes, turning once and basting with the remaining sauce.' +
      'Garnish with sesame seeds and chopped green onions before serving.',
    description:
      'Sticky Asian Wings – If you have been looking for a great new chicken wing recipe, this is IT! Crispy baked wings, that are tender and juicy inside, are tossed with the ultimate Asian sticky sauce. They’re savory and sweet, with just a hint of kick, and get enhanced with a good sprinkling of sesame seeds. These wings are just too good…',
  },
  {
    id: uuidv4(),
    image: thaiBasil,
    title: 'Thai Basil Fried Rice',
    price: 29.99,
    characteristic: ['chicken', 'rice'],
    cuisine: ['thai'],
    ingredients: [
      '2 cups cooked jasmine rice, preferably day-old',
      '1 cup basil leaves, Thai basil if available',
      '1 cup mixed vegetables (e.g., bell peppers, peas, carrots)',
      '2 cloves garlic, minced',
      '2 tablespoons soy sauce',
      '1 tablespoon fish sauce',
      '1 tablespoon oyster sauce',
      '1 tablespoon vegetable oil',
      "1-2 bird's eye chili, minced (optional for heat)",
    ],
    complexity: 'easy',
    recipe:
      'Heat vegetable oil in a wok or large skillet over medium-high heat.' +
      'Sauté minced garlic and birds eye chili until fragrant.' +
      'Add mixed vegetables and stir-fry until they are tender-crisp.' +
      'Add cooked rice to the wok, breaking up any clumps.' +
      'Pour soy sauce, fish sauce, and oyster sauce over the rice. Mix well.' +
      'Add basil leaves and continue cooking until the basil wilts.' +
      'Serve hot and garnish with additional basil leaves if desired.',
    description:
      'Here is a little spin on your regular fried rice with a huge flavor upgrade!!         This Thai Basil Fried Rice is infused with such amazing spicy and umami flavors that you will wonder how simple fried rice can be so tasty.',
  },
  {
    id: uuidv4(),
    image: thaiGreen,
    title: 'Tahi Green Curry',
    price: 22.99,
    characteristic: ['spicy', 'pork', 'chicken'],
    cuisine: ['thai'],
    ingredients: [
      '1 lb chicken or tofu, cut into bite-sized pieces',
      '1 can (14 oz) coconut milk',
      '2 tablespoons green curry paste',
      '1 cup mixed vegetables (e.g., bell peppers, bamboo shoots, and eggplant)',
      '2 tablespoons fish sauce',
      '1 tablespoon brown sugar',
      '1 tablespoon vegetable oil',
      'Fresh basil leaves for garnish',
    ],
    complexity: 'easy',
    recipe:
      'In a pot, heat vegetable oil and sauté green curry paste until fragrant.' +
      'Add chicken or tofu and cook until browned.' +
      'Pour in coconut milk, fish sauce, and brown sugar. Stir well.' +
      'Add mixed vegetables and simmer until they are tender.' +
      'Serve hot, garnished with fresh basil leaves.',
    description:
      'Thai Curry… Probably the first choice to order in any Thai restaurant. Learn to make this easy and quick curry right in your kitchen. It comes out beautifully fragrant with Big, Bold flavors that you crave for.',
  },
  {
    id: uuidv4(),
    image: thaiShrimp,
    title: 'Thai Shrimp Curry',
    price: 27.99,
    characteristic: ['noodles', 'seafood', 'shrimp'],
    cuisine: ['thai'],
    ingredients: [
      '1 lb shrimp, peeled and deveined',
      '1 can (14 oz) coconut milk',
      '2 tablespoons red curry paste',
      '1 cup mixed vegetables (e.g., bell peppers, zucchini, and peas)',
      '2 tablespoons fish sauce',
      '1 tablespoon brown sugar',
      '1 tablespoon vegetable oil',
      'Fresh cilantro for garnish',
    ],
    complexity: 'easy',
    recipe:
      'In a pot, heat vegetable oil and sauté red curry paste until fragrant.' +
      'Add shrimp and cook until they turn pink.' +
      'Pour in coconut milk, fish sauce, and brown sugar. Stir well.' +
      'Add mixed vegetables and simmer until they are tender.' +
      'Serve hot, garnished with fresh cilantro.',
    description:
      'Spicy, aromatic and exotic… Thai curries. Im ready for a big bowl any time of the day. Todays Thai Shrimp Curry is a very special recipe that I have been cooking for years.        You can make it as an authentic, hot curry one would get on the streets of Bangkok, or customize the heat a little to suite your palate. At the end, its all about that distinct combination of sweet, sour, salty, and spicy in a bowl, which Thai food is so famously known for.',
  },
  {
    id: uuidv4(),
    image: vietnamese,
    title: 'Vietnamese Chicken Curry',
    price: 27.99,
    characteristic: ['chicken'],
    cuisine: ['vietnamese'],
    ingredients: [
      '1 lb chicken, cut into pieces',
      '1 can (14 oz) coconut milk',
      '2 tablespoons Vietnamese curry powder',
      '2 potatoes, peeled and cubed',
      '1 onion, sliced',
      '1 tablespoon fish sauce',
      '1 tablespoon sugar',
      '1 tablespoon vegetable oil',
      'Fresh cilantro for garnish',
    ],
    complexity: 'easy',
    recipe:
      'In a pot, heat vegetable oil and sauté red curry paste until fragrant.' +
      'Add chicken and cook until it turn brown.' +
      'Pour in coconut milk, fish sauce, and brown sugar. Stir well.' +
      'Add mixed vegetables and simmer until they are tender.' +
      'Serve hot, garnished with fresh cilantro.',
    description:
      'A bowl full of light, brothy curry with a golden hue!! Tender chunks of chicken, aromatic spices, some veggies in a luscious coconut milk base infused with lemon grass, garlic and fish sauce. How can that not be delicious?Now you have my attention my friends. Thai Cà Ri Gà, or Vietnamese Chicken Curry, for you!! This curry is a perfect example of the intricate balance of flavors that Vietnamese cuisine is famous for.',
  },
  {
    id: uuidv4(),
    image: wonton,
    title: 'Wonton Soup',
    price: 25.99,
    characteristic: ['spicy', 'pork', 'chicken', 'soup'],
    cuisine: ['chinese'],
    ingredients: [
      '1/2 lb ground pork',
      '1 cup shrimp, chopped',
      '2 tablespoons soy sauce',
      '1 tablespoon sesame oil',
      '1 teaspoon ginger, minced',
      'Wonton wrappers',
      '4 cups chicken broth',
      'Bok choy or spinach leaves',
      'Green onions for garnish',
    ],
    complexity: 'complex',
    recipe:
      'In a bowl, mix ground pork, chopped shrimp, soy sauce, sesame oil, and minced ginger.' +
      'Place a small amount of filling in the center of each wonton wrapper. Fold and seal.' +
      'In a pot, bring chicken broth to a simmer.' +
      'Add wontons to the broth and cook until they float to the surface.' +
      'Add bok choy or spinach leaves and cook until wilted.' +
      'Serve hot, garnished with sliced green onions.',
    description:
      'A 15 minute soup with classic Chinese flavors, Wonton Soup is meant to be simmered quick and easy on some chilly winter night, or whenever those Chinese cravings hit hard.You’ll be coming back to this one!',
  },
  {
    id: uuidv4(),
    image: boLuc,
    title: 'Bò Lúc Lắc',
    price: 24.99,
    characteristic: ['rice', 'beef'],
    cuisine: ['vietnamese'],
    ingredients: [
      '1 lb beef tenderloin, cubed',
      '2 tablespoons soy sauce',
      '1 tablespoon oyster sauce',
      '1 tablespoon fish sauce',
      '1 tablespoon sugar',
      '2 cloves garlic, minced',
      '1 tablespoon vegetable oil',
      '1 red onion, sliced',
      'Watercress or lettuce leaves for serving',
      'Sliced tomatoes and cucumbers for garnish',
    ],
    complexity: 'complex',
    recipe:
      'In a bowl, mix cubed beef with soy sauce, oyster sauce, fish sauce, sugar, and minced garlic.' +
      'Heat vegetable oil in a pan over high heat.' +
      'Add marinated beef and cook until browned on all sides.' +
      'Add sliced red onion to the pan and stir-fry until softened.' +
      'Serve Bo Luc Lac over watercress or lettuce leaves, garnished with sliced tomatoes and cucumbers.',
    description:
      'Let’s shake up your night with our Bo Luc Lac!! Yes, it’s in the name. This popular Vietnamese shaking beef is a beloved stir fry dish that comes sizzling hot to the table. Bo Luc Lac could be your salad appetizer over a bed of lettuce or watercress with fresh tomatoes and cucumber, or it can be a complete meal with their favorite red tomato rice and fried eggs.',
  },
];
