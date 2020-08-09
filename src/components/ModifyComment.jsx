import React from 'react'
import { MDBBtn } from 'mdbreact'
import Axios from 'axios'

export default function ModifyComment(props) {
    const deleteComment = () => {
        Axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/comments/${props.commentId}`).then(res => {
            console.log(res);
            props.fetchComments();
        }).catch(err => {
            console.log(err);
        })
        
    }

    return (
        <div>
            <MDBBtn>Edit Comment</MDBBtn>
            <MDBBtn color='danger' onClick={deleteComment}>Delete Comment</MDBBtn>
        </div>
    )
}
