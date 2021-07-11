import React from "react";
import './Portfolio.css';
import PortBlock from '../components/PortBlock';

const Portfolio = () => {
  return (
   <div className='portfolio'>
     <PortBlock orientation='left' image='./assets/sample-a/img.jpg' blurb='sample a'/>
     <PortBlock orientation='right' image='./assets/sample-b/img.jpg' blurb='sample b'/>

   </div>
  );
};

export default Portfolio;