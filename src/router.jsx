import { createBrowserRouter } from "react-router-dom";
import Index from './pages/Index'
import Main from "./layouts/Main"
import SignIn from "./pages/SignIn"
import Register from "./pages/Register"
import MangaForm from "./pages/MangaForm"
import AuthorForm from "./pages/AuthorForm"
import CompanyForm from "./pages/CompanyForm"
import ChapterForm from "./pages/ChapterForm"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Index /> },
            { path: '/index', element: <Index /> },
            { path: '/home', element: <Index /> },
            { path: '/signin', element: <SignIn />},
            { path: '/register', element: <Register />},
            { path: '/manga-form', element: <MangaForm />},
            { path: '/author-form', element: <AuthorForm />},
            { path: '/cia-form', element: <CompanyForm />},
            { path: '/:manga_id/chapter-form', element: <ChapterForm />},
        ]
    }
])

export default router