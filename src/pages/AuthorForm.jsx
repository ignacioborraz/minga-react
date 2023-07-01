import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"
import apiUrl from '../apiUrl'
import Swal from "sweetalert2"
import headers from "../utils/headers"
import roles from "../utils/online"
import ButtonForm from "../components/ButtonForm"

export default function AuthorForm() {

    const navigate = useNavigate()
    const name = useRef()
    const last_name = useRef()
    const photo = useRef()
    const city_country = useRef()
    const date = useRef()
    console.log(roles());
    if (roles()===0 || null) {
        window.location.replace('/')
    }
    const create = () => {
        let data = {
            name: name.current.value?.trim(),
            photo: photo.current.value?.trim()
        }
        if (last_name.current.value) {
            data.last_name = last_name.current.value?.trim()
        }
        if (city_country.current.value?.split(',').length===2) {
            data.city = city_country.current.value.split(',')[0]?.trim(),
            data.country = city_country.current.value.split(',')[1]?.trim()
        }
        if (date.current.value) {
            data.date = date.current.value?.trim()
        }
        //console.log(data)
        axios.post(apiUrl+'/authors',data,headers())
        .then(()=>Swal.fire({
            icon: 'success',
            text: 'author registered!'
            }))
        .then(()=>navigate('/'))
        .catch(err=>Swal.fire({
            icon: 'error',
            html: err.response.data.messages.map(each=>`<p>${each}</p>`).join('')
        }))
    }
    
    return (
        <main className='flex w-full min-h-screen items-center justify-between'>
            <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
                <p className="font-semibold text-[32px] text-center">Become an Author!</p>
                <form className="flex flex-col my-[25px]">
                    <input ref={name} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="text" name="name" id="name" placeholder="Name" />
                    <input ref={last_name} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="text" name="last_name" id="last_name" placeholder="Last Name" />
                    <input ref={photo} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="url" name="photo" id="photo" placeholder="Url photo" />
                    <input ref={city_country} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="text" name="city_country" id="city_country" placeholder="City, Country" />
                    <input ref={date} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="date" name="date" id="date" placeholder="Date" />
                    <ButtonForm onClick={create} value='create!' />
                </form>
            </div>
            <img className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover" src="/img/register.png" alt="register" />
        </main>
    )
    
}
