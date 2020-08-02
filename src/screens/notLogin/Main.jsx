import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import Googlelogin from '../Authentication/Googlelogin'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import Forget from '../Authentication/Forget'

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
