import React, { Component } from 'react'
import { isAuth, logout } from '../../helpers/auth';
import { Redirect } from 'react-router-dom';

export class Main extends Component {
    handleLogout = () =>{
        logout()
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.handleLogout()}>Logout</button>
                Welcome
            </div>
        )
    }
}

export default Main
