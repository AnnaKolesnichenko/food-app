import { createSlice } from "@reduxjs/toolkit";
import summer from "../data/deals/summermenu.jpg";
import coke from "../data/deals/sprite.jpg";
import roll from "../data/deals/sushi.jpg";
import salads from "../data/deals/s.jpg";

const initialState = {
  deals: [
    {
      title: "Summer Specials: Savor the Flavors!",
      image: summer,
      link: "/",
      about:
        "Dive into the season with absolutely special menus! Enjoy your favorite flavours. Make your summer tasty, light and fully enjoyable with our Summer Specials created especially for you! ",
    },
    // {
    //   title: "Deal of the Day: Taste the Best for Less!",
    //   image: "",
    //   about:
    //     "Don't miss out on today's exclusive offer! Enjoy premium dishes at a fraction of the price. Order now and treat yourself to a daily dose of deliciousness! ",
    // },
    {
      title: "Thirst Quencher Special: Buy 2, Get 1 Free Drink! ",
      image: coke,
      link: "/",
      about:
        "Refresh your day with our unbeatable offer! Order any two drinks and receive a third one on us. Stay hydrated while saving big—because every sip counts!",
    },
    {
      title: "Rolls Bonanza: Buy 4, Get 1 Free Set!",
      image: roll,
      link: "bonanza",
      about:
        "Indulge in our irresistible deal! Purchase four sets of rolls and enjoy an extra set on the house. Elevate your meal with a complimentary serving—because great taste deserves more!",
    },
    {
      title: "Splash of Greens!",
      image: salads,
      link: "/fast-food/salads",
      about:
        "Indulge in our irresistible deal! Purchase four sets of rolls and enjoy an extra set on the house. Elevate your meal with a complimentary serving—because great taste deserves more!",
    },
  ],
};

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    setDeals: (state, action) => {
      return action.payload;
    },
    addDeal: (state, action) => {
      state.push(action.payload);
    },
    removeDeal: (state, action) => {
      return state.filter((deal) => deal.title !== action.payload);
    },
  },
});

export const { setDeals, addDeal, removeDeal } = dealsSlice.actions;

export const dealsReducer = dealsSlice.reducer;
