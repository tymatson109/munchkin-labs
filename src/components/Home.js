import React from 'react'
import { useState } from 'react';
import { db } from '../firebase';
import './Home.css'

const Home = () => {

    const [userEmail, setUserEmail] = useState()

    const learnClicked = () => {
        window.history.pushState({}, '', '/about');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    
    const emailSubmit = (e) => {
        e.preventDefault()
        db.collection("emails").add({
            email: userEmail
        })

        setUserEmail('')
    }

    return (
        <div className="home">
            <div className="home__main">
                <div className="home__text">
                    <h4 className="home__title">For a brighter, better<br /> connected world<br /> Meep</h4>
                    <p>For most social media companies the primary objective of their app is to keep the user on the app for
                        <br /> as much time as possible.  Here at Munchkin Labs, with our first product Meep we are taking a
                        <br /> wildly different approach.  Our goal with Meep is to build up the same human connections that
                        <br /> Facebook or Instagram allow in the age of the internet but to get our user out into the world rather
                        <br /> than scrolling through endless posts and tweets. </p>
                    <button onClick={learnClicked}><strong>Learn More</strong></button>
                </div>
            </div>
            <div className="home__meep">
                <div className="home__meepText">
                    <h4>Meep</h4>
                    <div className="home__meepCol">
                        <div className="home__meepTextCol">
                            <h4>Connect With Your<br /> Friends</h4>
                            <p>See when your friends are<br /> available, and what they want to<br /> do.</p>
                            <h4>Meet New People</h4>
                            <p>Meet new people  who enjoy<br /> the same things as you.</p>
                        </div>
                        <div className="home__meepTextCol">
                            <h4>Engage with your<br /> community</h4>
                            <p>Explore new activities and<br /> restaurants in your area</p>
                            <h4>Become a Meeper</h4>
                            <p>Join a growing community of<br /> people looking to get of their<br /> butt and into action as we strive<br /> to make the most of our time in<br /> this beautiful world we live in</p>
                        </div>
                    </div>
                </div>
                <div className="home__meepImage">
                    <img src="https://static.wixstatic.com/media/05420b6c679f4caf9a29f123456fbd1a.jpg/v1/fill/w_1440,h_1744,al_c,q_90,usm_0.66_1.00_0.01/05420b6c679f4caf9a29f123456fbd1a.webp" />
                </div>
            </div>
            <div className="home__footer">
                <div className="home__footerContent">
                    <h1>Join our newsletter!</h1>
                    <form onSubmit={emailSubmit}>
                        <input value={userEmail} onChange={(e) => setUserEmail(e.currentTarget.value)} type="text" placeholder="Email Address"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
