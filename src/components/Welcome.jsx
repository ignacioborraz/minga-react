export default function Welcome() {
    return (
        <div className='flex flex-col justify-center items-center flex-grow mt-5 mb-10 text-white w-full h-96 rounded-lg px-5 mx-auto bg-none 
        md:items-start md:bg-[url("/img/home.png")] md:bg-center md:bg-cover'>
            <h2 className='font-bold text-5xl mb-1 text-center
            md:text-left
            xl:text-6xl'>Live the emotion of the manga</h2>
            <p className='text-2xl mb-1'>Find the perfect manga for you</p>
            <p className='text-2xl hidden font-bold mb-2
            md:flex'>#MingaForever 🔥</p>
            <button className="border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-40 p-2 justify-center text-xl rounded-lg">Sign In!</button>
        </div>
    )
}
