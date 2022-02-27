import React from "react";
import '../style/Hero.css';

const Hero = () => {
  return (
    <div id="about" className="hero">
      <div className="hero__intro">
        <h1>Hi, I'm <span>Scoti</span>.</h1>
        <p>I'm a customer-facing engineer focused on helping clients optimize their API integrations. I love the frontend and my favorite projects involve some element of UX or visual design consulting.</p><p>My primary experience is in vanilla <strong>Javascript</strong>&nbsp;(E5&nbsp;+&nbsp;E6), <strong>React</strong>,and <strong>CSS</strong>. I'm always learning&nbsp;--&nbsp;right now I'm studying <strong>Swift</strong> and <strong>UX/UI&nbsp;Design</strong>.</p>
        <p>Away from the computer, I'm into comedy, books, and board games.</p>
        <p className="hero__intro--emphasis">Currently: Solutions Engineering @ Plaid</p>
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