import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import Swal from "sweetalert2";
import headers from "../utils/headers";
import ButtonForm from "../components/ButtonForm";
import { useDispatch, useSelector } from "react-redux";
import chapter_actions from "../store/actions/chapters";
const { save_chapters, update_chapter } = chapter_actions;

export default function ChaptersEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useRef();
  const property = useRef();
  const data = useRef();
  const [manga, setManga] = useState({});
  const [orderOfChapter, setOrderOfChapter] = useState(0);
  const chapters = useSelector((store) => store.chapters.chapters);
  useEffect(() => {
    axios(apiUrl + "/mangas/" + id, headers())
      .then((res) => {
        //console.log(res)
        setManga(res.data.manga);
      })
      .catch((err) => console.log(err));
    dispatch(save_chapters({ manga_id: id }));
  }, []);

  const update = () => {
    let edit_data = {};
    edit_data[property.current.value] = data.current.value;
    console.log(edit_data);
    //console.log(order.current.value);
    dispatch(
      update_chapter({ manga_id: id, order: order.current.value, data: edit_data })
    );
    /* Swal.fire({
      title: "Do you want to update the changes?",
      showCancelButton: true,
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          dispatch(
            update_chapter({ id, data, category: manga.category_id.name })
          );
          Swal.fire({
            icon: "success",
            text: "Chapter Updated!",
          });
        } catch (err) {
          console.log(err);
          Swal.fire({
            icon: "error",
            html: err.response.data.messages
              .map((each) => `<p>${each}</p>`)
              .join(""),
          });
        }
      }
    }); */
  };
  return (
    <main className="flex w-full md:w-11/12 2xl:w-[1375px] min-h-screen items-center justify-between">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
        <p className="font-semibold text-[32px] text-center">Update a Manga!</p>
        <form className="flex flex-col my-[25px]">
          <p className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F] flex items-center">
            {manga.title}
          </p>
          <select
            defaultValue="order"
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            name="order"
            ref={order}
            onChange={(event) => setOrderOfChapter(event.target.value)}
          >
            <option value="order" disabled>
              Select order to update
            </option>
            {chapters.map((each) => (
              <option value={each.order} key={each.order}>
                {each.order}
              </option>
            ))}
          </select>
          <select
            defaultValue="property"
            ref={property}
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            name="property"
          >
            <option value="property" disabled>
              Select property to update
            </option>
            <option value="title">Title</option>
            <option value="order">Order</option>
            <option value="cover_photo">Cover Photo</option>
            <option value="pages">Pages</option>
          </select>
          <input
            ref={data}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="data"
            id="data"
            placeholder="Type data to update"
          />
          <ButtonForm onClick={update} value="update!" />
          <ButtonForm
            onClick={() => navigate("/mymangas")}
            value="cancel!"
            color="gray"
          />
        </form>
      </div>
      <div className="hidden md:absolute md:top-0 md:right-0 h-screen w-[50%] md:flex md:flex-col md:justify-center md:items-center">
        <p>
          {chapters[orderOfChapter - 1]?.title
            ? `Chapter #${chapters[orderOfChapter - 1]?.order} - ${
                chapters[orderOfChapter - 1]?.title
              }`
            : manga.title}
        </p>
        <img
          className="h-4/5 w-4/5 object-cover"
          src={chapters[orderOfChapter - 1]?.cover_photo || manga.cover_photo}
          alt="edits"
        />
      </div>
    </main>
  );
}
