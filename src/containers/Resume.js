import React from "react";
// import './Resume.css';

const Resume = () => {
  return (
   <div className='resume'>
     <div className='resume__segment'>
      <h4>MAY 2019 - PRESENT</h4>
      <h2>TABOOLA</h2>
      <h3>Solutions Engineer</h3>
      <ul>
        <li>Scope, develop, QA, and launch custom Javascript & CSS integrations for premium publisher clients such as NBC</li>
        <li>Consult with clients on best fit solutions and complex debugging for web and mobile app products</li>
        <li>Develop internal tools (full stack React applications) to optimize workflows and drive efficiency</li>
        <li>Collaborate with Product and R&D on data driven product improvements and feature requests</li>
        <li>As subject matter expert for mobile SDK and Newsroom products, provide ongoing trainings to the Professional Services team and mentor teammates on complex issues to identify product bugs and minimize R&D escalations</li>
        <li>Facilitate A/B testing to optimize partner integrations</li>
        <li>Manage various initiatives such as Tech Talks to drive knowledge sharing and collaboration between teams</li>
      </ul>
     </div>
     <div className='resume__segment'>
      <h4>MARCH 2019 - MAY 2019</h4>
      <h2>MINDS + ASSEMBLY</h2>
      <h3>Developer Intern</h3>
      <ul>
        <li>Coded pixel perfect products with CSS, HTML, Javascript</li>
        <li>Consulted with design and production teams on UX/UI best practices and capabilities</li>
      </ul>
     </div>
     <div className='resume__segment'>
      <h4>AUGUST 2015 - AUGUST 2018</h4>
      <h2>BAKER MCKENZIE LLP</h2>
      <h3>Admin. Assistant + Project Coordinator (NY, 2017-2018)</h3>
      <h3>Legal Admin. Specialist (DC, 2015-2017)</h3>
      <ul>
        <li>Worked cross functionally between Operations, HR, and Finance to support overall business operations of the office, manage projects, and coordinate global meetings</li>
      </ul>
     </div>
     <div className='resume__segment'>
      <h4>JULY 2013 - JULY 2015</h4>
      <h2>ASSOC. OF LEGAL ADMINS CAPITAL CHAPTER</h2>
      <h3>Meeting Planner + Membership Coordinator</h3>
      <ul>
        <li>Managed programming for 400+ chapter members and 60+ business partners; Coordinated 35+ events annually; Led the membership recruitment and retention program</li>
      </ul>
     </div>

   </div>
  );
};

export default Resume;