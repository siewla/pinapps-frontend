import React, { Component } from 'react'
import AppCard from './AppCard'

export default function AppList (props) {
    return (
        <div className="all-apps-container">
            {props.apps.map(app =>
                <AppCard 
                    key={app._id} 
                    name={app.name}
                    description={app.description}
                    url={app.url}
                    screenshot={app.screenshot}
                    category={app.category}
                />
            )}
        </div>
    )    
}


