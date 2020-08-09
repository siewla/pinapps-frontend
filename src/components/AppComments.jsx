import React from 'react'
import ShowComment from './ShowComment'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import AddComment from './AddComment'
import CommentsContainer from './CommentsContainer'

export default function AppComments(props) {
    const [comments, setComments] = useState({
        comments: [],
    })

    const fetchComments = async()=>{
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/comments/app/${props.appId}`)
        const results = await response.json();
        setComments ({
            comments: results
        })
    }

    return (
        <div>
            <AddComment appId={props.appId} fetchComments={fetchComments}/>
            <CommentsContainer appId={props.appId} isLogin={props.isLogin} fetchComments={fetchComments} comments={comments.comments}/>
        </div>
    )
}
