import React, { Component } from 'react'
import Login from '../Authentication/Login'
import Forget from '../Authentication/Forget'
import { Redirect } from 'react-router-dom'

export class NotLogin extends Component {
    render() {
        return (
            <div>
                {this.props.isLogin ? <Redirect to ='/'/>: null}
                <div className="main-container-not-login">
                    <Login isLogin={this.props.isLogin} setLogin={this.props.setLogin} userData={this.props.userData} setUserData={this.props.setUserData} />
                </div>
            </div>
        )
            
    }
}

export default NotLogin
