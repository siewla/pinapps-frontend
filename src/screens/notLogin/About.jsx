import React, { Component } from 'react'
import CollapseButton from '../../components/CollapseButton'

export class About extends Component {
    state ={
        FAQ:[
            {
                "Question": "How much does PinApps Cost?",
                "Answer" : "It is free."
            },
            {
                "Question": "Question 2",
                "Answer" : "Answer 2"
            },
            {
                "Question": "Question 3",
                "Answer" : "Answer 3"
            },
            {
                "Question": "Question 4",
                "Answer" : "Answer 4"
            },
            {
                "Question": "Question 5",
                "Answer" : "Answer 5"
            },
        ]    
    }

    render() {
        return (
            <div>
                <h1 className="category-heading">About Us</h1>
                <div className="about-container"> 
                    <h3>
                        <span className="red-text">PinsApp</span> is the application that allowing you to save/pin 
                        your favorite apps easily and it also acts as platform for you 
                        to find the best apps in each category.
                    </h3>
                    <h3>PinsApp is proudly bought to you by <a 
                        href="https://github.com/neocheekiong/">Neo Chee Kiong</a> and <a 
                        href="https://github.com/siewla/">Pang Siew La</a>.
                    </h3>
                </div>
                <h1 className="category-heading">Frequently Asked Questions</h1>
                <div className="about-container">
                    {this.state.FAQ.map(item =>
                        <CollapseButton 
                            question = {item.Question}
                            answer = {item.Answer}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default About
