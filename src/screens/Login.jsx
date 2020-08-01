import React, { useState } from 'react'
import { authenticate, isAuth } from '../helpers/auth'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'

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

    //send google token
    const sendGoogleToken = tokenId => {
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/googlelogin`,{
            idToken: tokenId
        })
        .then(res =>{
            authenticate(res, ()=>{
                console.log('success')
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    //get response from google 
    const responseGoogle = response =>{
        // console.log(response)
        sendGoogleToken(response.tokenId)
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
                        console.log(err.message)
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
                <GoogleLogin
                    clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                    onSuccess={ responseGoogle }
                    onFailure={ responseGoogle }
                    cookiePolicy = { 'single_host_origin' }
                >
                </GoogleLogin>
                <h2>
                    <a href ='/register'><span>Not Registered?</span></a>
                </h2>
                
            </div>
        </div>
    )
}

export default Login
