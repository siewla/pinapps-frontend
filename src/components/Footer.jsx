import React, { Component } from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";

export class Footer extends Component {
    render() {
        return (
            <MDBFooter color="black fixed-bottom">
                <MDBContainer fluid className="text-center">
                &copy; {new Date().getFullYear()} Built and Designed by <a href="https://github.com/siewla/pinapps"> PinApps </a>
                </MDBContainer>
            </MDBFooter>
        )
    }
}

export default Footer
