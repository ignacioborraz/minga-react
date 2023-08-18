import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import { useNavigate, useParams } from "react-router-dom";
import ArrowPage from "../components/ArrowPage";
import chapter_actions from "../store/actions/chapters";
const { save_chapter } = chapter_actions;

export default function Page() {
  const { id, page } = useParams();
  //id: parámetro con el id del capitulo a leer
  //page: parámetro con la página actual
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(Number(page));
  //currentPage: estado para guardar la pagina actual
  //setCurrentPage: funcion seteadora del estado
  const [chapterPages, setChapterPages] = useState([]);
  //chapterPages: estado para guardar las paginas del capitulo
  //setChapterPages: funcion seteadora del estado
  const [nextChapter, setNextChapter] = useState(null);
  //nextChapter: estado para guardar el id del capitulo siguiente
  //setNextChapter: funcion seteadora del estado
  const [reload, setReload] = useState(false);
  //reload: estado para ejecutar el efecto y "recargar" la pagina cada vez que sea necesario
  //setReload: funcion seteadora del estado
  const [order, setOrder] = useState(0);
  //order: estado para guardar el order del capitulo
  //setOrder: funcion seteadora del estado
  const [manga, setManga] = useState(false);
  //manga: estado para guardar el id del manga
  //setManga: funcion seteadora del estado
  const navigate = useNavigate();
  //hook necesario para generar eventos que redireccionen
  useEffect(() => {
    //efecto necesario para controlar el fetcheo del endpoint de chapters
    axios(`${apiUrl}/chapters/${nextChapter || id}`, headers())
      .then((res) => {
        //console.log(res.data);
        setChapterPages(res.data.pages);
        setNextChapter(res.data.next_id);
        setOrder(res.data.order);
        setManga(res.data.manga_id);
        dispatch(save_chapter({ number: res.data.order, title:res.data.title}))
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  function handle_prev() {
    if (Number(page) + 1 === 1) {
      navigate(`/manga/${manga}/1`);
    } else {
      setCurrentPage(currentPage - 1);
      navigate(`/chapter/${id}/${currentPage - 1}`);
    }
  }
  function handle_next() {
    if (Number(page) + 1 === chapterPages.length) {
      setCurrentPage(0);
      navigate(`/chapter/${nextChapter}/0`);
      setReload(!reload);
    } else {
      setCurrentPage(currentPage + 1);
      navigate(`/chapter/${id}/${currentPage + 1}`);
    }
  }
  const d_left =
    "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  const d_right =
    "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  return (
    <main className="flex flex-col w-full md:w-11/12 2xl:w-[1375px] relative min-h-screen items-center justify-start pt-20">
      <ArrowPage
        d={d_left}
        onClick={handle_prev}
        position={{ left: 0, justifyContent: "flex-start" }}
      />
      <img
        className="object-contain h-screen py-20 absolute top-0 m-auto -z-10"
        src={chapterPages[page]}
        alt={"chapter #"+order}
      />
      <ArrowPage
        d={d_right}
        onClick={handle_next}
        position={{ right: 0, justifyContent: "flex-end" }}
      />
    </main>
  );
}
