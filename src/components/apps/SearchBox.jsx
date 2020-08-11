import React, { Component } from 'react';
import { MDBIcon, MDBCol } from 'mdbreact';

class SearchBox extends Component {
    render() {
        return (
            <MDBCol className="search-box">
                <div className="active-pink-3 active-pink-4">
                    <input 
                        className="form-control text-center" 
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search" 
                        onChange={this.props.handleChange}
                        style={{ width:'30vh' }}
        
                    />
                </div>
            </MDBCol>
        )
    }
}

export default SearchBox