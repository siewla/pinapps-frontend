import React, { useState } from 'react'
import { authenticate, isAuth } from '../helpers/auth'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password1:'',
        password2:''
    })

    const {email, name, password1, password2} = formData
    
    //handle change from user inputs
    const handleChange = text => event => {
        // console.log(name, email, password1, password2)
        setFormData({...formData,[text]:event.target.value})
    }

    //submit data to backend
    const handleSubmit = event =>{
        // console.log(process.env.REACT_APP_BACKEND_API_URL)
        event.preventDefault()
        console.log(name, email, password1)
        if(name && email && password1){
            if (password1 === password2){
                axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/register`,{
                    name, email, password:password1
                })
                    .then(res =>{
                    setFormData({
                        ...formData,
                        name:'',
                        email:'',
                        password1:'',
                        password2:''
                    })

                    console.log('success')
                })
                    .catch(err =>{
                        console.log(err)
                    })
            } else{
                console.log('Passwords don\'t match')
            }
        }else{
                console.log('Please fill in all the fields')
        }
    }
    return (
        <div>
            {isAuth()? <Redirect to ='/'/>: null}
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="name"
                        onChange={handleChange('name')}
                        value={name}
                    />
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
                    <input 
                        type="password" 
                        placeholder="confirm password"
                        onChange={handleChange('password2')}
                        value={password2}
                    />
                    <button
                        type="submit"
                    >
                        Register
                    </button>
                </form>
                <h1>Sign in with Google</h1>
            </div>
        </div>
    )
}

export default Register
