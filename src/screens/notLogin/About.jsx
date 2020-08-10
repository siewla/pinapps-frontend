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
        ],
        useCase: 
            <div>
                <h2>
                    Have you ever formatted your computer and now you cannot remember which apps you normally use? Especially the apps that you don’t use so often but when you do, you rely 100% on?
                </h2>
                <h2>
                    Have you ever wanted to look for an app for a specific use, but have no idea which app it was that your friend mentioned? Or worse, you have forgotten which was the friend that recommended the app to you in the first place?
                </h2>
            </div>,
        about:  <h3>
                    <span className="red-text">PinApps</span> is the application that allowing you to save/pin 
                    your favorite apps easily and it also acts as platform for you 
                    to find the best apps in each category.
                </h3>,
        attribution: <h3>PinsApp is proudly bought to you by <a 
                        href="https://github.com/neocheekiong/">Neo Chee Kiong</a> and <a 
                        href="https://github.com/siewla/">Pang Siew La</a>.
                    </h3>
    }

    render() {
        return (
            <div className="main-container">
                <h1 className="category-heading">About Us</h1>
                <div className="about-container"> 
                    {this.state.useCase}
                    {this.state.about}
                    {this.state.attribution}
                </div>
                <h1 className="category-heading">Frequently Asked Questions</h1>
                <div className="about-container">
                    {this.state.FAQ.map((item,index) =>
                        <CollapseButton 
                            key ={index}
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
