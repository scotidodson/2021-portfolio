import React from "react";
import './Portfolio.css';
import PortBlock from './PortBlock';

const Portfolio = () => {
  return (
   <div className='portfolio'>
     <PortBlock textOnLeft={true} image='./assets/sample-a/img.jpg' blurb='sample a'/>
     <PortBlock textOnLeft={false} image='./assets/sample-b/img.jpg' blurb='sample b'/>
     <PortBlock textOnLeft={true} image='./assets/sample-a/img.jpg' blurb='sample a'/>
     <PortBlock textOnLeft={false} image='./assets/sample-b/img.jpg' blurb='sample b'/>

   </div>
  );
};

export default Portfolio;