import React, { Component } from 'react'
import ShowAll from '../../components/ShowAll'

export class AppsByCategory extends Component {
    render() {
        return (
            <div>
                <ShowAll 
                    categoryID={this.props.match.params.categoryID}
                />
            </div>
        )
    }
}

export default AppsByCategory
