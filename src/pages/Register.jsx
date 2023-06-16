import { Link as Anchor,useNavigate } from "react-router-dom"
import { useRef } from "react"

export default function Register() {

    const navigate = useNavigate()
    const register = ()=> {
        let data = {
            email: email.current.value,
            photo: photo.current.value,
            password: password.current.value
        }
        console.log(data)
        //data se envía en la petición POST al backend
        //redirigir en caso de éxito
        //mostrar alertas en caso de fracaso
        setTimeout(()=>navigate('/'),5000)
    }
    const email = useRef()
    const photo = useRef()
    const password =  useRef()
    
    return (
        <main className='flex w-full min-h-screen items-center justify-between'>
            <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
                <p className="font-semibold text-[32px] text-center">Welcome</p>
                <p className="font-semibold text-[12px] mb-[12px] text-center p-2">Discover manga and comics, track your progress, have fun, read manga.</p>
                <form className="flex flex-col my-[25px]">
                    <input ref={email} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="email" id="email" placeholder="Email" />
                    <input ref={photo} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="url" name="photo" id="photo" placeholder="Url photo" />
                    <input ref={password} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="password" name="password" id="password" placeholder="Password" />
                    <input onClick={register} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#F9A8D4] to-[#F472B6]" type="button" value="Register" />
                </form>
                <p className="font-semibold text-[12px] mt-[12px] text-center p-2">Already have an account? <Anchor to='/signin' className="text-[#F472B6]">Log in</Anchor>!</p>
                <p className="font-semibold text-[12px] text-center p-2">Go back to <Anchor to='/' className="text-[#F472B6] hover:text-black">Home</Anchor>!</p>
            </div>
            <img className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover" src="/img/register.png" alt="register" />
        </main>
    )
    
}
