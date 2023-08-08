import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import manga_actions from "../store/actions/mangas";
import CardChapter from "../components/CardChapter";
import { useNavigate, useParams } from "react-router-dom";
const { save_manga } = manga_actions;

export default function MangaDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const current_manga = useSelector((store) => store.mangas.current_manga);
  const [chapters, setChapters] = useState([]);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios(`${apiUrl}/mangas/${id}`, headers())
      .then((res) => {
        dispatch(save_manga({ current_manga: res.data.manga }));
      })
      .catch((err) => console.log(err));
    axios(`${apiUrl}/chapters?manga_id=${id}&page=${page}`, headers())
      .then((res) => {
        //console.log(res.data);
        setChapters(res.data.chapters);
        setNextPage(res.data.next);
        setPrevPage(res.data.prev);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  function handle_prev() {
    setPage(prevPage);
    setReload(!reload);
    navigate(`/manga/${id}/${prevPage}`);
  }
  function handle_next() {
    setPage(nextPage);
    setReload(!reload);
    navigate(`/manga/${id}/${nextPage}`);
  }
  return (
    <main className="flex flex-col w-full min-h-screen items-center justify-start pt-20">
      <img
        className="w-[320px] md:w-[720px] lg:w-11/12 2xl:w-[1375px] h-[320px] lg:h-[320px] object-cover rounded-lg"
        src={current_manga.cover_photo}
        alt={current_manga._id}
      />
      <h3 className="w-[320px] md:w-[540px] text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-bold text-center font-montserrat my-[20px] lg:my-[30px]">
        {current_manga.title}
      </h3>
      <div className="flex justify-between px-4 w-[320px] md:w-[540px] mb-[20px]">
        <span
          className="rounded-full text-[20pxpx] h-[35px] flex justify-center items-center mx-3 px-3"
          style={{
            color: current_manga.category_id?.color,
            backgroundColor: current_manga.category_id?.hover,
          }}
        >
          {current_manga.category_id?.name}
        </span>
        <span className="text-[20px]">{current_manga.author_id?.name}</span>
      </div>
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center w-[320px] md:w-[540px] h-[44px] rounded-full bg-white mx-3 hover:drop-shadow-xl cursor-pointer"
      >
        {show ? (
          <>
            <span className="w-[156px] md:w-[266px] h-[40px] mx-[1px] rounded-full bg-white flex justify-center items-center">
              Description
            </span>
            <span className="w-[156px] md:w-[266px] h-[40px] mx-[1px] rounded-full text-white bg-[#F472B6] flex justify-center items-center">
              Chapters
            </span>
          </>
        ) : (
          <>
            <span className="w-[156px] md:w-[266px] h-[40px] mx-[1px] rounded-full text-white bg-[#F472B6] flex justify-center items-center">
              Description
            </span>
            <span className="w-[156px] md:w-[266px] h-[40px] mx-[1px] rounded-full bg-white flex justify-center items-center">
              Chapters
            </span>
          </>
        )}
      </div>
      <div className="mt-[20px]">
        {show ? (
          <>
            {chapters.map((each) => (
              <CardChapter key={each._id} chapter={each} />
            ))}
            <form className="w-full flex justify-center my-5">
              {prevPage ? (
                <input
                  onClick={handle_prev}
                  type="button"
                  value="prev"
                  className="w-[100px] h-[50px] pe-[12px] me-[12px] text-xl text-white flex justify-end items-center rounded-[50%_0.5rem_0.5rem_50%] bg-[#F472B6] hover:drop-shadow-xl"
                />
              ) : (
                <span className="w-[100px]" />
              )}
              {nextPage ? (
                <input
                  onClick={handle_next}
                  type="button"
                  value="next"
                  className="w-[100px] h-[50px] ps-[12px] ms-[12px] text-xl text-white flex justify-start items-center rounded-[0.5rem_50%_50%_0.5rem] bg-[#F472B6] hover:drop-shadow-xl"
                />
              ) : (
                <span className="w-[100px]" />
              )}
            </form>
          </>
        ) : (
          <p className="w-[320px] md:w-[540px] text-[16px] text-justify mb-[20px]">
            {current_manga.description}
          </p>
        )}
      </div>
    </main>
  );
}
