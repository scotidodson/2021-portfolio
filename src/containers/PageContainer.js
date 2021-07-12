import React from "react";
// import './Home.css';
import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const PageContainer = () => {
  return (
   <div className="pageContainer">
     <Hero/>
     <Pillars/>
     <a href="/#portfolio" id="portfolio">portfolio</a>
     <Portfolio/>
     <a href="/#resume" id="resume">resume</a>
     <Resume/>
     <a href="/#contact" id="contact">contact</a>
     <Contact/>
   </div>
  );
};

export default PageContainer;