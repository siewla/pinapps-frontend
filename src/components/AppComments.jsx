import React from 'react'
import ShowComment from './ShowComment'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import AddComment from './AddComment'

export default function AppComments(props) {
    const [commentData, setCommentData] = useState({
        comments: [],
    })

    const { comments } = commentData;

    useEffect(() => {
        const getComments = async () => {
            const appComments = await (await Axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/comments/all/${props.appId}`)).data;
            setCommentData({comments: appComments})
        }

        getComments()
    },[])
    console.log('comments:', commentData)
    return (
        
        <div>
            <AddComment app={props.appId}></AddComment>
            {comments.map(comment => 
                <ShowComment 
                    author={comment.author} 
                    comment={comment.comment} 
                    date={comment.createdAt == comment.updatedAt ? comment.createdAt : comment.updatedAt}>
                </ShowComment>
            )}
        </div>
    )
}
