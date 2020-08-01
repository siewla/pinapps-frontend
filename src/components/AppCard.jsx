import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default function AppCard (props) {
    return (
        <MDBCol className="app-card">
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src={props.screenshot} waves />
                <MDBCardBody>
                    <MDBCardTitle>{props.name}</MDBCardTitle>
                    <MDBCardText>
                        {props.description}
                    </MDBCardText>
                    <MDBBtn href={props.url}>Link</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

