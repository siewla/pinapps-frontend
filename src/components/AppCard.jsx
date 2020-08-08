import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,
    MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import AppComments from './AppComments';

class AppCard extends Component {
    constructor(props){
        super(props)
            this.state = {
                modal:false
            }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render (){
        return (
        <div>
            <MDBCol className="app-card">
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-app-card" src={this.props.screenshot} waves />
                    <MDBCardBody className="card-body-black">
                        <MDBCardTitle>{this.props.name}</MDBCardTitle>
                        <MDBCardText>
                            {this.props.description}
                        </MDBCardText>
                        <MDBBtn color="red" href={this.props.url} target="_blank">Link</MDBBtn>
                        <MDBBtn color="red" onClick={this.toggle}>Details</MDBBtn>
                        <div className="favorite-button">
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBContainer>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>{this.props.name}</MDBModalHeader>
                <MDBModalBody>
                    <h3>All comments</h3>
                    <AppComments appId={this.props.appId}></AppComments>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="red" onClick={this.toggle}>Close</MDBBtn>
                </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        </div>
        )
    }
    
}

export default AppCard
