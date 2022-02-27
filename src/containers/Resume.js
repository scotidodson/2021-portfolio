import React from "react";
import '../style/Resume.css';
import ResumeBlock from '../components/ResumeBlock';
import { RESUME_DATA }  from '../data';



const Resume = () => {
  return (
   <div id="resume" className='resume'>
     {RESUME_DATA.map((x,index) => <ResumeBlock key={index} timeframe={x['timeframe']} website={x['website']} company={x['company']} title={x['roles'][0]['title']} responsibilities={x['roles'][0]['responsibilities']}  />)}
   </div>
  );
};

export default Resume;