import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import manga_actions from "../store/actions/mangas";
import CardManga from "../components/CardManga";
const { save_checks,save_text } = manga_actions;

export default function Mangas() {
  const dispatch = useDispatch();
  const checks = useSelector((store) => store.mangas.checks);
  const text = useSelector((store) => store.mangas.text);
	const [mangas,setMangas] = useState([])
	const [nextPage,setNextPage] = useState([])
	const [prevPage,setPrevPage] = useState([])
  useEffect(() => {
    axios(apiUrl + "/mangas", headers())
      .then((res) => {
				console.log(res.data)
				setMangas(res.data.mangas)
				setNextPage(res.data.next)
				setPrevPage(res.data.prev)
			})
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="flex flex-col pt-20 w-full min-h-screen items-center justify-start bg-mangas bg-cover bg-top">
			<input type="text" name="" id="" />
			<div className="rounded-[60px_60px_0_0] w-full md:w-11/12 2xl:w-[1375px] ">
				{mangas.map(each=> <CardManga key={each._id} manga={each}/>)}
			</div>
    </main>
  );
}
