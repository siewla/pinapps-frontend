import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { set } from 'js-cookie'

const Forget = () => {
    const [formData, setFormData] = useState({
        email:'',
    })

    const [messageData, setMessage] = useState({
        message:'',
    })

    const { message } = messageData

    const {email} = formData
    
    //handle change from user inputs
    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }

    //submit data to backend
    const handleSubmit = event =>{
        // console.log(process.env.REACT_APP_BACKEND_API_URL)
        event.preventDefault()
        if(email){
            // fetch(`${process.env.REACT_APP_BACKEND_API_URL}/password/reset`,{
            //     method: 'PUT'
            // })
            // .then( response => response.json())
            // .then( result => {
            //     console.log('success')
            //     setFormData({
            //     ...formData,
            //     email:'',
            // })
            // })
            // .catch (error =>{
            //     console.log(error)
            // }) 
            axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_BACKEND_API_URL}/password/forget`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },  
                data: {
                    "email": email
                }
            })
                .then(response => setMessage({message:response.data.message}))
                .catch(error => setMessage({message:'Invalid Email'}))
                
        }else{
                console.log('Please fill in all the fields')
        }
    }
    return (
        <div>
            <div>
                <h1>Forget Password</h1>
                <h2>{message}</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="email"
                        onChange={handleChange('email')}
                        value={email}
                    />
                    <button
                        type="submit"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Forget
