/* eslint-disable react/prop-types */
export default function CardManga({ manga }) {
  return (
    <article className="bg-white w-[320px] h-[160px] m-3 flex justify-between items-center rounded-lg">
      <span
        className="w-2 h-[120px]"
        style={{ backgroundColor: manga.category_id.color }}
      />
      <span className="flex-grow ms-3">
        <p className="text-[18px] font-bold text-start font-montserrat">
          {manga.title}
        </p>
        <p
          className="text-[14px] font-bold text-start font-montserrat"
          style={{ color: manga.category_id.color }}
        >
          {manga.category_id.name}
        </p>
      </span>

      <img
        className="w-[140px] h-[160px] object-cover rounded-[50%_0.5rem_0.5rem_50%]"
        src={manga.cover_photo}
        alt={manga.title}
      />
    </article>
  );
}
