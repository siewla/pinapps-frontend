import React, { useState } from 'react'
import { authenticate } from '../../helpers/auth.services'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Googlelogin from '../Authentication/Googlelogin'

const Login = (props) => {
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
                            props.setLogin(true)
                        })
                    })
                    .catch(err =>{
                        setMessage({
                            message: ''
                        })
                    })
            } else{
                setMessage({
                    message:'Please fill in all the fields'
                })
        }
    }
    return (
        <div className="signin-container">
            <MDBContainer onSubmit={handleSubmit} >
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                            <form className="form-container">
                                <p className="h2 text-center mb-4">Sign in</p>
                                <p>{message}</p>
                                <div className="white-text">
                                <MDBInput className="white-text"
                                    label="Type your email" 
                                    icon="envelope" group 
                                    type="email" 
                                    validate 
                                    error="wrong"
                                    success="right" 
                                    onChange={handleChange('email')}
                                    value={email}
                                />
                                <MDBInput className="white-text"
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
                                <MDBBtn id="submit-button" color="red" type="submit">Login</MDBBtn>
                                </div>
                            </form>
                            <div className="flex-center-container">
                                <h4>or</h4>
                                <Googlelogin setLogin={props.setLogin}/>
                            </div>
                            <hr className="hr-light" />
                            <h6 className="text-center">Forgot Password? <span><a href="/users/password/forget">Reset</a></span></h6>
                            <h6 className="text-center">Don't have an account? <span><a href="/users/register">Sign Up</a></span></h6>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer> 
        </div>
    )
}

export default Login
