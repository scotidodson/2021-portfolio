import React from "react";
// import './Home.css';
import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Portfolio from './Portfolio'

const Home = () => {
  return (
   <div>
     <Hero/>
     <Pillars/>
     <Portfolio/>
   </div>
  );
};

export default Home;