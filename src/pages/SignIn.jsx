import { Link as Anchor,useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"
import apiUrl from '../apiUrl'
import Swal from "sweetalert2"

export default function SignIn() {
    
    const navigate = useNavigate()
    const email = useRef()
    const password =  useRef()

    const signin = () => {
        let data = {
        email: email.current.value,
        password: password.current.value
        }
        //console.log(data)
        axios.post(apiUrl+'/auth/signin',data)
        .then(()=>navigate('/'))
        .catch(err=>Swal.fire({
            icon: 'error',
            html: err.response.data.messages.map(each=>`<p>${each}</p>`).join('')
        }))
    }

    return (
        <main className="flex w-full min-h-screen items-center justify-between">
            <img className="hidden md:block md:absolute md:top-0 md:left-0 h-screen w-[50%] object-cover" src="/img/signin.png" alt="signin" />
            <div className="flex flex-col md:absolute md:top-0 md:left-[50%] justify-center items-center h-screen w-full md:w-[50%]">
                <p className="font-semibold text-[32px] text-center">Welcome <span className="text-[#F472B6]">back</span>!</p>
                <p className="font-semibold text-[12px] mb-[12px] text-center p-2">Discover manga and manwha, track your progress, have fun, read manga.</p>
                <form className="flex flex-col my-[25px]">
                    {/* con ref={email} estoy asignando una referencia a un input */}
                    <input ref={email} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="email" id="email" placeholder="Email" />
                    <input ref={password} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="password" name="password" id="password" placeholder="Password" />
                    <input onClick={signin} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#F9A8D4] to-[#F472B6]" type="button" value="Sign in" />
                </form>
                <p className="font-semibold text-[12px] mt-[12px] text-center p-2">You dont have an account yet? <Anchor to='/register' className="text-[#F472B6]">Register</Anchor>!</p>
                <p className="font-semibold text-[12px] text-center p-2">Go back to <Anchor to='/' className="text-[#F472B6] hover:text-black">Home Page</Anchor>!</p>
            </div>
        </main>
    )
    
}
