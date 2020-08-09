import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import {MDBBtn} from 'mdbreact'


export default function ShowComment(props) {
    const [authorData, setAuthor] = useState({authorName: 'Anonymous', authorId: ''});

    const {authorName, authorId} = authorData;

    const [editState, setEditState] = useState({ editing: false });

    const {editing} = editState;

    const [editCommentForm, setFormData] = useState({
        comment: props.comment,
    })

    const formComment = editCommentForm.comment;

    const handleEditCommentChange = event => {
        setFormData({
            ...editCommentForm, comment: event.target.value
        })
    }

    const submitCommentEdit = event => {
        event.preventDefault()
        console.log('editing comment')
        if(formComment) {
            Axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/comments/${props.commentId}`, editCommentForm)
            .then(res => {
                console.log(res)
                props.fetchComments();
                setEditState({editing: false})
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        const getAuthor = async () => {
            const author = await (await Axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/users/user/${props.author}`)).data;
            setAuthor({ authorName: author.name, authorId: author._id })
        };
        getAuthor();
    },[props.author])

    const deleteComment = () => {
        console.log('deleting comment')
        Axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/comments/${props.commentId}`).then(res => {
            console.log(res);
            props.fetchComments();
        }).catch(err => {
            console.log(err);
        })
    }

    const enableEditComment = () => {
        setEditState({
            editing: true
        },[])
    }

    const disableEditComment = () => {
        setEditState({
            editing: false
        },[])
    }

    return (
        <div className="individual-comment-container">
            <h6 className="comment-author">{authorName}</h6>
            {editing ? <form>
                <input 
                    className="comment-text" 
                    value={formComment} 
                    onChange={handleEditCommentChange}></input>
                </form> : <h5 className="comment-text">{props.comment}</h5>}
            <h6 className="comment-footer"><Moment fromNow>{props.date}</Moment></h6>
            { isUserAuthor(authorId) && <div>
                {editing ? <div>
                    <MDBBtn size="sm" onClick={submitCommentEdit} type='submit'>Submit</MDBBtn>
                    <MDBBtn size="sm" onClick={disableEditComment} color='danger'>Cancel</MDBBtn>
                </div> : <div>
                    <MDBBtn size="sm" onClick={enableEditComment}>Edit Comment</MDBBtn>
                    <MDBBtn size="sm" color='danger' onClick={deleteComment}>Delete Comment</MDBBtn>
                </div>}
                
            </div>
            }
        </div> 
    )
}

function isUserAuthor(authorId) {
    return JSON.parse(localStorage.getItem('user'))._id === authorId;
}

