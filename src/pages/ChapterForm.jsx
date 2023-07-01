import { useNavigate,useParams } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"
import apiUrl from '../apiUrl'
import Swal from "sweetalert2"
import headers from "../utils/headers"
import roles from "../utils/online"
import ButtonForm from "../components/ButtonForm"

export default function ChapterForm() {

    const navigate = useNavigate()
    const title = useRef()
    const order = useRef()
    const pages = useRef()
    const { manga_id } = useParams()

    if (roles()===0 || null) {
        window.location.replace('/')
    }
    const create = () => {
        let data = {
            title: title.current.value?.trim(),
            pages: pages.current.value?.split(','),
            manga_id
        }
        if (order.current.value) {
            data.order = order.current.value?.trim()
        }
        console.log(data)
        axios.post(apiUrl+'/chapters',data,headers())
        .then(()=>Swal.fire({
            icon: 'success',
            text: 'chapter added!'
            }))
        .then(()=>navigate('/'))
        .catch(err=> {console.log(err.response)
            Swal.fire({
            icon: 'error',
            html: err.response.data?.messages?.map(each=>`<p>${each}</p>`).join('')
        })})
    }
    
    return (
        <main className='flex w-full min-h-screen items-center justify-between'>
            <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
                <p className="font-semibold text-[32px] text-center">Add a New Chapter!</p>
                <form className="flex flex-col my-[25px]">
                    <input ref={title} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="text" name="title" id="title" placeholder="Title" />
                    <input ref={order} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="number" name="order" id="order" placeholder="Order" />
                    <input ref={pages} className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="text" name="pages" id="pages" placeholder="page1,page2,page3..." />
                    <ButtonForm onClick={create} value='create!' />
                </form>
            </div>
            <img className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover" src="/img/register.png" alt="register" />
        </main>
    )
    
}
