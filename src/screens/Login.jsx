import React, { useState } from 'react'
import { authenticate, isAuth } from '../helpers/auth'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password1:'',
    })

    const {email, password1 } = formData
    
    //handle change from user inputs
    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }

    //submit data to backend
    const handleSubmit = event =>{
        event.preventDefault()
        if(email && password1){
                axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/login`,{
                    email, password:password1
                })
                    .then(res =>{
                        authenticate(res, ()=>{
                            setFormData({
                                ...formData,
                                email:'',
                                password1:'',
                        })
                        console.log('success')
                        })
                })
                    .catch(err =>{
                        console.log(err.response.data.error)
                    })
            } else{
                console.log('Please fill in all the fields')
        }
    }
    return (
        <div>
            {isAuth()? <Redirect to ='/'/>: null}
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="email"
                        onChange={handleChange('email')}
                        value={email}
                    />
                    <input 
                        type="password" 
                        placeholder="password"
                        onChange={handleChange('password1')}
                        value={password1}
                    />
                    <button
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                <h1>Sign in with Google</h1>
                <a href ='/register'><span>Not Registered?</span></a>
            </div>
        </div>
    )
}

export default Login
