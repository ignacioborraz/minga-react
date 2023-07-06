export default function() {
    let user = JSON.parse(localStorage.getItem('user'))
    //console.log(user)
    if (user) {
        return {
            role: user.role,
            online: true
        }
    }
    return {
        role: 0,
        online: false
    }
}