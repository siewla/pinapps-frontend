import React, { Component } from 'react'
import ShowAppPopOut from './ShowAppPopOut'

export class AppsInHorizontalList extends Component {
    constructor(props){
        super(props);
        this.state = {
            apps:[]
        }
    }

    fetchApps = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/apps/category/${this.props.categoryID}`)
        const results = await response.json ();
        this.setState({apps:results})
    }

    componentDidMount (){
        this.fetchApps()
    }

    render() {
        if (this.state.apps!==null){
            let subsetApps = this.state.apps.slice(0,3)
            return(
                <div className="horizontal-apps-container">
                    {subsetApps.map((app,index)=>
                    <ShowAppPopOut 
                        key={app._id}
                        screenshot={app.screenshot}
                        appName={app.name}
                        appDetails={app}
                    />
                    // <div key={app._id} className="horizontal-app-card">
                    //     <img className="horizontal-app-image" src={app.screenshot}  alt={app.name}></img> 
                    // </div>
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
