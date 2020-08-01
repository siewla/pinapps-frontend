import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import Googlelogin from '../Googlelogin'
import Login from '../Login'
import Register from '../Register'
import Forget from '../Forget'

export class Main extends Component {
    render() {
        return (
            <div className="main-container-not-login">
                <Googlelogin />
                <Login />
                <Register />
                <Forget />
            </div>
        )
    }
}

export default Main
