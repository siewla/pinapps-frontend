import React, { Component } from 'react'
import {MDBNavbar, MDBNavbarBrand } from "mdbreact";

export class Header extends Component {
    render() {
        return (
            <MDBNavbar className="justify-content-center" color="blue darken-2" dark expand="md">
                <MDBNavbarBrand>
                    <i className="fa fa-map-pin" aria-hidden="true"></i><strong className="white-text"> Pin Apps</strong>
                </MDBNavbarBrand>
            </MDBNavbar>
        )
    }
}

export default Header
