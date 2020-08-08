import React from 'react'
import ShowComment from './ShowComment'
import { useEffect, useState } from 'react'
import Axios from 'axios'

export default function AppComments(props) {
    const [commentData, setCommentData] = useState({
        comments: [],
    })

    const {comments} = commentData;

    useEffect(() => {
        const getComments = async () => {
            const comments = await (await Axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/comments/all/${props.appId}`)).data
            setCommentData({comments})
        }

        getComments()
    },[])
    console.log('comments:', commentData)
    return (
        
        <div>
            {comments.map(comment => <ShowComment author={comment.author} comment={comment.comment} date={comment.createdAt == comment.updatedAt ? comment.createdAt : comment.updatedAt}></ShowComment>)}
        </div>
    )
}
