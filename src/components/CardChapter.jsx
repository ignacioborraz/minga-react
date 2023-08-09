/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function CardChapter({ chapter }) {
  return (
    <div className="w-[320px] md:w-[540px] mb-[20px] flex justify-between items-center rounded-lg">
      <img
        className="w-[80px] h-[80px] md:w-[160px] md:h-[160px] object-cover rounded-lg"
        src={chapter.cover_photo}
        alt={chapter.title}
      />
      <span className="flex-grow ms-3">
        <p className="text-[14px] md:text-[24px] font-bold text-start font-montserrat">
          {`Chapter #${chapter.order}`}
        </p>
        <p className="text-[14px] md:text-[24px] font-bold text-start font-montserrat">
          {chapter.title}
        </p>
      </span>
      <Anchor
        to={`/chapter/${chapter._id}/0`}
        className="w-[80px] lg:w-[120px] h-[40px] lg:h-[80px] p-2 text-[18px] lg:text-[24px] text-white rounded-full bg-[#F472B6] hover:drop-shadow-xl flex justify-center items-center cursor-pointer"
        value="read"
      >
        read
      </Anchor>
    </div>
  );
}
