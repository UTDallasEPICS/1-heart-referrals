import React from 'react';
import './NetworkPartners.css';
import Navbar from './Navbar';
import url1 from '../components/images/1.png';
import url2 from '../components/images/2.png';
import url3 from '../components/images/3.png';
import url4 from '../components/images/4.png';
import url5 from '../components/images/5.png';
import url6 from '../components/images/6.png';
import url7 from '../components/images/7.png';
import url8 from '../components/images/8.png';
import url9 from '../components/images/9.png';
import url10 from '../components/images/10.png';
import url11 from '../components/images/11.png';
import url12 from '../components/images/12.png';
import url13 from '../components/images/13.png';
import url14 from '../components/images/14.png';
import url15 from '../components/images/15.png';
import url16 from '../components/images/16.png';
import url17 from '../components/images/17.png';
import url18 from '../components/images/18.png';
import url19 from '../components/images/19.png';
import url20 from '../components/images/20.png';
import url21 from '../components/images/21.png';
import url22 from '../components/images/22.png';



const NetworkPartners = () => {
  const partners = [
    { name: 'Partner 1', imageUrl: url1, link: '', buttonText: 'All in the Family services' },
    { name: 'Partner 2', imageUrl: url2, link: '', buttonText: 'Alliance of the Elite Youth Leadership' },
    { name: 'Partner 3', imageUrl: url3, link: '', buttonText: 'A Motivating Love' },
    { name: 'Partner 4', imageUrl: url4, link: 'https://cfhome.org/', buttonText: 'Christ Fellowship' },
    { name: 'Partner 5', imageUrl: url5, link: 'https://communitygardenkitchen.org/', buttonText: 'Community Garden Kitchen' },
    { name: 'Partner 6', imageUrl: url6, link: 'https://www.mckinneytexas.org/', buttonText: 'City of McKinney' },
    { name: 'Partner 7', imageUrl: url7, link: 'https://www.mckinneyfoodpantry.org/', buttonText: 'Community Food Pantry of McKinney' },
    { name: 'Partner 8', imageUrl: url8, link: 'https://fhcntx.org/', buttonText: 'Family Health Center on Virginia' },
    { name: 'Partner 9', imageUrl: url9, link: 'https://www.firstmckinney.com/', buttonText: 'First McKinney Baptist Church' },
    { name: 'Partner 10', imageUrl: url10, link: 'https://gracetochange.org/', buttonText: 'Grace to Change' },
    { name: 'Partner 11', imageUrl: url11, link: 'https://habitatcollincounty.org/', buttonText: 'Habitat for Humanity Collin County' },
    { name: 'Partner 12', imageUrl: url12, link: 'https://hopeclinicmckinney.org/', buttonText: 'Hope Clinic' },
    { name: 'Partner 13', imageUrl: url13, link: 'https://myhope.org/', buttonText: 'Hope Women\'s Center' },
    { name: 'Partner 14', imageUrl: url14, link: 'https://hugscafe.org/', buttonText: 'Hugs Cafe' },
    { name: 'Partner 15', imageUrl: url15, link: 'https://liftrandr.org/', buttonText: 'Lift R&R' },
    { name: 'Partner 16', imageUrl: url16, link: 'https://littleheartsofhope.org/', buttonText: 'Little Hearts of Hope' },
    { name: 'Partner 17', imageUrl: url17, link: 'https://www.lovelifefoundation.com/', buttonText: 'Love Life Foundation' },
    { name: 'Partner 18', imageUrl: url18, link: 'https://www.mckinneyisd.net/', buttonText: 'McKinney Independent School District' },
    { name: 'Partner 19', imageUrl: url19, link: 'https://www.mckinneylfp.org/', buttonText: 'McKinney Little Free Pantry' },
    { name: 'Partner 20', imageUrl: url20, link: 'https://www.starry.org/', buttonText: 'Starry' },
    { name: 'Partner 21', imageUrl: url21, link: 'https://swingfoundationinc.org/', buttonText: 'SWING Foundation Inc' },
    { name: 'Partner 22', imageUrl: url22, link: 'https://www.tltleaders.org/', buttonText: 'TLT - Tomorrow\'s Leaders Today' },
  ];

  return (
    <div className='network-partners'>
      <Navbar />
      <div className='network-content'>
      <h><b>Network Partners</b></h>
      </div>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <img src={partner.imageUrl} alt={`Partner ${index + 1}`} />
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <button>{partner.buttonText}</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NetworkPartners;