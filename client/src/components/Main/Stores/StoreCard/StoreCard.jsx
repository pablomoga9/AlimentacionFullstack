import React from "react";
import Stores from "../Stores";

const StoreCard = (props) => {
  const info = props.data;
  
  return(
    <div className="cardContainer">
      <div className="cardText">
      <h4 >{info.name}<p>$$</p></h4>
      <h4 className="cardCity">{info.species}</h4>
      </div>
    <img src={info.image} alt="" />
  </div>
  )
};

export default StoreCard;
