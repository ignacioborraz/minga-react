/* eslint-disable react/prop-types */
export default function SwitchAuthor({ mangas }) {
  //console.log(mangas);
  let data = [];
  if (mangas.length > 0) {
    data = [
      [mangas[0], mangas[1]],
      [mangas[2], mangas[3]],
    ];
  }
  return (
    <article className="w-full p-4">
      {data.map((each, index) => {
        return (
          <section
            className="w-full flex justify-center items-stretch"
            key={index}
          >
            {each.map((element) => {
              return (
                <div
                  className="w-[160px] sm:w-[220px] m-2 flex flex-col items-center"
                  key={element._id}
                >
                  <img
                    className="w-full h-[220px] object-cover rounded-lg"
                    src={element.cover_photo}
                    alt={element.title}
                  />
                  <span className="text-[18px] text-[#424242] text-center">
                    {element.title}
                  </span>
                </div>
              );
            })}
          </section>
        );
      })}
    </article>
  );
}
