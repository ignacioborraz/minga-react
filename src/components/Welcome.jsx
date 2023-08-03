/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function Welcome({ title, subt1, subt2, button, to }) {
  return (
    <div className='flex flex-col justify-center items-center text-white w-full h-screen px-5 mx-auto md:mt-5 md:mb-10 md:h-96 md:rounded-lg md:items-start md:flex-grow bg-[url("/img/home.png")] bg-center bg-cover'>
      <h2 className="font-bold text-5xl mb-1 text-center md:text-left xl:text-6xl">
        {title}
      </h2>
      {subt1 && <p className="text-2xl mb-1 text-center">{subt1}</p>}
      {subt2 && (
        <p className="text-2xl hidden font-bold mb-2 md:flex">{subt2}</p>
      )}
      {button && (
        <Anchor
          to={to}
          className="border-none bg-[#F9A8D4] hover:bg-[#F472B6] w-40 p-2 flex items-center justify-center md:justify-start text-xl rounded-lg"
        >
          {button}
        </Anchor>
      )}
    </div>
  );
}
