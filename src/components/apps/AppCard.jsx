import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,
    MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import AppComments from '../comments/AppComments';
import Axios from 'axios';

class AppCard extends Component {
    constructor(props){
        super(props)
            this.state = {
                modal: false,
                currentUser: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user'))._id : "",
                isLiked: false
            }
    }

    
    componentDidMount() {
        this.setState({
            isLiked: this.props.likes.includes(this.state.currentUser)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.likes !== this.props.likes) {
            this.setState({
            isLiked: this.props.likes.includes(this.state.currentUser)
        })}
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleLike = () => {
        try {
            // console.log('toggling likes', this.state.isLiked)
            this.state.isLiked ? Axios.patch(`${process.env.REACT_APP_BACKEND_API_URL}/apps/unlike/${this.props.appId}`, {
                userId: this.state.currentUser
            }).then(res => {
                // console.log('unlike:', res)
                this.props.fetchApps();
            }) : Axios.patch(`${process.env.REACT_APP_BACKEND_API_URL}/apps/like/${this.props.appId}`, {
                userId: this.state.currentUser
            }).then(res => {
                // console.log('like:', res);
                this.props.fetchApps();
            })
            
        } catch (error) {
            // console.log(error);
        }
    }
    
    render (){
        return (
        <div>
            <MDBCol className="app-card">
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-app-card" src={this.props.screenshot} waves />
                    <MDBCardBody className="card-body-black">
                        <div className="card-body-title-flex">
                            <MDBCardTitle>{this.props.name}</MDBCardTitle>
                            <h6 className="yellow-text"><i className="fa fa-thumbs-up" aria-hidden="true"></i> {this.props.likes.length}</h6>
                        </div>
                        <MDBCardText>
                            {this.props.description}
                        </MDBCardText>
                        <MDBBtn color="red" href={this.props.url} target="_blank">Link</MDBBtn>
                        <MDBBtn color="red" onClick={this.toggle}>Details</MDBBtn>
                        { 
                            this.props.isLogin && 
                                <div className={`favorite-button favorite-button-${this.state.isLiked ? 'enabled' : 'disabled'}`} onClick={ this.toggleLike }>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                        }                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBContainer>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>{this.props.name}</MDBModalHeader>
                <MDBModalBody>
                    <AppComments appId={this.props.appId} isLogin={this.props.isLogin} />
                </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        </div>
        )
    }
    
}

export default AppCard
