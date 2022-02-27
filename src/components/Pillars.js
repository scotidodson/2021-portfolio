import React from "react";
import '../style/Pillars.css';


const Pillars = () => {
  return (
   <div className='pillars'>
       <div className='pillars__column'>
          <h2>CODE</h2>
          <p>Javascript (E5 + E6)</p>
          <p>CSS &#9702; SASS &#9702; React</p>
          <p>Redux &#9702; Node &#9702; Rails</p>
          <p>Rest APIs &#9702; SQL &#9702; KQL</p>
          <p>Complex Debugging</p>
      </div>
       <div className='pillars__column'>
          <h2>UX / UI</h2>
          <p>Wireframing &#9702; Prototyping</p>
          <p>UI Design &#9702; UX Design</p>
          <p>Figma &#9702; Adobe XD </p>
          <p>Accessibility Standards</p>
          <p>SEO + CWV Best Practices</p>
      </div>
      <div className='pillars__column'>
          <h2>PROJECTS + MORE</h2>
          <p>Presentations + Demos</p>
          <p>Scrum Master Certified</p>
          <p>Agile Project Management</p>
          <p>Winning by Design Certified</p>
      </div>
   </div>
  );
};

export default Pillars;