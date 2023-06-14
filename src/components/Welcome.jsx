import { Link as Anchor } from "react-router-dom"

export default function Welcome() {

    return (
        <div className='flex flex-col justify-center items-center text-white w-full h-screen px-5 mx-auto md:mt-5 md:mb-10 md:h-96 md:rounded-lg md:items-start md:flex-grow bg-[url("/img/home.png")] bg-center bg-cover'>
            <h2 className='font-bold text-5xl mb-1 text-center md:text-left xl:text-6xl'>Live the emotion of the manga</h2>
            <p className='text-2xl mb-1 text-center'>Find the perfect manga for you</p>
            <p className='text-2xl hidden font-bold mb-2
            md:flex'>#MingaForever 🔥</p>
            <Anchor to='/signin' className="border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-40 p-2 flex justify-center md:justify-start text-xl rounded-lg">Sign In!</Anchor>
        </div>
    )
    
}
