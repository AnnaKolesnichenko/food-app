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
    description: 'Delicious combination of seafood and oysetr sauce',
  },
  {
    id: uuidv4(),
    image: beefBulgogi,
    title: 'Beef Bulgogi',
    price: 22.77,
    characteristic: ['spicy', 'pork', 'beef'],
    cuisine: ['korean'],
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
    description:
      'Let’s shake up your night with our Bo Luc Lac!! Yes, it’s in the name. This popular Vietnamese shaking beef is a beloved stir fry dish that comes sizzling hot to the table. Bo Luc Lac could be your salad appetizer over a bed of lettuce or watercress with fresh tomatoes and cucumber, or it can be a complete meal with their favorite red tomato rice and fried eggs.',
  },
];
