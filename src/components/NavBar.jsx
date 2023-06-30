import Display from "./Display";
import { useState,useEffect } from "react";
import axios from "axios"
import apiURL from "../apiUrl"
import headers from "../utils/headers"
  
async function signout(event) {
    event.preventDefault()
    try {
        await axios.post(
            apiURL+'/auth/signout',
            null,
            headers()
        )
        } catch (error) {
            console.log(error)
    }
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.replace('/')
}

function catch_token(setOptions) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setOptions([
        { to: "/", title: "Home" },
        { to: "/register", title: "Register" },
        { to: "/signin", title: "Sign In" }
    ])
}

export default function NavBar() {

    const [options,setOptions] = useState([
        { to: "/", title: "Home" }
    ])
    const [photo,setPhoto] = useState()
    const [email,setEmail] = useState()
    useEffect(() => {
        let token = localStorage.getItem('token')
        //console.log(token);
        if (token) {
            axios.post(apiURL+'/auth/token',null,headers())
                .then(res=> {
                    if (res.data.response.user.role===0) {
                        setOptions([
                            { to: "/", title: "Home" },
                            { to: "/author-form", title: "Create Author"},
                            { to: "/cia-form", title: "Create Company"},
                            { to: "/", title: "Sign Out" }
                        ])
                    } else if (res.data.response.user.role===1 || res.data.response.user.role===2) {
                        setOptions([
                            { to: "/", title: "Home" },
                            { to: "/manga-form", title: "Create Manga" },
                            { to: "/", title: "Sign Out" }
                        ])
                    }
                    setPhoto(res.data.response.user.photo)
                    setEmail(res.data.response.user.email)
                })
                .catch(()=> catch_token(setOptions))
        } else {
            catch_token(setOptions)
        }
    },[])
    const [show, setShow] = useState(false)
    
    return (
        <>
            {show && <Display photo={photo} email={email} signout={signout} options={options} show={show} setShow={setShow} />}
            <nav className='flex w-full justify-between items-center px-5 h-20 absolute top-0 z-10 md:w-11/12 2xl:w-[1375px]'>
                <svg onClick={()=>setShow(!show)} className="h-14 p-1 text-[#F472B6] hover:text-white bg-white hover:bg-[#F472B6] rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img  className='h-14 p-1' src="/img/logo.png"/>
            </nav>
        </>
    )

}
