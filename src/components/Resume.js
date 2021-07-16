import React from "react";
import './Resume.css';
import ResumeBlock from './ResumeBlock';
import { RESUME_DATA }  from '../data';



const Resume = () => {
  return (
   <div className='resume'>
     {RESUME_DATA.map((x,index) => <ResumeBlock key={index} timeframe={x['timeframe']} companyData={x} roleData={x['roles']} />)}
   </div>
  );
};

export default Resume;