import Carousel from "../components/Carousel"
import Welcome from "../components/Welcome"

export default function Index() {

    let welcome = {
        title: 'Live the emotion of the manga',
        subt1: 'Find the perfect manga for you',
        subt2: '#MingaForever 🔥'
    }
    return (
         <main className='flex flex-col md:pt-20 w-full min-h-screen items-center justify-between'>
            <Carousel />
            <Welcome title={welcome.title} subt1={welcome.subt1} subt2={welcome.subt2} />
        </main>
    )

}