import Display from "./Display"
import { useState } from "react"

export default function NavBar() {

    const [show,setShow] = useState(false)
    
    let options = [
        { to: '/', title: 'Home'}, 
        { to: '/register', title: 'Register'},
        { to: '/signin', title: 'Sign In'}
    ]
    
    return (
        <>
            {show && <Display options={options} show={show} setShow={setShow} />}
            <nav className='flex w-full justify-between items-center px-5 h-20 absolute top-0 z-10 md:w-11/12 2xl:w-[1375px]'>
                <svg onClick={()=>setShow(!show)} className="h-14 p-1 text-[#F472B6] hover:text-white bg-white hover:bg-[#F472B6] rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img  className='h-14 p-1' src="/img/logo.png"/>
            </nav>
        </>
    )

}
