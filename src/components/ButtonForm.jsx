/* eslint-disable react/prop-types */
export default function ButtonForm({ onClick, value, color }) {
  return (
    <input
      onClick={onClick}
      className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-xl text-white rounded-lg bg-[#F472B6] hover:drop-shadow-xl"
      type="button"
      value={value}
      style={{backgroundColor:color}}
    />
  );
}
