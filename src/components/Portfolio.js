import React from "react";
import './Portfolio.css';
import PortfolioBlock from './PortfolioBlock';
import { PORTFOLIO_DATA } from '../data'

const Portfolio = () => {
  return (
   <div className='portfolio'>
     {PORTFOLIO_DATA.map((x,index)=><PortfolioBlock key={index} index={index} data={x} />)}
   </div>
  );
};

export default Portfolio;