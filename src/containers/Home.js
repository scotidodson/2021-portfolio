import React from "react";
// import './Home.css';
import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const Home = () => {
  return (
   <div>
     <Hero/>
     <Pillars/>
     <Portfolio/>
     <Resume/>
     <Contact/>
   </div>
  );
};

export default Home;