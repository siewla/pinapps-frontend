import React, { Component } from 'react'

export class AppsInHorizontalList extends Component {
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
