import React from "react";

const ResumeBlock = (props) => {
  return (
    <div className="resume__segment">
        <span>{props.timeframe}</span>
        <h2><a href={props.website} target="_blank" rel="noreferrer">{props.company}</a></h2>
        <h3>{props.title}</h3>
        <ul>
            {props.responsibilities.map((x,index)=> <li key={index}>{x}</li>)}
        </ul>
   </div>
  );
};

export default ResumeBlock;