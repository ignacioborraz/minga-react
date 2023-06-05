export default function Display({ options }) {
    return (
        <div className="absolute z-20 top-0 left-0 h-full w-full bg-gradient-to-r from-[#F9A8D4] to-[#F472B6]
        md:w-[300px] flex flex-col">
            <p className="w-full my-1 p-1 pe-5 hover:bg-white text-end">X</p>
            {options?.map((each,index)=> <p key={index} className="w-full my-1 p-1 ps-5 hover:bg-white ">{each.title}</p> )}
        </div>
    )
}