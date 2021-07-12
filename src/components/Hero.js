import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__intro">
        <h2>Hi, I'm Scoti.</h2>
        <p>I'm a software engineer with a passion for ux design and project management.</p>
        <p>Currently @ Taboola.</p>
        <a href="mailto:scotidodson@gmail.com">
          <h4>
            GET IN TOUCH &#8594;
          </h4>
        </a>
      </div>
    </div>
  );
};

export default Hero;