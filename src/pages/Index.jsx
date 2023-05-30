import Carousel from "../components/Carousel"
import Welcome from "../components/Welcome"

export default function Index({data}) {
    return (
        <main className='flex flex-col flex-grow min-h-screen w-full justify-evenly items-center pt-20 px-5 
        md:w-11/12
        xl:w-[1200px]'>
            <Carousel title={data[0].title} character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} pepe={data[0].description} />
            <Welcome />
        </main>
    )
}
