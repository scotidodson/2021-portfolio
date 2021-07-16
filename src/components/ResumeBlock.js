import React from "react";
import './Resume.css';


const ResumeBlock = (props) => {
  return (
    <div className='resume__segment'>
        <h4>{props.companyData.timeframe}</h4>
        <h2><a href={props.companyData.website} target="_blank" rel="noreferrer">{props.companyData.company}</a></h2>
        {props.roleData.map((x,index)=>{
          return (<>
          <h3 key={index}>{x.title} {x.duration}</h3>
          <ul>{x.responsibilities.map((x,index)=> <li key={index}> {x}</li>)}
          </ul>
          </>
          )
        })}
        
   </div>
  );
};

export default ResumeBlock;