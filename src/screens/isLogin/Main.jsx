import React, { Component } from 'react'

export class Main extends Component {
    constructor (){
        super()
        this.state={
            userData:{}
        }
    }

    fetchUserData = async() =>{
        const results = JSON.parse(localStorage.getItem('user'))
        this.setState({
            userData:results
        })

    }

    componentDidMount(){
        this.fetchUserData()
    }

    render() {
        // console.log(typeof(this.state.userData))
        return (
            <div>
                <h1>Welcome! {this.state.userData.name}</h1>
            </div>
        )
    }
}

export default Main
