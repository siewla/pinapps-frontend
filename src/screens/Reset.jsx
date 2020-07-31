import React, { Component } from 'react'
import jwt from 'jsonwebtoken';
import axios from 'axios'

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
                    this.setState({
                        password1: '',
                        password2:'',
                        message: response.data.message
                    })
                })
                .catch(error => {
                    this.setState({
                        message: 'Reset Token Activated Before'
                    })
                })   
        }else{
            if(this.state.password1 ==='' || this.state.password2 ==='') {
                this.setState({
                    message: 'Please fill in all the fields'
                })
            } else if (this.state.password1!==this.state.password2){
                this.setState({
                    message: 'Passwords do not match'
                })
            }
            
            
        }

    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.name}</h1>
                <h2>{this.state.message}</h2>
                <form onSubmit={this.handleSubmit}>
                <input 
                        type="password" 
                        id = "password1"
                        placeholder="password"
                        onChange={this.handleChange}
                        value={this.password1}
                    />
                    <input 
                        type="password" 
                        id = "password2"
                        placeholder="confirm password"
                        onChange={this.handleChange}
                        value={this.password2}
                    />
                    <button type="submit">Reset Password</button>
                </form>
                <a href ='/register'><span>Not Registered?</span></a>
            </div>
        )
    }
}

export default Activate
