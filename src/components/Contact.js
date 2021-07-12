import React from "react";
import './Contact.css';

const Contact = () => {
  return (
   <div className='contact'>
     <h4 className="contact__path">
       <a href="mailto:scotidodson@gmail.com">
       EMAIL
       </a>
    </h4>
    <h4 className="contact__path">
      <a href="https://drive.google.com/file/d/1Eu2NAVUVkconhlPDD9e8BmPs04GPh2ix/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        RESUME
      </a>
    </h4>
     <h4 className="contact__path">
       <a href="https://www.linkedin.com/in/scotidodson/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
     </h4>
     <h4 className="contact__path">
       <a href="https://github.com/scotidodson" target="_blank" rel="noopener noreferrer">GITHUB</a>
      </h4>
   </div>
  );
};

export default Contact;