import React, { Component } from 'react'
import AppsInHorizontalList from '../../components/AppsInHorizontalList'

export class Main extends Component {
    constructor (props){
        super (props);
        this.state = {
            categories:[],
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
