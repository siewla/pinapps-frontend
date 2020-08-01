import React, { Component } from 'react'
import {MDBNavbar, MDBNavbarBrand } from "mdbreact";

export class Header extends Component {
    render() {
        return (
            <MDBNavbar className="justify-content-center" color="black">
                <MDBNavbarBrand>
                    <strong className="white-text"> Pin Apps</strong>
                </MDBNavbarBrand>
            </MDBNavbar>
        )
    }
}

export default Header
