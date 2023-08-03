import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import Arrow from "./Arrow";
import { useSelector, useDispatch } from "react-redux";
import category_actions from "../store/actions/categories";

const { save_categories, save_current_category } = category_actions;

export default function Carousel() {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories.categories);
  //console.log(categories)
  const counter = useSelector((store) => store.categories.current_category);
  //console.log(counter)
  useEffect(
    () => {
      if (categories.length === 0) {
        axios(apiUrl + "/categories")
          .then((res) => {
            //console.log(res)
            //setCategories(res.data.response)
            dispatch(save_categories({ categories: res.data.response }));
          })
          .catch((err) => console.log(err));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  let next = () =>
    counter !== categories.length - 1
      ? dispatch(save_current_category({ current_category: counter + 1 }))
      : dispatch(save_current_category({ current_category: 0 }));
  let prev = () =>
    counter !== 0
      ? dispatch(save_current_category({ current_category: counter - 1 }))
      : dispatch(
          save_current_category({ current_category: categories.length - 1 })
        );

  const d_left =
    "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  const d_right =
    "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";

  return (
    <div
      className="items-center justify-between rounded-lg mt-5 hidden px-5 md:flex md:h-56 md:w-full bg-gradient-to-r from-[#F9A8D4] to-[#F472B6]" /* style={{ backgroundColor: categories[counter]?.hover }} */
    >
      <Arrow d={d_left} onClick={prev} />
      <img
        className="object-cover w-[180px] lg:w-[200px] self-end "
        src={categories[counter]?.character_photo}
      />
      <img
        className="object-cover w-[150px] mb-12 self-end"
        src={categories[counter]?.cover_photo}
      />
      <div className="w-[200px] lg:w-[300px] xl:w-[450px] text-l p-2 text-white xl:px-10">
        <h3 className="text-2xl">{categories[counter]?.name.toUpperCase()}</h3>
        <p className="text-xs xl:text-sm">{categories[counter]?.description}</p>
      </div>
      <Arrow d={d_right} onClick={next} />
    </div>
  );
}
