import React, { Component } from 'react'
import { authenticate } from '../../helpers/auth.services'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'

class Googlelogin extends Component{
    constructor(props) {
        super(props)
        this.state = {
            message:''
        }
    }
 
    //send google token
    sendGoogleToken = tokenId => {
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/auth/googlelogin`,{
            idToken: tokenId
        })
        .then(res =>{
            authenticate(res, ()=>{
                console.log('successfully login')
            })
        })
        .catch(err =>{
            this.setState({
                message:'There was error happening'
            })
        })
    }

    //get response from google 
    responseGoogle = response =>{
        // console.log(response)
        this.sendGoogleToken(response.tokenId)
    }

    render(){
        return (
            <div>
                <p>{this.message}</p>
                <GoogleLogin className="float-right margin-container"
                        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                        onSuccess={ this.responseGoogle }
                        onFailure={ this.responseGoogle }
                        cookiePolicy = { 'single_host_origin' }
                    >
                </GoogleLogin>
            </div>
        )
    }
}

export default Googlelogin
