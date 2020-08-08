import React from 'react'
import ShowComment from './ShowComment'
import { useEffect } from 'react'
import Axios from 'axios'

export default function AppComments(props) {
    const [commentData, setCommentData] = useState({
        comments: [],
    })

    useEffect(() => {
        const getComments = async () => {
            const comments = await Axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/comments/all/${this.props.appId}`)
            setCommentData({comments})
        }

        getComments()
    },[])

    return (
        <div>
            {commentData.map(comment => <ShowComment author={comment.author} comment={comment.comment} date={comment.createdAt == comment.updatedAt ? comment.createdAt : comment.updatedAt}></ShowComment>)}
        </div>
    )
}
