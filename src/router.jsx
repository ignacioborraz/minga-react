import { createBrowserRouter,redirect } from "react-router-dom";
import Index from './pages/Index'
import Main from "./layouts/Main"
import SignIn from "./pages/SignIn"
import Register from "./pages/Register"
import MangaForm from "./pages/MangaForm"
import AuthorForm from "./pages/AuthorForm"
import CompanyForm from "./pages/CompanyForm"
import ChapterForm from "./pages/ChapterForm"
import Allow from "./pages/Allow"
import info from "./utils/online";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Index /> },
            { path: '/index', element: <Index /> },
            { path: '/home', element: <Index /> },
            { path: '/signin', element: <SignIn />, loader: async()=> info().online && redirect("/")},
            { path: '/register', element: <Register />, loader: async()=> info().online && redirect("/")},
            { path: '/manga-form', element: <MangaForm />, loader: async()=> info().role===0 && redirect("/bad-auth")},
            { path: '/author-form', element: <AuthorForm />, loader: async()=> info().role===0 && redirect("/bad-auth")},
            { path: '/cia-form', element: <CompanyForm />, loader: async()=> info().role===0 && redirect("/bad-auth")},
            { path: '/:manga_id/chapter-form', element: <ChapterForm />, loader: async()=> info().role===0 && redirect("/bad-auth")},
            { path: '/*', element: <Allow />},
        ]
    }
])

export default router