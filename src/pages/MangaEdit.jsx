import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import Swal from "sweetalert2";
import headers from "../utils/headers";
import ButtonForm from "../components/ButtonForm";
import { useDispatch } from "react-redux";
import manga_actions from "../store/actions/mangas";
const { update_manga } = manga_actions;

export default function MangaEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const title = useRef();
  const photo = useRef();
  const category = useRef();
  const description = useRef();
  const [manga, setManga] = useState({});
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios(apiUrl + "/mangas/" + id, headers())
      .then((res) => {
        //console.log(res)
        setManga(res.data.manga);
      })
      .catch((err) => console.log(err));
    axios(apiUrl + "/categories")
      .then((res) => {
        //console.log(res)
        setCategories(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = () => {
    let cat = categories.find((each) => each._id === category.current.value);
    let data = {
      title: title.current.value?.trim(),
      category_id: cat?._id,
      cover_photo: photo.current.value?.trim(),
      description: description.current.value?.trim(),
    };
    //console.log(data);
    Swal.fire({
      title: "Do you want to update the changes?",
      showCancelButton: true,
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          dispatch(
            update_manga({ id, data, category: manga.category_id.name })
          );
          Swal.fire({
            icon: "success",
            text: "Manga Updated!",
          });
          navigate("/mymangas");
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
    });
  };

  return (
    <main className="flex w-full md:w-11/12 2xl:w-[1375px] min-h-screen items-center justify-between">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
        <p className="font-semibold text-[32px] text-center">Update a Manga!</p>
        <form className="flex flex-col my-[25px]">
          <input
            ref={title}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            defaultValue={manga.title}
          />
          <input
            ref={photo}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="url"
            name="photo"
            id="photo"
            placeholder="Url photo"
            defaultValue={manga.cover_photo}
          />
          <select
            defaultValue={manga.category_id?.name}
            ref={category}
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            name="categories"
          >
            <option disabled>Category</option>
            {categories.map((each) =>
              manga.category_id?.name === each.name ? (
                <option key={each._id} value={each._id} selected>
                  {each.name}
                </option>
              ) : (
                <option key={each._id} value={each._id}>
                  {each.name}
                </option>
              )
            )}
          </select>
          <input
            ref={description}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            defaultValue={manga.description}
          />
          <ButtonForm onClick={update} value="update!" />
          <ButtonForm
            onClick={() => navigate("/mymangas")}
            value="cancel!"
            color="gray"
          />
        </form>
      </div>
      <img
        className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="/img/edits.jpg"
        alt="edits"
      />
    </main>
  );
}
