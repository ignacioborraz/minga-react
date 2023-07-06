import { Navigate } from 'react-router-dom'

const Protected = ({ children,role,online }) => {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    console.log(online);
    return (user) ? (
        (user.role===role) ? <Navigate to={"/bad-auth"}/> : children
    ) : (role===null) ? <Navigate to={"/bad-auth"}/> : children
}

export default Protected