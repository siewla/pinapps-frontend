import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,
    MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import AppComments from './AppComments';
import likes from '../helpers/likes'

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

    likeApp = () => {

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
                        { 
                            this.props.isLogin && 
                                <div className="favorite-button" onClick={ this.likeApp }>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                        }
                        <div className="favorite-button">
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBContainer>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>{this.props.name}</MDBModalHeader>
                <MDBModalBody>
                    {this.props.isLogin? 
                    <div>
                        <AppComments appId={this.props.appId} />
                    </div> : <h1>NotLogin</h1>}
                </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        </div>
        )
    }
    
}

export default AppCard
