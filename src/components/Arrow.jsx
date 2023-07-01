export default function Arrow({ d,onClick }) {

    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-[50px] h-[50px] rounded-full hover:bg-[#FF54AC]">
            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
    )
    
}