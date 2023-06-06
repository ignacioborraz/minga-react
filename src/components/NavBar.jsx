import Display from "./Display"
import { useState } from "react"

export default function NavBar() {
    let options = [
        { to: '/', title: 'Home'}, 
        { to: '/register', title: 'Register'},
        { to: '/signin', title: 'Sign In'}
    ]
    const [show,setShow] = useState(false)
    return (
        <>
            {/* sintaxis de ternario */}
            {/* {show ? <Display options={options} /> : null} */}
            {/* sintaxis del operador logico && */}
            {show && <Display options={options} show={show} setShow={setShow} />}
            <nav className='flex w-full justify-between items-center px-5 h-20 absolute z-10
            md:w-11/12
            xl:w-[1200px]'>
                <svg onClick={()=>setShow(!show)} className="h-14 mt-2 p-2 text-[#F472B6] hover:text-white hover:bg-[#F472B6] rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img  className='h-14 mt-2' src="/img/logo.png"/>
            </nav>
        </>
    )
}
