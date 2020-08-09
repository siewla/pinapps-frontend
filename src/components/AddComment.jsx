import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import CommentsContainer from './CommentsContainer'

export default function AddComment(props) {
    const [formData, setFormData] = useState({
        comment:'',
        author: JSON.parse(localStorage.getItem('user'))._id, 
        app: props.appId,
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
        // console.log('submitting new comment')
        event.preventDefault()
        if(comment) {
            Axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/comments/new`, {
                ...formData, comment
            })
            .then(res => {
                props.fetchComments();
                setFormData({
                    ...formData,
                    comment: '',
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
                                <p className='red-text'>{message}</p>
                                <div className="grey-text">
                                    <MDBInput label="Your Comment" group type='text' onChange={handleChange('comment')} value={comment}></MDBInput>
                                    </div>
                                    <MDBBtn type='submit' color='red'>Submit Comment</MDBBtn>
                                </form>  
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
