import React, { Component } from 'react'
import AppsList from './AppsList'
import './styles/showall.css'

export class ShowAll extends Component {
    constructor(props){
        super(props);
        this.state = {
            apps:[]
        }
    }

    fetchApps = async () => {
        // console.log('Fetching Apps')
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/apps/category/${this.props.categoryID}`)
        // console.log(response)
        const results = await response.json ();
        // console.log('Apps Fetched:', results)
        this.setState({apps:results})
    }

    componentDidMount (){
        this.fetchApps()
    }

    render() {
        return (
            <div >
                <h1 className="category-heading">{this.props.categoryName}</h1>
                <AppsList apps={this.state.apps} />
            </div>
        )
    }
}

export default ShowAll
