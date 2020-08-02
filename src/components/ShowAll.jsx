import React, { Component } from 'react'
import AppsList from './AppsList'
import './styles/showall.css'

export class ShowAll extends Component {
    constructor(props){
        super(props);
        this.state = {
            apps:[
            {
                name: "AppOne",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                url: "https://www.google.com/",
                screenshot: "https://images.unsplash.com/photo-1568144628871-ccbb00fc297c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                category: "one",
                _id: "1234"
            },
            {
                name: "AppTwo",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                url: "https://www.google.com/",
                screenshot: "https://images.unsplash.com/photo-1568144628871-ccbb00fc297c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                category: "one",
                _id: "123455"
            },
            {
                name: "AppThree",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                url: "https://www.google.com/",
                screenshot: "https://images.unsplash.com/photo-1568144628871-ccbb00fc297c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                category: "one",
                _id: "1234w4"
            },
            {
                name: "AppFour",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                url: "https://www.google.com/",
                screenshot: "https://images.unsplash.com/photo-1568144628871-ccbb00fc297c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                category: "one",
                _id: "123434"
            },
            ]
        }
    }

    fetchApps = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/apps/all}`)
        const results = await response.json ();
        this.setState({apps:results})
    }

    componentDidMount (){
        this.fetchApps()
    }

    render() {
        return (
            <div >
                <h1>All Apps</h1>
                <AppsList apps={this.state.apps} />
            </div>
        )
    }
}

export default ShowAll
