import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ShowAppPopOut extends Component {
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
            <div className="horizontal-app-card">
                <img onClick={this.toggle} className="horizontal-app-image" src={this.props.screenshot} alt={this.props.appName}/>
            </div>
            <MDBContainer>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>{this.props.appDetails.name}</MDBModalHeader>
                <MDBModalBody>
                <h4><span className="red-text">App Name</span> : {this.props.appDetails.name}</h4>
                <h4><span className="red-text">Description</span> : {this.props.appDetails.description}</h4>
                <h4><span className="red-text">Link</span><a href={this.props.appDetails.url}> : {this.props.appDetails.url}</a></h4>
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="red" onClick={this.toggle}>Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            </MDBContainer>
        </div>
        
        );
    }
}

export default ShowAppPopOut 