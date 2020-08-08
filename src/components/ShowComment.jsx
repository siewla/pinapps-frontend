import React from 'react'
import { MDBCard, MDBCardHeader, MDBCardText, MDBCardFooter, MDBCardBody } from 'mdbreact'
import { useState } from 'react'
import { useEffect } from 'react';
import Axios from 'axios';


export default function ShowComment(props) {
    const [authorData, setAuthor] = useState({authorName: 'Anonymous'});

    const {authorName} = authorData

    useEffect(() => {
        const getAuthor = async () => {
            const author = await (await Axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/users/user/${props.author}`)).data;
            setAuthor({authorName: author.name})
        };
        getAuthor();
    },[])

    return (
        <div>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardHeader>{authorName}</MDBCardHeader>
                    <MDBCardText>{props.comment}</MDBCardText>
                    <MDBCardFooter>{props.date}</MDBCardFooter>
                </MDBCardBody>
                
            </MDBCard>
        </div>
    )
}
