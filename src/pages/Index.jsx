import { useState } from "react"
import SignIn from "../pages/SignIn"
//import Register from "./Register"
import Carousel from "../components/Carousel"
import Welcome from "../components/Welcome"

export default function Index() {

    const [changeView,setChangeView] = useState(false)

    return (
            changeView ? (
                <>
                <SignIn changeView={changeView} setChangeView={setChangeView} />
                {/* <Register changeView={changeView} setChangeView={setChangeView} /> */}
                </>
            ) : (
                <main className='flex flex-col md:pt-20 w-full min-h-screen items-center justify-between'>
                    <Carousel />
                    <Welcome changeView={changeView} setChangeView={setChangeView} />
                </main>
            )
    )

}