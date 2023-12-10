import React from 'react';
import './NetworkPartners.css';
import Navbar from './Navbar';

const NetworkPartners = () => {
  const partners = [
    { name: 'Partner 1', imageUrl: 'url1', link: 'https://www.aitfservices.org/', buttonText: 'All in the Family services' },
    { name: 'Partner 2', imageUrl: 'url2', link: 'https://aeyleadership.org/', buttonText: 'Alliance of the Elite Youth Leadership' },
    { name: 'Partner 3', imageUrl: 'url3', link: 'https://www.amotivatinglove.org/3', buttonText: 'A Motivating Love' },
    { name: 'Partner 4', imageUrl: 'url4', link: 'https://cfhome.org/', buttonText: 'Christ Fellowship' },
    { name: 'Partner 5', imageUrl: 'url5', link: 'https://communitygardenkitchen.org/', buttonText: 'Community Garden Kitchen' },
    { name: 'Partner 6', imageUrl: 'url6', link: 'https://www.mckinneytexas.org/', buttonText: 'City of McKinney' },
    { name: 'Partner 7', imageUrl: 'url7', link: 'https://www.mckinneyfoodpantry.org/', buttonText: 'Community Food Pantry of McKinney' },
    { name: 'Partner 8', imageUrl: 'url8', link: 'https://fhcntx.org/', buttonText: 'Family Health Center on Virginia' },
    { name: 'Partner 9', imageUrl: 'url9', link: 'https://www.firstmckinney.com/', buttonText: 'First McKinney Baptist Church' },
    { name: 'Partner 10', imageUrl: 'url10', link: 'https://gracetochange.org/', buttonText: 'Grace to Change' },
    { name: 'Partner 11', imageUrl: 'url11', link: 'https://habitatcollincounty.org/', buttonText: 'Habitat for Humanity Collin County' },
    { name: 'Partner 12', imageUrl: 'url12', link: 'https://hopeclinicmckinney.org/', buttonText: 'Hope Clinic' },
    { name: 'Partner 13', imageUrl: 'url13', link: 'https://myhope.org/', buttonText: 'Hope Women\'s Center' },
    { name: 'Partner 14', imageUrl: 'url14', link: 'https://hugscafe.org/', buttonText: 'Hugs Cafe' },
    { name: 'Partner 15', imageUrl: 'url15', link: 'https://liftrandr.org/', buttonText: 'Lift R&R' },
    { name: 'Partner 16', imageUrl: 'url16', link: 'https://littleheartsofhope.org/', buttonText: 'Little Hearts of Hope' },
    { name: 'Partner 17', imageUrl: 'url17', link: 'https://www.lovelifefoundation.com/', buttonText: 'Love Life Foundation' },
    { name: 'Partner 18', imageUrl: 'url18', link: 'https://www.mckinneyisd.net/', buttonText: 'McKinney Independent School District' },
    { name: 'Partner 19', imageUrl: 'url19', link: 'https://www.mckinneylfp.org/', buttonText: 'McKinney Little Free Pantry' },
    { name: 'Partner 20', imageUrl: 'url20', link: 'https://www.starry.org/', buttonText: 'Starry' },
    { name: 'Partner 21', imageUrl: 'url21', link: 'https://swingfoundationinc.org/', buttonText: 'SWING Foundation Inc' },
    { name: 'Partner 22', imageUrl: 'url22', link: 'https://www.tltleaders.org/', buttonText: 'TLT - Tomorrow\'s Leaders Today' },
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