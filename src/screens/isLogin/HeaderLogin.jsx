import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBBtn} from "mdbreact";
import { logout } from '../../helpers/auth.services'

export class HeaderLogin extends Component {
    state = {
        isOpen: false
    };  
    
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleLogout = () =>{
        logout()
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
                            <MDBNavLink className="navitem-title" to="/">
                                All Apps
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="navitem-title" to="/myapps">
                                My Apps
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <form onSubmit={this.handleLogout}>
                                <MDBBtn type="submit" color="red">Logout</MDBBtn>
                            </form>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        )
    }
}

export default HeaderLogin
