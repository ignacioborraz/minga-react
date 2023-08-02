import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import ProfileAuthor from "../components/ProfileAuthor";
import SwitchAuthor from "../components/SwitchAuthor";
import author_actions from "../store/actions/authors";
import manga_actions from "../store/actions/mangas";
const { save_profile } = author_actions;
const { save_mangas_me } = manga_actions;

export default function AuthorForm() {
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.authors.profile);
  const logo = useSelector((store) => store.mangas.logo);
  const all = useSelector((store) => store.mangas.all);
  const news = useSelector((store) => store.mangas.news);
  const olds = useSelector((store) => store.mangas.olds);
	const [showNews,setShowNews] = useState(true)
  console.log(olds);
  useEffect(() => {
    axios(apiUrl + "/authors/me", headers())
      .then((res) => dispatch(save_profile(res.data.profile)))
      .catch((err) => console.log(err));
    axios(apiUrl + "/mangas/news", headers())
      .then((res) => dispatch(save_mangas_me(res.data.response)))
      //.then((res) => console.log(res.data.response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="flex flex-col pt-20 w-full min-h-screen items-center justify-start">
      <ProfileAuthor
        photo={profile?.photo}
        name={profile?.name}
        last_name={profile?.last_name}
        city={profile?.city}
        country={profile?.country}
        date={profile?.date}
      />
			<div className="flex-grow flex flex-col justify-center items-center pt-4">
				{logo ? (
					<>
						<img src={apiUrl+logo} className="w-[300px] h-[300px]" />
						<span className="text-[18px] mt-4">Add some new mangas!</span>
					</>
				) : (
					all.length>0 ? (
						<SwitchAuthor mangas={all} />
					) : (
						<>
							<div className="flex">
								<span>news</span>
								<div onClick={()=>setShowNews(!showNews)} className="flex justify-between items-center w-[48px] h-[24px] rounded-full bg-[#12B28C] mx-3">
									{showNews ? (
										<>
											<span className="w-[20px] h-[20px] mx-[1px] rounded-full bg-white" />
											<span className="w-[20px] h-[20px] mx-[1px] rounded-full bg-[#12B28C]" />
										</>
									) : (
										<>
											<span className="w-[20px] h-[20px] mx-[1px] rounded-full bg-[#12B28C]" />
											<span className="w-[20px] h-[20px] mx-[1px] rounded-full bg-white" />
										</>
									)}
								</div>
								<span>olds</span>
							</div>
							{showNews ? (
								<SwitchAuthor mangas={news} />
							) : (
								<SwitchAuthor mangas={olds} />
							)}
						</>
					)
				)}
			</div>
    </main>
  );
}
