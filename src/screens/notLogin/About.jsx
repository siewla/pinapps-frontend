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
                "Question": "How do i activate my account?",
                "Answer" : "A valid email is needed for activation, an activation link will be sent to the email upon registration."
            },
            {
                "Question": "What if forgot my Pinapps Password?",
                "Answer" : "Reset your password by email here, https://pinapps.herokuapp.com/users/password/forget"
            },
            {
                "Question": "How do i download the Pinapps App?",
                "Answer" : "No installation needed, it is a browser based application."
            },
            {
                "Question": "How can i get support?",
                "Answer" : "Please contact us via email: pinappsproject@gmail.com"
            },
        ],
        useCase: 
            <div className="about-text">
                <h4 className="about-text">
                    Have you ever formatted your computer and now you cannot remember which apps you normally use? 
                    
                </h4>
                <h4 className="about-text">
                    Especially the apps that you don’t use so often but when you do, you rely 100% on?
                </h4>
                <h4 className="about-text">
                    Have you ever wanted to look for an app for a specific use, 
                </h4>
                <h4 className="about-text">
                    but have no idea which app it was that your friend mentioned?
                </h4>
                <h4 className="about-text">
                    Or worse, you have forgotten which was the friend that recommended the app to you in the first place?
                </h4>
            </div>,
        about:  <h4 className="about-text">
                   <h2 className="red-text">PinApps</h2> The application that allowing you to save/pin 
                    your favorite apps easily and it also acts as platform for you 
                    to find the best apps in each category.
                </h4>,
        attribution: <h6 className="about-text">PinsApp is proudly bought to you by <a 
                        href="https://github.com/neocheekiong/">Neo Chee Kiong</a> and <a 
                        href="https://github.com/siewla/">Pang Siew La</a>.
                    </h6>
    }

    render() {
        return (
            <div className="main-container">
                <h1 className="category-heading">About Us</h1>
                <div className="about-container"> 
                    {this.state.useCase}
                    <hr className="hr" />
                    {this.state.about}
                    <hr className="hr" />
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
