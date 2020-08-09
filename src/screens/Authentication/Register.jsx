import React, { useState } from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Googlelogin from '../Authentication/Googlelogin'
import { isAuth } from '../../helpers/auth.services'
import { Redirect } from 'react-router-dom'

const Register = (props) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password1:'',
        password2:''
    })

    const [messageData, setMessage] = useState({
        message:'',
    })

    const { message } = messageData

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
        // console.log(name, email, password1)
        if(name && email && password1){
            if (password1 === password2){
                axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/auth/register`,{
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
                    setMessage({
                        message:res.data.message
                    })
                })
                    .catch(err =>{
                        // console.log(err)
                    })
            } else{
                setMessage({
                    message:'Passwords don\'t match'
                })
            }
        }else{
            setMessage({
                message:'Please fill in all the fields'
            })
        }
    }
    return (
        <div className="register-container">
            {isAuth() ? <Redirect to ='/'/>: null}
            <Googlelogin setLogin={props.setLogin}/>
            <h4 className="white-text-or">or</h4>
            <div className="signup-container">
                <MDBContainer onSubmit={handleSubmit}>
                    <MDBRow>
                        <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Sign up</p>
                                <p>{message}</p>
                                <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={handleChange('name')}
                                    value={name}
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={handleChange('email')}
                                    value={email}
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    onChange={handleChange('password1')}
                                    value={password1}
                                />
                                <MDBInput
                                    label="Confirm your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    onChange={handleChange('password2')}
                                    value={password2}
                                />
                                </div>
                                <div className="text-center py-4 mt-3">
                                <MDBBtn id="submit-button" color="red" type="submit">
                                    Register
                                </MDBBtn>
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

export default Register
