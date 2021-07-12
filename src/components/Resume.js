import React from "react";
import './Resume.css';

const Resume = () => {
  return (
   <div className='resume'>
     <div className='resume__segment'>
      <h4>MAY 2019 - PRESENT</h4>
      <h2>
        <a href="https://www.taboola.com/" target="_blank">TABOOLA</a></h2>
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
      <h2><a href="https://www.mna.co/" target="_blank">MINDS + ASSEMBLY</a></h2>
      <h3>Developer Intern</h3>
      <ul>
        <li>Coded pixel perfect products with CSS, HTML, Javascript</li>
        <li>Consulted with design and production teams on UX/UI best practices and capabilities</li>
      </ul>
     </div>
     <div className='resume__segment'>
      <h4>SEPTEMBER 2018 - JANUARY 2019</h4>
      <h2><a href="https://www.flatironschool.com/" target="_blank">FLATIRON SCHOOL</a></h2>
      <h3>Student, Web Development Immersive</h3>
      <ul>
        <li>describe flatiron here</li>
      </ul>
     </div>
     <div className='resume__segment'>
      <h4>JULY 2013 - AUGUST 2018</h4>
      <h2>THE PRE-TECH ERA OF MY CAREER</h2>
      <h3>Various Roles</h3>
      <ul>
        <li>Before I pivoted into tech, I held multiple roles in the legal industry. I was primarily focused on project coordination, operational efficiency improvements, and event production.</li>
      </ul>
     </div>
     <div className='resume__segment'>
      <h4>SEPTEMBER 2009 - MAY 2013</h4>
      <h2>UNIVERSITY OF MARYLAND</h2>
      <h3>B.A., History</h3>
      <ul>
        <li>something about college here</li>
      </ul>
     </div>

   </div>
  );
};

export default Resume;