export default function() {
    let user = JSON.parse(localStorage.getItem('user'))
    //console.log(user)
    return user?.role ?? 0
}