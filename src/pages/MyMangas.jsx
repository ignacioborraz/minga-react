import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import manga_actions from "../store/actions/mangas";
import CardEditManga from "../components/CardEditManga";
import { useNavigate } from "react-router-dom";
const { save_checks, save_my_mangas } = manga_actions;

export default function MyMangas() {
  const dispatch = useDispatch();
  const selectedCat = useSelector((store) => store.mangas.checks);
  let mangas_by_cat = useSelector((store) => store.mangas.mangas_by_cat);
  //console.log(mangas_by_cat);
  let categories = useSelector((store) => store.mangas.categories);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const current_checks = useRef();
  useEffect(() => {
    dispatch(save_my_mangas({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handle_checks() {
    let checkeds = Object.values(current_checks.current)
      .filter((each) => each.checked)
      .map((each) => each.id);
    if (checkeds[0] === "new") {
      dispatch(save_checks({ checks: [] }));
    } else {
      dispatch(save_checks({ checks: checkeds }));
    }
    setReload(!reload);
    //navigate("/mangas/1");
  }
  let selectCat = {
    _id: "select",
    title: "CREATE",
    cover_photo: "/img/not_found.jpeg",
    category_id: {
      name: "a new manga!",
      color: "black",
      hover: "gray",
    },
    display: "none",
    to: "/manga-form",
  };
  return (
    <main className="flex flex-col w-full min-h-screen items-center justify-start">
      <span className="w-full h-[400px] lg:h-[540px] bg-mangas bg-cover bg-top grayscale-70 absolute -z-10" />
      <h3 className="text-[36px] lg:text-[64px] text-white font-bold font-montserrat mt-[140px] lg:mt-[220px]">
        Manage my Mangas
      </h3>
      <div className="flex-grow rounded-[40px_40px_0_0] w-full md:w-[720px] lg:w-11/12 2xl:w-[1375px] flex flex-col justify-start items-center bg-white">
        <form className="w-full flex justify-center my-5" ref={current_checks}>
          {selectedCat.includes("new") || selectedCat.length === 0 ? (
            <label className="rounded-full text-[14px] w-[70px] h-[35px] flex justify-center items-center mx-3 bg-gray-700 text-gray-300">
              new
              <input
                onClick={handle_checks}
                type="radio"
                className="hidden"
                name="category"
                id="new"
              />
            </label>
          ) : (
            <label className="rounded-full text-[14px] w-[70px] h-[35px] flex justify-center items-center mx-3 bg-gray-300 text-gray-700">
              new
              <input
                onClick={handle_checks}
                type="radio"
                className="hidden"
                name="category"
                id="new"
              />
            </label>
          )}
          {categories?.map((each) =>
            selectedCat.includes(each.name) ? (
              <label
                className="rounded-full text-[14px] w-[70px] h-[35px] flex justify-center items-center mx-3"
                key={each.name}
                style={{ color: each.hover, backgroundColor: each.color }}
              >
                {each.name}
                <input
                  onClick={handle_checks}
                  type="radio"
                  className="hidden"
                  name="category"
                  id={each.name}
                />
              </label>
            ) : (
              <label
                className="rounded-full text-[14px] w-[70px] h-[35px] flex justify-center items-center mx-3"
                key={each.name}
                style={{ color: each.color, backgroundColor: each.hover }}
              >
                {each.name}
                <input
                  onClick={handle_checks}
                  type="radio"
                  className="hidden"
                  name="category"
                  id={each.name}
                />
              </label>
            )
          )}
        </form>
        <section className="flex flex-grow flex-wrap justify-center items-start">
          {selectedCat.length === 0 && <CardEditManga manga={selectCat} />}
          {mangas_by_cat.map(
            (each) =>
              each[0] === selectedCat[0] &&
              each[1].map((card) => (
                <CardEditManga key={card._id} manga={card} />
              ))
          )}
        </section>
      </div>
    </main>
  );
}
