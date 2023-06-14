import Carousel from "../components/Carousel"
import Welcome from "../components/Welcome"

export default function Index() {

    return (
         <main className='flex flex-col md:pt-20 w-full min-h-screen items-center justify-between'>
            <Carousel />
            <Welcome />
        </main>
    )

}