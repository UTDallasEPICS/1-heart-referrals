import React from 'react';
import './Contact.css';
import Navbar from './Navbar';


const Contact = () => {
  return (
    <div className='contact'>
      <Navbar/>
      <h1>
        Contact One Heart McKinney
      </h1>
      <p>
        To Donate, Partner, Sponsor, or Volunteer with us: 
      </p>
      <p>
        email: info@oneheartmckinney.org
      </p>
      <p>
        PO Box 3784, McKinney, TX 75070
      </p>
      <p>
        (214)799-1147
      </p>
      <p>
        EIN: 87-3520539
      </p>
    </div>
  );
}

export default Contact;
