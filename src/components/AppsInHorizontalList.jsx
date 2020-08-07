import React, { Component } from 'react'

export class AppsInHorizontalList extends Component {
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
                name: "AppThree",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                url: "https://www.google.com/",
                screenshot: "https://images.unsplash.com/photo-1568144628871-ccbb00fc297c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                category: "one",
                _id: "1234w4"
            },
            ]
        }
    }

    fetchApps = async () => {
        // console.log('Fetching Apps')
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/apps/category/${this.props.categoryName}`)
        // console.log(response)
        const results = await response.json ();
        // console.log('Apps Fetched:', results)
        this.setState({apps:results})
    }

    // componentDidMount (){
    //     this.fetchApps()
    // }

    render() {
        // console.log(this.state.apps)
        if (this.state.apps!==null){
            let subsetApps = this.state.apps.slice(0,3)
            return(
                <div className="horizontal-apps-container">
                    {subsetApps.map((app,index)=>
                    <div key={app._id} className="horizontal-app-card">
                        <img className="horizontal-app-image" src={app.screenshot} key={app._id} alt={app.name}></img> 
                    </div>
                )}
                </div>
            )
        } 
        return (
            <div className="horizontal-apps-container">

            </div>
        )
            
    }
}

export default AppsInHorizontalList
