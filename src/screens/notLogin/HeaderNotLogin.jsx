import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

export class HeaderNotLogin extends Component {
    state = {
        isOpen: false
    };  
    
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar color="black" dark expand="md">
                <MDBNavbarBrand>
                    <a href='/'><strong className="app-title">PinApps</strong></a>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink className="navitem-title"to="/about">
                                About Us
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="navitem-title" to="/users/register">
                                Get Started
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="navitem-title" to="/users/login">
                                Login
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        )
    }
}

export default HeaderNotLogin
