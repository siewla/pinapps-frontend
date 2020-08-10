import React, {Component} from 'react'
import AppCard from './AppCard'
import SearchBox from './SearchBox'

export class AppList extends Component {
    constructor (props){
        super (props)
        this.state = {
            searchString: ''
        }
    }
    handleChange = event => {
        this.setState({
            searchString: event.target.value
        })
    }
    render(){
        const appLists = this.props.apps.filter(app =>{
            return (app.name.toLowerCase().includes(this.state.searchString.toLowerCase())||
            app.name.toLowerCase().includes(this.state.searchString.toLowerCase()))
        })
        return (
            <div>
                <SearchBox handleChange={this.handleChange}/>
                <div className="all-apps-container">
                {appLists.map(app =>
                    <AppCard 
                        key={app._id}
                        appId={app._id} 
                        name={app.name}
                        description={app.description}
                        url={app.url}
                        screenshot={app.screenshot}
                        category={app.category}
                        isLogin={this.props.isLogin}
                        likes={app.likes}
                        fetchApps={this.props.fetchApps}
                    />
                )}
                </div>
            </div>
            
        )
    }
        
}


export default AppList



