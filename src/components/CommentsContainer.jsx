import React, { Component } from 'react'
import ShowComment from './ShowComment'
import { animateScroll } from 'react-scroll'
import "./scrollbar.css";

export class CommentsContainer extends Component {
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
                {!this.props.isLogin && <a href='/users/login'>Login to see more comments</a>}
                {this.props.comments.map((comment, index) => 
                { 
                    if(!this.props.isLogin && index > 2) {
                        return ''
                    } 
                    return <ShowComment
                        key={comment._id}
                        commentId={comment._id}
                        author={comment.author} 
                        comment={comment.comment} 
                        date={comment.createdAt === comment.updatedAt ? comment.createdAt : comment.updatedAt}
                        fetchComments={this.props.fetchComments}
                        isLogin={this.props.isLogin}
                    />}
                )}
                
            </div>
        )
    }
}

export default CommentsContainer
