import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__intro">
        <h2>Hi, I'm <span>Scoti</span>.</h2>
        <p>I'm a software engineer focused on front end development. My primary experience is in vanilla <strong>Javascript</strong> (E5 + E6), <strong>React</strong>,and <strong>CSS</strong>. </p>
        <p>I love to learn. Right now I'm studying <strong>Swift</strong> and <strong>UX/UI Design</strong>.</p>
        <p>Away from the computer, I love to check out comedy shows, travel to other cities, play board games, and, if you'll let me, talk about books.</p>
        <p>Currently: Solutions Engineering @ Taboola.</p>
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