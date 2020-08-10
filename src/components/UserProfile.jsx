import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBBtn } from 'mdbreact';

class UserProfile extends Component {
state = {
    modal: false,
    editName: false,
    editEmail: false
}

toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
}

toggleEdit = (key) => () =>{
    this.setState({
        [key]: !this.state[key]
    })
}

render() {
    return (
        <div>
            <h4 className="greeting-text">Hi, <span onClick={this.toggle} className="small-name-text" style={{cursor: 'pointer'}}>{this.props.user.name}</span></h4>
            <MDBContainer>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Account Details</MDBModalHeader>
                <MDBModalBody>
                    {this.state.editName ? 
                        <MDBInput label="name">{this.props.name}</MDBInput> : 
                        <div>
                            <h4><span className="red-text">Name</span> : {this.props.user.name}</h4>
                            <MDBBtn onClick={this.toggleEdit('editName')}>Edit</MDBBtn>
                        </div> }
                    
                    <h4><span className="red-text">Email</span> : {this.props.user.email}</h4>   
                </MDBModalBody>
            </MDBModal>
            </MDBContainer>
        </div>
        
        );
    }
}

export default UserProfile
