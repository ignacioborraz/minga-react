/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function CardManga({ manga }) {
  return (
    <Anchor to={`/manga/${manga._id}/1`} className="bg-white w-[320px] h-[160px] lg:w-[420px] lg:h-[210px] m-3 flex justify-between items-center rounded-lg drop-shadow-md hover:drop-shadow-xl cursor-pointer">
      <span
        className="w-2 h-[120px] lg:h-[160px]"
        style={{ backgroundColor: manga.category_id.color }}
      />
      <span className="flex-grow ms-3">
        <p className="text-[18px] lg:text-[24px] font-bold text-start font-montserrat">
          {manga.title}
        </p>
        <p
          className="text-[14px] lg:text-[20px] font-bold text-start font-montserrat"
          style={{ color: manga.category_id.color }}
        >
          {manga.category_id.name}
        </p>
      </span>
      <img
        className="w-[140px] h-[160px] lg:w-[190px] lg:h-[210px] object-cover rounded-[50%_0.5rem_0.5rem_50%]"
        src={manga.cover_photo}
        alt={manga.title}
      />
    </Anchor>
  );
}
