import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
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
            <MDBBtn color="red" onClick={this.toggle}>Add New App</MDBBtn>
            <MDBContainer>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Add New App</MDBModalHeader>
                <MDBModalBody>
                    <AddApp />
                </MDBModalBody>
            </MDBModal>
            </MDBContainer>
        </div>
        
        );
    }
}

export default AddAppModal