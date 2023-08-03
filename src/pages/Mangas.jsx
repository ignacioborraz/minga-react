import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import manga_actions from "../store/actions/mangas";
import CardManga from "../components/CardManga";
import { useNavigate } from "react-router-dom";
const { save_checks, save_text } = manga_actions;

export default function Mangas() {
  const dispatch = useDispatch();
  const checks = useSelector((store) => store.mangas.checks);
  const text = useSelector((store) => store.mangas.text);
  const [categories, setCategories] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [page, setPage] = useState([]);
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const current_text = useRef();
  const current_checks = useRef();
  useEffect(() => {
    axios(`${apiUrl}/categories`, headers())
      .then((res) => setCategories(res.data.response))
      .catch((err) => console.log(err));
    axios(`${apiUrl}/mangas`, headers())
      .then((res) => {
        setMangas(res.data.mangas);
        setNextPage(res.data.next);
        setPrevPage(res.data.prev);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    axios(
      `${apiUrl}/mangas?page=${page}&title=${text}&category=${checks.join(
        ","
      )}`,
      headers()
    )
      .then((res) => {
        //console.log(res.data);
        setMangas(res.data.mangas);
        setNextPage(res.data.next);
        setPrevPage(res.data.prev);
      })
      .catch((err) => {
				console.log(err)
				let notFound = [{
					_id: "notFound",
					title:"404",
					cover_photo: "/img/not_found.jpeg",
					category_id: {
						name: "Not Found",
						color: "black",
						hover: "gray"
					}
				}]
					setMangas(notFound);
			});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  function handle_text() {
    dispatch(save_text({ text: current_text.current.value }));
    setPage(1);
    setReload(!reload);
    navigate("/mangas/1");
  }
  function handle_checks() {
    let checkeds = Object.values(current_checks.current)
      .filter((each) => each.checked)
      .map((each) => each.id);
    dispatch(save_checks({ checks: checkeds }));
    setPage(1);
    setReload(!reload);
    navigate("/mangas/1");
  }
  function handle_prev() {
    setPage(prevPage);
    setReload(!reload);
    navigate("/mangas/" + prevPage);
  }
  function handle_next() {
    setPage(nextPage);
    setReload(!reload);
    navigate("/mangas/" + nextPage);
  }
  return (
    <main className="flex flex-col w-full min-h-screen items-center justify-start">
      <span className="w-full h-[400px] lg:h-[540px] bg-mangas bg-cover bg-top grayscale-70 absolute -z-10" />
      <h3 className="text-[36px] lg:text-[64px] text-white font-bold font-montserrat mt-[140px] lg:mt-[220px]">
        Mangas
      </h3>
      <input
        className="rounded-full text-[16px] w-[320px] p-3 my-[30px] lg:my-[40px] text-center"
        type="text"
        name="text"
        id="text"
        ref={current_text}
        defaultValue={text}
        placeholder="Find your manga here!"
        onKeyUp={handle_text}
      />
      <div className="flex-grow rounded-[40px_40px_0_0] w-full md:w-[720px] lg:w-11/12 2xl:w-[1375px] flex flex-col justify-start items-center bg-white">
        <form className="w-full flex justify-center my-5" ref={current_checks}>
          {categories.map((each) => (
              checks.includes(each._id) ? (
                <label
                  className="rounded-full text-[14px] w-[70px] h-[35px] flex justify-center items-center mx-3"
                  key={each._id}
                  style={{ color: each.hover, backgroundColor: each.color }}
                >
                  {each.name}
                  <input
                    onClick={handle_checks}
                    type="checkbox"
                    className="hidden"
                    name={each._id}
                    id={each._id}
                  />
                </label>
              ) : (
                <label
                  className="rounded-full text-[14px] w-[70px] h-[35px] flex justify-center items-center mx-3"
                  key={each._id}
                  style={{ color: each.color, backgroundColor: each.hover }}
                >
                  {each.name}
                  <input
                    onClick={handle_checks}
                    type="checkbox"
                    className="hidden"
                    name={each._id}
                    id={each._id}
                  />
                </label>
              )
          ))}
        </form>
				<section className="flex flex-grow flex-wrap justify-center items-start">
					{mangas.map((each) => (
						<CardManga key={each._id} manga={each} />
					))}
				</section>
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
      </div>
    </main>
  );
}
