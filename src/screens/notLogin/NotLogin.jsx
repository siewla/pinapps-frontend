import React, { Component } from 'react'
import Googlelogin from '../Authentication/Googlelogin'
import Login from '../Authentication/Login'
import Forget from '../Authentication/Forget'
import { Redirect } from 'react-router-dom'
import { isAuth } from '../../helpers/auth.services'

export class NotLogin extends Component {
    render() {
        return (
            <div>
                {this.props.isLogin ? <Redirect to ='/'/>: null}
                <div className="main-container-not-login">
                    <Googlelogin isLogin={this.props.isLogin} setLogin={this.props.setLogin} userData={this.props.userData} setUserData={this.props.setUserData} />
                    <h4 className="white-text-or">or</h4>
                    <Login isLogin={this.props.isLogin} setLogin={this.props.setLogin} userData={this.props.userData} setUserData={this.props.setUserData} />
                    <Forget />
                </div>
            </div>
        )
            
    }
}

export default NotLogin
