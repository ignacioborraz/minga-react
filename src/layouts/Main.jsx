import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Main({ children }) {
    //console.log(children);
    return (
        <div className='flex flex-col min-h-screen w-full justify-between items-center bg-white m-auto md:w-11/12 2xl:w-[1375px]'>
            <NavBar />
            {/* vistas dinamicasss (por ahora SOLO index) */}
            {children}
            <Footer />
        </div>
    )

}
