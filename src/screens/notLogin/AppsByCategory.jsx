import React, { Component } from 'react'
import ShowAll from '../../components/ShowAll'

export class AppsByCategory extends Component {
    constructor (props){
        super (props);
        this.state = {
            categoryName:''
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
        return (
            <div>
                <ShowAll 
                    categoryID={this.props.match.params.categoryID}
                    categoryName={this.state.categoryName}
                />
            </div>
        )
    }
}

export default AppsByCategory