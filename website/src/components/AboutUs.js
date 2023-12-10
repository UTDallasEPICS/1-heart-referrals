import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        <p>Mission: One Heart McKinney exists to coordinate the WHOLE community to maximize well-being in daily life, and respond to and recover from any community crisis.</p>
        <p className="goal-paragraph">
        <b>What does the WHOLE community mean?</b>
          <ul>
            <li>Individuals and families, including those with access and functional needs</li>
            <li>Businesses</li>
            <li>Faith-based organizations and places of worship</li>
            <li>Nonprofit groups</li>
            <li>Schools and Academia</li>
            <li>All levels of government</li>
            <li>Media</li>
          </ul>
        </p>
        <p>
        Our goal is to coordinate resources across the WHOLE community of McKinney to help our friends and neighbors experiencing difficulties to access all the services they need, while only telling their story <b>one time.</b>
        </p>
      </div>
    </div>
  );
}

export default AboutUs;