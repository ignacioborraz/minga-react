/* eslint-disable react/prop-types */
import { Link as Anchor,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ModalManga from "../pages/MangaEdit";
import manga_actions from "../store/actions/mangas";
import { useState } from "react";
const { destroy_manga } = manga_actions;

export default function CardEditManga({ manga }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [show,setShow] = useState(false)
  return (
    <div className="bg-white w-[320px] h-[160px] lg:w-[420px] lg:h-[210px] m-3 flex justify-between items-center rounded-lg drop-shadow-md">
      <span
        className="w-2 h-[120px] lg:h-[160px] me-2"
        style={{ backgroundColor: manga.category_id.color }}
      />
      <div className="flex flex-col justify-between self-stretch py-4">
        <div className="flex">
          <Anchor to={`/${manga._id}/chapter-form`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[20px] h-[20px] rounded-full m-1 p-0 border-solid border-2 border-black text-black hover:drop-shadow-xl cursor-pointer"
              style={{ display: manga.display }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Anchor>
          <Anchor to={`/${manga._id}/chapter-form`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[20px] h-[20px] rounded-full m-1 p-0 border-solid border-2 border-black text-black hover:drop-shadow-xl cursor-pointer"
              style={{ display: manga.display }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </Anchor>
        </div>
        <div className="flex-grow">
          <p className="text-[18px] lg:text-[24px] font-bold text-start font-montserrat">
            {manga.title}
          </p>
          <p
            className="text-[14px] lg:text-[20px] font-bold text-start font-montserrat"
            style={{ color: manga.category_id.color }}
          >
            {manga.category_id.name}
          </p>
        </div>
        <div className="flex">
          <span
            className="rounded-full text-[12px] w-[70px] h-[25px] flex justify-center items-center mx-3 text-[#D1FBF0] bg-[#00BA88] hover:drop-shadow-xl cursor-pointer"
            style={{ display: manga.display }}
            onClick={()=> navigate('/edit-manga/'+manga._id)}
          >
            EDIT
          </span>
          <span
            className="rounded-full text-[12px] w-[70px] h-[25px] flex justify-center items-center mx-3 text-[#FBDDDC] bg-[#EE8380] hover:drop-shadow-xl cursor-pointer"
            style={{ display: manga.display }}
            onClick={() =>
              dispatch(
                destroy_manga({
                  id: manga._id,
                  category: manga.category_id.name,
                })
              )
            }
          >
            DELETE
          </span>
        </div>
      </div>
      {manga.to ? (
        <Anchor to={manga.to}>
          <img
            className="w-[140px] h-[160px] lg:w-[190px] lg:h-[210px] object-cover rounded-[50%_0.5rem_0.5rem_50%] hover:drop-shadow-xl cursor-pointer"
            src={manga.cover_photo}
            alt={manga.title}
          />
        </Anchor>
      ) : (
        <Anchor to={`/manga/${manga._id}/1`}>
          <img
            className="w-[140px] h-[160px] lg:w-[190px] lg:h-[210px] object-cover rounded-[50%_0.5rem_0.5rem_50%] hover:drop-shadow-xl cursor-pointer"
            src={manga.cover_photo}
            alt={manga.title}
          />
        </Anchor>
      )}
    </div>
  );
}
