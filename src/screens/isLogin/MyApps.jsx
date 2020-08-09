import React, { Component } from 'react'
import AddAppModal from '../../components/AddAppModal'
import UserProfile from '../../components/UserProfile'
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import AppList from '../../components/AppsList';

export class MyApps extends Component {
    constructor (props){
        super (props);
        this.state = {
            userData:JSON.parse(localStorage.getItem('user')),
            apps: []
        }
    }

    fetchMyApps = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/liked-apps/${this.state.userData._id}`)
        const results = await response.json()
        this.setState({
            apps: results
        })
    }

    componentDidMount() {
        this.fetchMyApps()
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
                    <AppList apps={this.state.apps} isLogin={this.props.isLogin} fetchApps={this.fetchMyApps}/>
                </div>
            </div>
        )
    }
}

export default MyApps
