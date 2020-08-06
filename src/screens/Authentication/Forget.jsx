import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { set } from 'js-cookie'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

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
            axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_BACKEND_API_URL}/auth/password/forget`,
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
                <MDBContainer onSubmit={handleSubmit} className="margin-container">
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                <form>
                                    <p className="h5 text-center mb-4">Forgot Your Password?</p>
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
                                    </div>
                                    <div className="text-center">
                                    <MDBBtn color="red" type="submit">Reset Password</MDBBtn>
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

export default Forget
