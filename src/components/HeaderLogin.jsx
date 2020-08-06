import React, { Component } from 'react'
import {MDBNavbar, MDBNavbarBrand } from "mdbreact";

export class HeaderLogin extends Component {
    render() {
        return (
            <MDBNavbar className="justify-content-center" color="black">
                <MDBNavbarBrand>
                    <a href="/">
                        <strong className="white-text"> Login</strong>
                    </a>
                </MDBNavbarBrand>
            </MDBNavbar>
        )
    }
}

export default HeaderLogin
