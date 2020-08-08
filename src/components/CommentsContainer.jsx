import React, { Component } from 'react'
import ShowComment from './ShowComment'
import { animateScroll } from 'react-scroll'

export class CommentsContainer extends Component {
    constructor(props){
        super(props)
            this.state = {
                comments:[]
            }
    }

    fetchComments = async()=>{
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/comments/app/${this.props.appId}`)
        const results = await response.json();
        this.setState({
            comments: results
        })
    }

    scrollToTop =() =>{
        animateScroll.scrollToTop({
            containerId: "comments-container"
        })
    }

    componentDidUpdate(){
        this.scrollToTop()
    }

    componentDidMount (){
        this.fetchComments()
        this.scrollToTop()
    }

    render() {
        return (
            <div className="comments-container" id="comments-container">
                {this.state.comments.map(comment => 
                <ShowComment 
                    author={comment.author} 
                    comment={comment.comment} 
                    date={comment.createdAt === comment.updatedAt ? comment.createdAt : comment.updatedAt}
                />
                )}
            </div>
        )
    }
}

export default CommentsContainer
