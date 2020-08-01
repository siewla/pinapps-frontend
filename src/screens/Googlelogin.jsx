import React from 'react'
import { authenticate} from '../helpers/auth'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'

const Googlelogin = () => {
    //send google token
    const sendGoogleToken = tokenId => {
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/googlelogin`,{
            idToken: tokenId
        })
        .then(res =>{
            authenticate(res, ()=>{
                console.log('success')
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    //get response from google 
    const responseGoogle = response =>{
        // console.log(response)
        sendGoogleToken(response.tokenId)
    }
    
    return (
        <div>
            <GoogleLogin
                    clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                    onSuccess={ responseGoogle }
                    onFailure={ responseGoogle }
                    cookiePolicy = { 'single_host_origin' }
                >
            </GoogleLogin>
        </div>
    )
}

export default Googlelogin
