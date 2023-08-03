import { createAction } from "@reduxjs/toolkit";

const save_mangas_me = createAction("save_mangas_me", (data) => {
  return {
    payload: {
      logo: data.logo,
      all: data.all,
      news: data.news,
      olds: data.olds,
    },
  };
});

const save_checks = createAction("save_checks", (data) => {
  return { payload: { checks: data.checks } };
});

const save_text = createAction("save_text", (data) => {
  return { payload: { text: data.text } };
});

const actions = { save_mangas_me, save_checks, save_text };
export default actions;
