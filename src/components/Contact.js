import React from "react";
import '../style/Contact.css';

const Contact = () => {
  return (
   <div className='contact'>
     <h4  id="contact" className="contact__path">
       <a href="mailto:scotidodson@gmail.com">
       EMAIL ME
       </a>
    </h4>
    <h4 className="contact__path">
      <a href="https://drive.google.com/file/d/1oprXejMTA9y9JdbEDXb6lpfwCKQ9ozbA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        PDF RESUME
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