import React, { Component } from 'react'
import ShowAll from '../../components/ShowAll'
import AddAppModal from '../../components/apps/AddAppModal'
import UserProfile from '../../components/UserProfile'

export class AppsByCategory extends Component {
    constructor (props){
        super (props);
        this.state = {
            categoryName:'',
            userData:JSON.parse(localStorage.getItem('user'))
        }
    }

    fetchCategory = async () =>{
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/categories/${this.props.match.params.categoryID}`)
        const results = await response.json();
        this.setState({categoryName:results.name})
    }

    componentDidMount (){
        this.fetchCategory()
    }

    render() {
        // console.log("props of apps by cat", this.props)
        return (
            <div className="main-container">
                <div>
                    {this.props.isLogin? 
                    <div className="login-main-header">
                        <UserProfile 
                            user={this.state.userData}
                        />
                        <AddAppModal />
                    </div> : null}
                </div>
                <ShowAll 
                    categoryID={this.props.match.params.categoryID}
                    categoryName={this.state.categoryName}
                    isLogin ={this.props.isLogin}
                />
            </div>
        )
    }
}

export default AppsByCategory
