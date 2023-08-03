/* eslint-disable react/prop-types */
export default function ProfileAuthor({
  photo,
  name,
  last_name,
  city,
  country,
  date,
}) {
  return (
    <div className="w-340 my-1 p-2 flex justify-between items-center">
      <img
        className="h-24 w-24 object-cover rounded-full"
        src={photo}
        alt={name}
      />
      <div className="w-full px-3 flex flex-col">
        <span className="font-semibold text-gray-800">{`${name} ${
          last_name ? last_name : ""
        }`}</span>
        <span className="font-semibold text-gray-800">{`${country}, ${city}`}</span>
        <span className="font-semibold text-gray-800">{`${
          date ? date : ""
        }`}</span>
      </div>
    </div>
  );
}
