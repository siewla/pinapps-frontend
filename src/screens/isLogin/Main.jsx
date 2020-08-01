import React, { Component } from 'react'
import { isAuth, logout } from '../../helpers/auth';
import { Redirect } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';

export class Main extends Component {
    handleLogout = () =>{
        logout()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogout()}>
                    <MDBBtn type="submit" color="primary">Logout</MDBBtn>
                </form>
            </div>
        )
    }
}

export default Main
