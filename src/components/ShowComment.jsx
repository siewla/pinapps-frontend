import React from 'react'
import { MDBCard, MDBCardHeader, MDBCardText, MDBCardFooter } from 'mdbreact'


export default function ShowComment(props) {
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
