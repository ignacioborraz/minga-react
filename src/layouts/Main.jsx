import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Main({children}) {
    console.log(children);
    return (
        <>
        <NavBar />
        {/* vistas dinamicasss (por ahora SOLO index) */}
        {children}
        <Footer />
        </>
    )
}
