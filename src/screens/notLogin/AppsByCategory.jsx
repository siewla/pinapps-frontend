import React, { Component } from 'react'
import ShowAll from '../../components/ShowAll'

export class AppsByCategory extends Component {
    render() {
        return (
            <div>
                <h1 className="category-heading">{this.props.match.params.categoryName}</h1>
                <ShowAll 
                    categoryName={this.props.match.params.categoryName}
                />
            </div>
        )
    }
}

export default AppsByCategory
