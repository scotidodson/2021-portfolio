import React from "react";
import '../style/Portfolio.css';
import PortfolioBlock from '../components/PortfolioBlock';
import { PORTFOLIO_DATA } from '../data';

const Portfolio = () => {
  return (
   <div id="portfolio" className='portfolio'>
     {PORTFOLIO_DATA.map((x,index)=><PortfolioBlock key={index} index={index} title={x.title} tech={x.tech} blurb={x.blurb} thumbnail={x.thumbnail} />)}
   </div>
  );
};

export default Portfolio;