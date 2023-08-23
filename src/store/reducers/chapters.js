import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/chapters";

const { save_chapter, save_chapters, update_chapter, destroy_chapter } =
  actions;

const initial_state = {
  number: "",
  title: "",
  chapters: []
};

const reducer = createReducer(initial_state, (build) =>
  build.addCase(save_chapter, (state, action) => {
    let new_state = { ...state };
    action.payload.number && (new_state.number = action.payload.number);
    action.payload.title && (new_state.title = action.payload.title);
    return new_state;
  })
  .addCase(save_chapters.fulfilled, (state, action) => {
    let new_state = {
      ...state,
      chapters: action.payload.chapters
    };
    //console.log(new_state);
    return new_state;
  })
);



export default reducer;
