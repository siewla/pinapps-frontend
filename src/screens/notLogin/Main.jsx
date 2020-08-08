import React, { Component } from 'react'
import AppsInHorizontalList from '../../components/AppsInHorizontalList'

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
                    {this.props.isLogin? <h4 className="greeting-text">Hi, <span className="small-name-text">{this.state.userData.name}</span></h4>: null}
                </div>
                {this.state.categories.map(category=>
                <div key={category._id}>
                    <a href={'/apps/category/'+category._id}><h1 className="category-heading">{category.name}</h1></a>
                    <AppsInHorizontalList 
                        key={category.value}
                        categoryID={category._id}
                        categoryName={category.name}
                    />
                </div> 
                )}
            </div>
        )
    }
}

export default Main
