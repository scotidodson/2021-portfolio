import React from "react";
import '../style/Hero.css';

const Hero = () => {
  return (
    <div id="about" className="hero">
      <div className="hero__intro">
        <h1>Hi, I’m <span>Scoti</span>.</h1>
        <p>I’m a customer-facing developer based in Brooklyn.</p>
        <p>I have worked with companies of all sizes to implement + optimize their API integrations. I love the frontend and my favorite projects involve elements of UX/UI consulting. My primary experience is in vanilla <strong>Javascript</strong>&nbsp;(E5&nbsp;+&nbsp;E6), <strong>React</strong>,and <strong>CSS</strong>.</p>
        <p>Away from the computer, I’m into comedy, books, and board games.</p>
        <p className="hero__intro--emphasis">Currently: Solutions&nbsp;Engineering&nbsp;@&nbsp;Plaid</p>
        <a href="mailto:scotidodson@gmail.com">
          <h4>
            GET IN TOUCH &#8680;
          </h4>
        </a>
      </div>
    </div>
  );
};

export default Hero;