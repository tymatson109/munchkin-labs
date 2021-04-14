import React from 'react'
import './Header.css';

const Header = () => {

    const homeClicked = () => {
        window.history.pushState({}, '', '/');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    const aboutClicked = () => {
        window.history.pushState({}, '', '/about');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    const jobsClicked = () => {
        window.history.pushState({}, '', '/jobs');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }


    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://static.wixstatic.com/media/40b853_4843693b6823405c86f56c888c7f071f~mv2.jpg/v1/fill/w_400,h_136,al_c,q_80,usm_0.66_1.00_0.01/Logo.webp" />
            </div>
            <div className="header__nav">
                <div onClick={homeClicked} className="header__navItem">Home</div>
                <div onClick={aboutClicked} className="header__navItem">About</div>
                <div onClick={jobsClicked} className="header__navItem">Jobs</div>
            </div>
        </div>
    )
}

export default Header
