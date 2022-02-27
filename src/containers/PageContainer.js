import React from "react";
// import './Home.css';
import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Portfolio from './Portfolio'
import Resume from './Resume';
import Contact from '../components/Contact';

const PageContainer = () => {
  return (
   <div className="pageContainer">
     <Hero/>
     <Pillars/>
     {/* <Portfolio/> */}
     <Resume/>
    <Contact/>
   </div>
  );
};

export default PageContainer;