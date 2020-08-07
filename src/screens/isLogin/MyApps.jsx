import React, { Component } from 'react'
import { isAuth } from '../../helpers/auth.services'
import { Redirect } from 'react-router-dom'
export class MyApps extends Component {
    render() {
        return (
            <div>
                {isAuth()? null:<Redirect to ='/'/>}
                <h1 className="category-heading">MyApps</h1>
            </div>
        )
    }
}

export default MyApps
