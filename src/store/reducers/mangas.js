import { createReducer, current } from "@reduxjs/toolkit";
import actions from "../actions/mangas";

const {
  save_mangas_me,
  save_checks,
  save_text,
  save_manga,
  save_my_mangas,
  update_manga,
  destroy_manga,
} = actions;

const initial_state = {
  logo: "",
  all: [],
  news: [],
  olds: [],
  checks: [],
  text: "",
  current_manga: {},
  mangas_by_cat: [],
  categories: [],
};

const reducer = createReducer(initial_state, (build) =>
  build
    .addCase(save_mangas_me, (state, action) => {
      let new_state = { ...state };
      action.payload.logo && (new_state.logo = action.payload.logo);
      action.payload.all && (new_state.all = action.payload.all);
      action.payload.news && (new_state.news = action.payload.news);
      action.payload.olds && (new_state.olds = action.payload.olds);
      return new_state;
    })
    .addCase(save_checks, (state, action) => {
      let new_state = { ...state, checks: action.payload.checks };
      return new_state;
    })
    .addCase(save_text, (state, action) => {
      let new_state = { ...state, text: action.payload.text };
      return new_state;
    })
    .addCase(save_manga, (state, action) => {
      let new_state = { ...state, current_manga: action.payload.current_manga };
      return new_state;
    })
    .addCase(save_my_mangas.fulfilled, (state, action) => {
      let categories = Object.keys(action.payload.mangas_by_cat).map((each) =>
        action.payload.categories.find((cat) => cat.name === each)
      );
      let new_state = {
        ...state,
        mangas_by_cat: Object.entries(action.payload.mangas_by_cat),
        categories,
      };
      return new_state;
    })
    .addCase(update_manga.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        //mangas_by_cat: state.mangas_by_cat.map((each) => {
        mangas_by_cat: current(state).mangas_by_cat.map((each) => {
          //para poder consologuear el estado "corriente" en lugar del proxy
          if (each[0] === action.payload.category) {
            let filtered = each[1].map((manga) => {
              if (manga._id === action.payload.id) {
                return action.payload.modified;
              }
              return manga;
            });
            return [each[0], filtered];
          }
          return each;
        }),
      };
      console.log(new_state);
      return new_state;
    })
    .addCase(destroy_manga.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        //mangas_by_cat: current(state).mangas_by_cat.map((each) => { //para poder consologuear el estado "corriente" en lugar del proxy
        mangas_by_cat: state.mangas_by_cat.map((each) => {
          if (each[0] === action.payload.category) {
            let filtered = each[1].filter(
              (manga) => manga._id !== action.payload.id
            );
            return [each[0], filtered];
          }
          return each;
        }),
      };
      //console.log(new_state);
      return new_state;
    })
);

export default reducer;
