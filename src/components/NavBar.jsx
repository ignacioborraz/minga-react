export default function NavBar() {
    return (
        <nav className='flex w-full justify-between items-center px-5 h-20 absolute z-50
        md:w-11/12
        xl:w-[1200px]'>
            <svg className="h-14 mt-2 text-[#F472B6]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <img  className='h-14 mt-2' src="/img/logo.png"/>
        </nav>
    )
}
