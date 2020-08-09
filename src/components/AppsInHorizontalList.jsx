import React, { Component } from 'react'
import ShowAppPopOut from './ShowAppPopOut'
import AppCard from './AppCard';

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
                <div className="category-container" style={{backgroundColor: `${this.props.color}`}}>
                    <a href={'/apps/category/'+this.props.categoryID}><h1 className="category-heading-white text-underline">{this.props.categoryName}</h1></a>
                    <div className="horizontal-apps-container">
                        {subsetApps.map((app,index)=>
                            <div>
                                <AppCard 
                                    key={app._id}
                                    screenshot={app.screenshot}
                                    name={app.name}
                                    description={app.description}
                                    url={app.url}
                                    appId={app._id}
                                    isLogin={this.state.isLogin}
                                />
                            </div> 
                        )}
                    </div>
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
