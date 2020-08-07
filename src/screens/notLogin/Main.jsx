import React, { Component } from 'react'
import AppsInHorizontalList from '../../components/AppsInHorizontalList'
import { Redirect } from 'react-router-dom';

export class Main extends Component {
    constructor (props){
        super (props);
        this.state = {
            categories:[],
            redirect: false
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

    // redirectHandler = () =>{
    //     this.setState({ redirect: true })
    //     this.renderRedirect()
    // }

    // renderRedirect = () =>{
    //     if (this.state.redirect){
    //         return <Redirect to ='/apps/new' />
    //     }
    // }

    render() {
        return (
            <div>
                {this.state.categories.map(category=>
                
                <div key={category._id}>
                    <a href={'/apps/category/'+category.name}><h1 className="category-heading">{category.name}</h1></a>
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
