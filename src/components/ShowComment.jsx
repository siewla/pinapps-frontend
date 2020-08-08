import React from 'react'
import { MDBCard, MDBCardHeader, MDBCardText, MDBCardFooter } from 'mdbreact'
import { useState } from 'react'


export default function ShowComment(props) {
    const [] = useState()
    return (
        <div>
            <MDBCard>
                <MDBCardHeader>{this.props.author}</MDBCardHeader>
                <MDBCardText>{this.props.comment}</MDBCardText>
                <MDBCardFooter>{this.props.date}</MDBCardFooter>
            </MDBCard>
        </div>
    )
}
