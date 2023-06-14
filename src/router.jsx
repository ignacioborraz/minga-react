import { createBrowserRouter } from "react-router-dom";
import Index from './pages/Index'
import Main from "./layouts/Main";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Index /> },
            { path: '/index', element: <Index /> },
            { path: '/home', element: <Index /> },
            { path: '/signin', element: <SignIn />},
            { path: '/register', element: <Register />}
        ]
    }
])

export default router