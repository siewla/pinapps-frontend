import React, { Component } from 'react'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { MDBBtn } from 'mdbreact';


export class Activate extends Component {
    constructor (props){
        super (props);
        this.state = {
            name: '',
            token:'',
            message: '',
        }
    }

    componentDidMount =()=> {
        // console.log(this.state)
        let token = this.props.match.params.token;
        // console.log(token)
        jwt.verify(token, process.env.REACT_APP_JWT_ACCOUNT_ACTIVATION , (err)=>{
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

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/auth/activation/`,{
            token:this.state.token
        }).then(res =>{
            this.setState({
                message: res.data.message
            })
            console.log(res.data.message)
        }).catch(err =>{
            this.setState({
                message: 'Token Activated Before'
            })
        })
    }

    render() {
        return (
            <div className="middle-container">
                <h1>{this.state.name}</h1>
                <h2>{this.state.message}</h2>
                <form onSubmit={this.handleSubmit}>
                    <MDBBtn type="submit" color="red">Activate Your Account</MDBBtn>
                </form>
                <a href ='/users/register'><span>Not Registered?</span></a>
            </div>
        )
    }
}

export default Activate
