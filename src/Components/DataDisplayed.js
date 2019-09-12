import React from "react";

const DataCard = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>{props.explanation}</p>
      <img className="image" src={props.hdurl} alt="outer space"/>
      <h6> © {props.copyright}</h6>
    </div>
  );
};

export default DataCard;
