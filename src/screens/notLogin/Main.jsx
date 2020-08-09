import React, { Component } from 'react'
import AppsInHorizontalList from '../../components/AppsInHorizontalList'
import { MDBBtn } from 'mdbreact';
import AddAppModal from '../../components/AddAppModal'
import UserProfile from '../../components/UserProfile'


export class Main extends Component {
    constructor (props){
        super (props);
        this.state = {
            categories:[],
            userData:JSON.parse(localStorage.getItem('user'))
        }
    }

    fetchCategories = async () =>{
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/categories/all`)
        const results = await response.json();
        this.setState({categories:results})
    }

    componentDidMount (){
        this.fetchCategories()
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
                    </div> : null}
                </div>
                {this.state.categories.map(category=>
                <div key={category._id}>
                    <AppsInHorizontalList 
                        key={category.value}
                        categoryID={category._id}
                        categoryName={category.name}
                        color="none"
                        isLogin={this.props.isLogin}
                    />
                </div> 
                )}
            </div>
        )
    }
}

export default Main
