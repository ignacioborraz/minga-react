import { createAction } from "@reduxjs/toolkit";

const save_chapter = createAction("save_mangas_me", (data) => {
  return {
    payload: {
      number: data.number,
      title: data.title
    },
  };
});

const actions = { save_chapter };
export default actions;
