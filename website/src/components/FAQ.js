import React from 'react';
import './FAQ.css';
import Navbar from './Navbar';

const FAQ = () => {
  return (
    <div className='faq'>
      <Navbar />
      <div className="faq-content">
        <h1>FAQ</h1>
        
        <div className="faq-item">
          <p>
            <b>What is One Heart McKinney (OHM)?</b>
          </p>
          <p>
          The informal One Heart McKinney (OHM) collaboration initially formed in March 2020 as a response to the early COVID crisis, when leaders from across McKinney came together on a weekly basis to assess current needs and rally resources to address them. Since the beginning of the pandemic, the group raised and distributed almost $200k in grants to support this mission.          
          </p>
          <p>
          The initial group of leaders included representatives from McKinney city government, businesses, MISD, first responders and law enforcement, nonprofits, and faith communities. Based on the trust that was built through this collaborative experience, the group decided to continue working together in a more formalized manner to coordinate those seeking to address on-going community needs, as well as to remain mobilized for future crises that occur.          
          </p>
          <p>
          The OHM effort will focus on five core needs to maximize well-being in daily life, including food and hygiene; health, including physical, mental, and spiritual; housing; economic stability; and education. These five core needs were initially identified in a 2019 study performed by The Institute for Urban Policy Research at the University of Texas at Dallas, funded by the McKinney Alliance.          
          </p>
          <p>
          The McKinney community currently has many resources in place to address these five core needs, but there is significant opportunity for us to better coordinate our efforts to maximize the impact of these resources on the community well-being. This is objective driving the creation of OHM.
          </p>

        </div>

        <div className="faq-item">
          <p>
            <b>How is OHM funded?</b>
          </p>
          <p>
          Currently, OHM is funded through private donations from individuals and nonprofits.
          </p>
        </div>

        <div className="faq-item">
          <p>
            <b>How will this benefit the city, or a nonprofit, or a person in need?</b>
          </p>
          <p>
          How will this benefit the city, or a nonprofit, or a person in need?
          </p>
          <p>
          One Heart McKinney aims to streamline all aspects of seeking support for folks in need which starts with the creation of a single intake process. Easier access to services will be available through a clear and comprehensive website. Additionally, OHM will create value for partner organizations by providing training and infrastructure support, driving efficiencies of scale through shared resources, and broadening community awareness of the resources that OHM partners provide. As a long term goal, OHM seeks to create a campus where several nonprofits can collocate to better serve the community in need.
          </p>
          <p>
          There are currently more than 100 similar collaboration models throughout the United States, and OHM intends to learn from these models and leverage best practices to organize support our McKinney community.
          </p>

        </div>

        <div className="faq-item">
          <p>
            <b>Who is in charge of OHM?</b>
          </p>
          <p>
          One Heart McKinney is governed by a board of McKinney business, faith, civic, and nonprofit leaders, who have selected Scott Elliott, former Executive Director of Community Lifeline Center (CLC), to serve as Executive Director. Scott previously served on the McKinney City Council for four years and on the McKinney Community Development Board for four years. He has extensive business experience in the corporate sector and startup environments.
          </p>
        </div>


        <div className="faq-item">
          <p>
            <b>What makes this different from other attempts at collaboration in the past?</b>
          </p>
          <p>
          While OHM is not the first to conceive this kind of effort, the COVID-19 crisis fostered a unique level of collaboration and buy-in among city government, business, school, first responders and law enforcement, nonprofit, and faith leaders in McKinney that has positioned this effort to succeed. We hope to build on that trust and relational equity in a shared vision to unite our entire community to maximize well-being.
          </p>
        </div>


        <div className="faq-item">
          <p>
            <b>Is OHM hiring?</b>
          </p>
          <p>
          At this time, OHM is not hiring.
          </p>
        </div>

        <div className="faq-item">
          <p>
            <b>How do I get help or refer someone?</b>
          </p>
          <p>
          If you are in need of services, please get a referral in the Home page, and we will help connect you to the services you need.
          </p>
        </div>


      </div>
    </div>
  );
}

export default FAQ;