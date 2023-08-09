/* eslint-disable react/prop-types */
export default function ArrowPage({ d, onClick, position }) {
  return (
    <div
      className="flex items-center w-1/2 absolute z-0 top-0 h-screen pt-20"
      style={position}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-gray-700 w-[50px] h-[50px] rounded-full hover:drop-shadow-xl"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </div>
  );
}
