import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/mangas";

const { save_mangas_me, save_checks, save_text } = actions;

const initial_state = {
  logo: "",
  all: [],
  news: [],
  olds: [],
  checks: [],
  text: "",
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
);

export default reducer;
