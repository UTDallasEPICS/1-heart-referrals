import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            {/* <h1>We exists to coordinate the WHOLE community to maximize well-being in daily life, and respond to and recover from any community crisis.</h1> */}
            <h1>GET A REFERRAL TODAY !</h1>
            <div className="hero-btns">
                <Button className='btns' to="/login" buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                   <h1>LET'S START</h1> 
                </Button>

                {/* <Button className='btns' buttonStyle='btn--primary'
                    bettonSize='btn--large'
                >
                    WATCH TRAILER 
                    <i className='far fa-play-circle'/>
                </Button> */}
            </div>

        </div>
    )
}

export default HeroSection
