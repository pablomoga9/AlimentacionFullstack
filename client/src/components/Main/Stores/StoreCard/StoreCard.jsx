import React from "react";
import Stores from "../Stores";

const StoreCard = (props) => {
  const info = props.data;
  
  return(
    <div>
    <h4>{info.name}</h4>
    <img src={info.image} alt="" />
  </div>
  )
};

export default StoreCard;
