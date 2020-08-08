



//set in localstorage
export const setLocalStorage =(key,value) => {
    console.log(key,value);
    localStorage.setItem ('keone', 'testing')
    localStorage.setItem(key, JSON.stringify(value))
    // localStorage.setItem(key, JSON.stringify(value))

}

//remove from localstorage
export const removeLocalStorage = key => {
        localStorage.removeItem(key)
}

//authenticate user after login
export const authenticate = (response, next) => {
    // setLocalStorage('token', response.data.token)
    setLocalStorage('user', response.data.user)
    next()
}

//logout
export const logout = next =>{
    removeLocalStorage('token')
    removeLocalStorage('user')
}

//get user info from localstorage
export const isAuth = () => {
    const tokenChecked = localStorage.getItem('token')
    if (tokenChecked){
        if (localStorage.getItem('user')){
            return JSON.parse(localStorage.getItem('user'))
        }else{
            return false
        }
    }
}
