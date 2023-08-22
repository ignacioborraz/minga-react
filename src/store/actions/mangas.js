import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
import headers from "../../utils/headers";

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

const save_manga = createAction("save_manga", (data) => {
  return { payload: { current_manga: data.current_manga } };
});

const save_my_mangas = createAsyncThunk("save_my_mangas", async () => {
  try {
    const res = await axios(`${apiUrl}/mangas/me`, headers());
    const cat = await axios(`${apiUrl}/categories`);
    return { mangas_by_cat: res.data.response, categories: cat.data.response };
  } catch (error) {
    console.log(error);
    return { mangas_by_cat: {} };
  }
});

const update_manga = createAsyncThunk(
  "update_manga",
  async ({ id, data, category }) => {
    try {
      let modified = await axios.put(`${apiUrl}/mangas/${id}`, data, headers());
      return { id, modified: modified.data.response, category };
    } catch (error) {
      console.log(error);
      return { id: "" };
    }
  }
);

const destroy_manga = createAsyncThunk(
  "destroy_manga",
  async ({ id, category }) => {
    try {
      await axios.delete(`${apiUrl}/mangas/${id}`, headers());
      return { id, category };
    } catch (error) {
      console.log(error);
      return { id: "" };
    }
  }
);

const actions = {
  save_mangas_me,
  save_checks,
  save_text,
  save_manga,
  save_my_mangas,
  update_manga,
  destroy_manga,
};
export default actions;
