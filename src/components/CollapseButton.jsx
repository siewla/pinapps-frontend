import React, { Component } from 'react'
import { MDBBtn, MDBCollapse } from "mdbreact";

class CollapseButton extends Component {
    state = {
        collapseID: '',
    }
    
    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }
    
    render() {
        return (
            <div>
                <MDBBtn className="about-text"
                    color="dark"
                    onClick={this.toggleCollapse("basicCollapse")}
                    style={{ marginBottom: "1rem" }}
                    size="lg"
                    >
                    {this.props.question}
                </MDBBtn>
                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                <p className="about-text">{this.props.answer}</p>
                </MDBCollapse>
            </div>
            );
        }
    }
    
    export default CollapseButton;
