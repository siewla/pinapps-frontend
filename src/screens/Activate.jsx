import React, { Component } from 'react'
import jwt from 'jsonwebtoken';
import axios from 'axios'

export class Activatenew extends Component {
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
        jwt.verify(token, 'pinappsprojectActivation2020', (err)=>{
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
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/activation/`,{
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
            <div>
                <h1>Welcome {this.state.name}</h1>
                <h2>{this.state.message}</h2>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Activate Your Account</button>
                </form>
                <a href ='/register'><span>Not Registered?</span></a>
            </div>
        )
    }
}

export default Activatenew
