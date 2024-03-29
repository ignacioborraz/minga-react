import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
import headers from "../../utils/headers";

const save_chapter = createAction("save_mangas_me", (data) => {
  return {
    payload: {
      number: data.number,
      title: data.title,
    },
  };
});

const save_chapters = createAsyncThunk("save_chapters", async (obj) => {
  try {
    const res = await axios(
      `${apiUrl}/chapters/me?manga_id=${obj.manga_id}`,
      headers()
    );
    //console.log(res.data.response);
    return { chapters: res.data.response };
  } catch (error) {
    console.log(error);
    return { chapters: [] };
  }
});

const update_chapter = createAsyncThunk(
  "update_chapter",
  async ({ manga_id, order, data }) => {
    try {
      console.log({ manga_id, order, data });
      let modified = await axios.put(
        `${apiUrl}/chapters?=manga_id=${manga_id}&order=${order}`,
        data,
        headers()
      );
      console.log(modified);
      return { id, modified: modified.data.response };
    } catch (error) {
      console.log(error);
      return { id, modified: modified.data.response };
    }
  }
);

const destroy_chapter = createAsyncThunk(
  "destroy_chapter",
  async ({ id, category }) => {
    try {
      await axios.delete(`${apiUrl}/chapters/${id}`, headers());
      return { id, category };
    } catch (error) {
      console.log(error);
      return { id: "" };
    }
  }
);

const actions = {
  save_chapter,
  save_chapters,
  update_chapter,
  destroy_chapter,
};
export default actions;
