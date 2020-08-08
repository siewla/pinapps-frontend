import React from 'react'
import { MDBCard, MDBCardHeader, MDBCardText, MDBCardFooter } from 'mdbreact'
import { useState } from 'react'
import { useEffect } from 'react';
import Axios from 'axios';


export default function ShowComment(props) {
    const [authorData, setAuthor] = useState({authorName: 'Anonymous'});

    const {authorName} = authorData

    useEffect(() => {
        const getAuthor = async () => {
            const author = await (await Axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/comments/all/${props.author}`)).data;
            setAuthor({authorName: author.name})
        };
        getAuthor();
    },[])

    return (
        <div>
            <MDBCard>
                <MDBCardHeader>{authorName}</MDBCardHeader>
                <MDBCardText>{this.props.comment}</MDBCardText>
                <MDBCardFooter>{this.props.date}</MDBCardFooter>
            </MDBCard>
        </div>
    )
}
