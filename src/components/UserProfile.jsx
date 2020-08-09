import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import AddApp from '../screens/Apps/AddApp'

class AddAppModal extends Component {
state = {
    modal: false
}

toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
}

render() {
    return (
        <div>
            <h4 className="greeting-text">Hi, <span onClick={this.toggle} className="small-name-text">{this.props.user.name}</span></h4>
            <MDBContainer>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Account Details</MDBModalHeader>
                <MDBModalBody>
                    <h4><span className="red-text">Name</span> : {this.props.user.name}</h4>  
                    <h4><span className="red-text">Email</span> : {this.props.user.email}</h4>   
                </MDBModalBody>
            </MDBModal>
            </MDBContainer>
        </div>
        
        );
    }
}

export default AddAppModal