import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Axios from 'axios';
import Moment from 'react-moment';


export default function ShowComment(props) {
    const [authorData, setAuthor] = useState({authorName: 'Anonymous'});

    const {authorName} = authorData

    useEffect(() => {
        const getAuthor = async () => {
            const author = await (await Axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/users/user/${props.author}`)).data;
            setAuthor({authorName: author.name})
        };
        getAuthor();
    },[props.author])

    return (
        <div>
            <div className="individual-comment-container">
                <h6 className="comment-author">{authorName}</h6>
                <h5 className="comment-text">{props.comment}</h5>
                <h6 className="comment-footer"><Moment toNow>{props.date}</Moment></h6>
            </div> 
        </div>
    )
}
