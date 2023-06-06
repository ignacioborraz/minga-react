export default function Display({ options,show,setShow }) {
    let name = 'Ignacio Javier Borraz'
    let email = 'ignacioborraz@hotmail.com'
    return (
        <div className="absolute z-20 top-0 left-0 h-full w-full bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] flex flex-col items-center
        md:w-[500px]">
            <div className="w-11/12 my-1 p-2 flex justify-between items-center">
                <img className="h-14" src="/img/profile.png" alt="" />
                <div className="w-full px-3 flex flex-col">
                    <span className="font-semibold text-white">{name}</span>
                    <span className="font-semibold text-white">{email}</span>    
                </div>
                <svg onClick={()=>setShow(!show)} className="h-14 w-14 p-2 font-semibold text-white text-end" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>
            {options?.map((each,index)=> <input type='button' key={index} className="w-11/12 my-1 p-2 font-semibold text-white hover:bg-white hover:text-[#F472B6] hover:rounded-lg" value={each.title} /> )}
        </div>
    )
}