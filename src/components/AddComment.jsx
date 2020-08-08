import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

export default function AddComment(props) {
    const [formData, setFormData] = useState({
        comment:'',
        author: JSON.parse(localStorage.getItem('user')), 
        app: props.app,
    });

    const {comment} = formData;

    const [messageData, setMessage] = useState({
        message:'',
    })

    const {message} = messageData

    const handleChange = text => event => {
        setFormData({ ...formData, [text]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault()
        if(comment) {
            Axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/comments/new`, {
                ...formData, comment
            })
            .then(res => {
                setFormData({
                    ...formData,
                    comment: ''
                })
            })
            .catch(err => {
                setMessage({
                            message: 'server error, try again'
                        })
            })
        } else {
            setMessage({
                message: 'enter a comment!'
            })
        }
    }
    return (
        <div>
            <MDBContainer onSubmit={handleSubmit}>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                <p className="h5 text-center mb-4">Comment on this App</p>
                                <p className='red-text'>{message}</p>
                                <div className="grey-text">
                                    <MDBInput label="Your Comment" group type='text' onChange={handleChange('comment')} value={comment}></MDBInput>
                                    </div>
                                </form>
                                <MDBBtn type='submit' color='red'>Submit Comment</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
