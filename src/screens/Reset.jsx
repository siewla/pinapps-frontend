import React, { Component } from 'react'
import jwt from 'jsonwebtoken';
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

export class Activate extends Component {
    constructor (props){
        super (props);
        this.state = {
            password1: '',
            password2:'',
            token: '',
            message:''
        }
    }

    componentDidMount =()=> {
        // console.log(this.state)
        let token = this.props.match.params.token;
        // console.log(token)
        jwt.verify(token, 'a1s2d3f4g5h6j7k8l9', (err)=>{
            if (err){
                if(err.message === "jwt expired"){
                    this.setState({
                        message: 'Token Expired'
                    })
                } else{
                    this.setState({
                        message: 'Invalid Token'
                    })
                }
            } else {
                const { name } = jwt.decode(token);
                this.setState({
                    name: name,
                    token:token,
                    message: 'Valid Token'
                })
            }
        })
    }

    handleChange = (event) => {
        const {id, value} = event.target
        this.setState({
            [id]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if ((this.state.password1 === this.state.password2) && this.state.password1 && this.state.password2){
            axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_BACKEND_API_URL}/password/reset`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },  
                data: {
                    "newPassword": this.state.password1,
                    "resetPasswordLink": this.state.token
                }
            })
                .then(response => {
                    console.log(response)
                    this.setState({
                        password1: '',
                        password2:'',
                        message: response.data.message
                    })
                })
                .catch(error => {
                    console.log(error)
                    this.setState({
                        message: 'Reset Token Activated Before'
                    })
                })   
        }else{
            if (this.state.password1!==this.state.password2){
                this.setState({
                    message: 'Passwords do not match'
                })
            }
            
            
        }

    }

    render() {
        return (
            <div>
                <MDBContainer onSubmit={this.handleSubmit}>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                <form>
                                    <p className="h5 text-center mb-4">Reset Password</p>
                                    <p>{this.state.message}</p>
                                    <div className="grey-text">
                                    <MDBInput 
                                        label="Type your password" 
                                        icon="lock" 
                                        group 
                                        type="password" 
                                        validate 
                                        onChange={this.handleChange}
                                        id='password1'
                                        value={this.password1}
                                    />
                                    <MDBInput 
                                        label="Confirm your password" 
                                        icon="lock" 
                                        group 
                                        type="password" 
                                        validate 
                                        id='password2'
                                        onChange={this.handleChange}
                                        value={this.password2}
                                    />
                                    </div>
                                    <div className="text-center">
                                    <MDBBtn type="submit">Reset Password</MDBBtn>
                                    </div>
                                </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> 
            </div>
        )
    }
}

export default Activate
