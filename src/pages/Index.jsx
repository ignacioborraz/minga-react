import { useState } from "react"
import SignIn from "../pages/SignIn"
import Carousel from "../components/Carousel"
import Welcome from "../components/Welcome"

export default function Index({ data }) {
    const [changeView,setChangeView] = useState(false)
    return (
            changeView ? (
                <SignIn changeView={changeView} setChangeView={setChangeView} />
            ) : (
                <main className='flex flex-col flex-grow min-h-screen w-full justify-evenly items-center pt-20 px-5 
                md:w-11/12
                xl:w-[1200px]'>
                    <Carousel title={data[0].title} character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} pepe={data[0].description} />
                    <Welcome changeView={changeView} setChangeView={setChangeView} />
                </main>
            )
    )
}

//main con sus dos hijos definen la vista INDEX
//signin define otra vista
//signin debe estar "en paralelo con index" ya que son vistas independendientes
//si main está como padre de signin (como estaba antes) tengo UNA VISTA ADENTRO DE OTRA VISTA
