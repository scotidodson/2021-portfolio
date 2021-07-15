import React from "react";
import './Portfolio.css';
import PortfolioBlock from './PortfolioBlock';

const Portfolio = () => {
  return (
   <div className='portfolio'>
     <PortfolioBlock textOnLeft={true} image='./assets/sample-a/img.jpg' blurb='sample a'/>
     <PortfolioBlock textOnLeft={false} image='./assets/sample-b/img.jpg' blurb='sample b'/>
     <PortfolioBlock textOnLeft={true} image='./assets/sample-a/img.jpg' blurb='sample a'/>
     <PortfolioBlock textOnLeft={false} image='./assets/' blurb='sample b'/>

   </div>
  );
};

export default Portfolio;