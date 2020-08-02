import React, { useState } from 'react'
import { authenticate, isAuth } from '../../helpers/auth'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password1:'',
    })

    const {email, password1 } = formData

    const [messageData, setMessage] = useState({
        message:'',
    })

    const { message } = messageData

    //handle change from user inputs
    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }

    //submit data to backend
    const handleSubmit = event =>{
        event.preventDefault()
        if(email && password1){
                axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/auth/login`,{
                    email, password:password1
                })
                    .then(res =>{
                        authenticate(res, ()=>{
                            setFormData({
                                ...formData,
                                email:'',
                                password1:'',
                        })
                        
                        })
                })
                    .catch(err =>{
                        setMessage({
                            message: 'Email doesn\'t exist or wrong password'
                        })
                    })
            } else{
                setMessage({
                    message:'Please fill in all the fields'
                })
        }
    }
    return (
        <div>
            {isAuth()? <Redirect to ='/'/>: null}
            <div>
                <MDBContainer onSubmit={handleSubmit}>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                <form>
                                    <p className="h5 text-center mb-4">Sign in</p>
                                    <p>{message}</p>
                                    <div className="grey-text">
                                    <MDBInput 
                                        label="Type your email" 
                                        icon="envelope" group 
                                        type="email" 
                                        validate 
                                        error="wrong"
                                        success="right" 
                                        onChange={handleChange('email')}
                                        value={email}
                                    />
                                    <MDBInput 
                                        label="Type your password" 
                                        icon="lock" 
                                        group 
                                        type="password" 
                                        validate 
                                        onChange={handleChange('password1')}
                                        value={password1}
                                    />
                                    </div>
                                    <div className="text-center">
                                    <MDBBtn type="submit">Login</MDBBtn>
                                    </div>
                                </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>  
            </div>
        </div>
    )
}

export default Login
