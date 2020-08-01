import cookie from 'js-cookie'

//Set in Cookie
export const setCookie = (key, value) => {
    if (window !== 'undefined'){
        cookie.set(key, value, {
            expires: 1
        })
    }
}

//Remove from Cookie
export const removeCookie = key => {
    if (window !=='undefined'){
        cookie.remove(key, {
            expires: 1
        })
    }
}

//Get from Cookie
export const getCookie = key => {
    if (window !=='undefined'){
        return cookie.get(key)
    }
}

//set in localstorage
export const setLocalStorage =(key,value) => {
    if (window !== 'undefined'){
        localStorage.setItem(key, JSON.stringify(value))
    }
}

//remove from localstorage
export const removeLocalStorage = key => {
    if (window !=='undefined'){
        localStorage.removeItem(key)
    }
}

//authenticate user after login
export const authenticate = (response, next) => {
    // console.log(response)
    setCookie('token', response.data.token)
    setLocalStorage('user', response.data.user)
    next()
}

//logout
export const logout = next =>{
    removeCookie('token')
    removeLocalStorage('user')
}

//get user info from localstorage
export const isAuth = () => {
    // console.log(getCookie('token'))
    if(window !=='undefined'){
        const cookieChecked = getCookie('token')
        if (cookieChecked){
            if (localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'))
            }else{
                return false
            }
        }
    }
}

//update user data in localstorage
export const updateUser = (response, next) => {
    if (window !=='undefined'){
        let auth = JSON.parse(localStorage.getItem('user'))
        auth = response.data
        localStorage.setItem('user', JSON.stringify(auth))
    }
    next()
}
