import Arrow from "./Arrow"

export default function Carousel({ title,character_photo,cover_photo,pepe }) {
    const d_left = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    const d_right = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    return (
        <div className='flex items-center justify-evenly bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] rounded-lg mt-5 hidden px-5
        md:flex md:h-56'>
            <Arrow d={d_left} />
            <img className='h-64 self-end ' src={character_photo}/>
            <img className='h-56 mb-12 sel-end' src={cover_photo}/>
            <div className='text-l p-5 px-10 text-white
            sm:w-10/12
            xl:w-6/12'>
                <h3 className='text-2xl'>{title}</h3>
                <p className='text-xs
                xl:text-sm'>{pepe}</p>
            </div>
            <Arrow d={d_right} />
        </div>
    )
}
