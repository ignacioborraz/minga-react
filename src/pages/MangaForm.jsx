import { useNavigate } from "react-router-dom"
import { useRef,useState,useEffect } from "react"
import axios from "axios"
import apiUrl from '../apiUrl'
import Swal from "sweetalert2"
import headers from "../utils/headers"
import roles from "../utils/info"
import ButtonForm from "../components/ButtonForm"

export default function MangaForm() {

    const navigate = useNavigate()
    const title = useRef()
    const photo = useRef()
    const category = useRef()
    const description = useRef()
    const [categories,setCategories] = useState([])
    useEffect(
        ()=> {
            axios(apiUrl+'/categories')
                .then(res=> {
                    //console.log(res)
                    setCategories(res.data.response)
                })
                .catch(err=>console.log(err))
        },
        []
    )

    if (roles()===0 || null) {
        window.location.replace('/')
    }
    const create = () => {
        let cat = categories.find(each=>each._id===category.current.value)
        let data = {
            title: title.current.value?.trim(),
            category_id: cat?._id,
            cover_photo: photo.current.value?.trim(),
            description: description.current.value?.trim()
        }
        //console.log(data)
        axios.post(apiUrl+'/mangas',data,headers())
        .then(()=>Swal.fire({
            icon: 'success',
            text: 'manga created!'
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
                <p className="font-semibold text-[32px] text-center">Create a New Manga!</p>
                <form className="flex flex-col my-[25px]">
                    <input ref={title} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="text" name="title" id="title" placeholder="Title" />
                    <input ref={photo} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="url" name="photo" id="photo" placeholder="Url photo" />
                    <select defaultValue='default' ref={category} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" name="categories">
                        <option value='default' disabled>Category</option>
                        {categories.map(each=> <option key={each._id} value={each._id}>{each.name}</option>)}
                    </select>
                    <input ref={description} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="text" name="description" id="description" placeholder="Description" />
                    <ButtonForm onClick={create} value='create!' />
                </form>
            </div>
            <img className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover" src="/img/register.png" alt="register" />
        </main>
    )

}