import React from 'react'
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about__text">
                <h1>About</h1>
                <p>Why do current social media companies try to make their
                    <br /> product as addicting as possible?  The answer is, in order
                    <br /> to generate revenue they need users on their platform to
                    <br /> view ads.  Here at Munchkin Labs with our focus on
                    <br /> bringing both people and their communities we can not
                    <br /> take to same approach to generating revenue that other
                    <br /> companies before us have taken.  Instead, our method of
                    <br /> advertising will be focused on growing our community of
                    <br /> users by increasing their interaction within their
                    <br /> communities.  We hope to make our app beneficial for
                    <br /> growing communities and small businesses by getting
                    <br /> people out of their house and into their community, into
                    <br /> their local restaurants and we will tailor our advertising to
                    <br /> meet different specific regions. </p>
            </div>
            <div className="about__image">
                <img src="https://static.wixstatic.com/media/11062b_adf3deabf46e4d3aa81fcc9433171dca~mv2.jpg/v1/fill/w_1440,h_1898,al_c,q_90,usm_0.66_1.00_0.01/11062b_adf3deabf46e4d3aa81fcc9433171dca~mv2.webp" />
            </div>
        </div>
    )
}

export default About
