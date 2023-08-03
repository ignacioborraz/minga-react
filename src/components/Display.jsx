/* eslint-disable react/prop-types */
import ButtonNav from "../components/ButtonNav";

export default function Display({
  signout,
  options,
  show,
  setShow,
  email,
  photo,
}) {
  return (
    <div className="absolute z-20 top-0 left-0 h-full w-full bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] flex flex-col items-center md:w-[500px]">
      <div className="w-11/12 my-1 p-2 flex justify-between items-center">
        <img className="h-14 rounded-full" src={photo} alt={photo} />
        <div className="w-full px-3 flex flex-col">
          <span className="font-semibold text-gray-100">{email}</span>
        </div>
        <svg
          onClick={() => setShow(!show)}
          className="w-14 p-1 text-white border-white border-2 hover:bg-[#FF54AC] rounded-lg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      {options?.map((each, index) =>
        each.title === "Sign Out" ? (
          <a
            key={index}
            onClick={signout}
            href="/"
            className="w-11/12 my-1 p-2 text-gray-100 hover:bg-white hover:text-[#F472B6] hover:rounded-lg"
          >
            {each.title}
          </a>
        ) : (
          <ButtonNav key={index} each={each} />
        )
      )}
    </div>
  );
}
