import React, { Component } from 'react'
import AddAppModal from '../../components/AddAppModal'
import UserProfile from '../../components/UserProfile'
import { Redirect } from 'react-router-dom';
export class MyApps extends Component {
    constructor (props){
        super (props);
        this.state = {
            userData:JSON.parse(localStorage.getItem('user'))
        }
    }

    render() {
        return (
            <div className="main-container">
                <div>
                    {this.props.isLogin? 
                    <div className="login-main-header">
                        <UserProfile 
                            user={this.state.userData}
                        />
                        <AddAppModal />
                    </div> : <Redirect to='/' />}
                </div>
            </div>
        )
    }
}

export default MyApps
