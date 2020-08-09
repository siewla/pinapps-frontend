import React, { Component } from 'react'
import ShowComment from './ShowComment'
import { animateScroll } from 'react-scroll'
import "./scrollbar.css";

export class CommentsContainer extends Component {
    constructor(props){
        super(props)
            this.state = {
                comments:[]
            }
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
        this.props.fetchComments()
        this.scrollToTop()
    }

    render() {
        return (
            <div className="comments-container scrollbar scrollbar-black bordered-black square" id="comments-container">
                {this.props.comments.map(comment => 
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
