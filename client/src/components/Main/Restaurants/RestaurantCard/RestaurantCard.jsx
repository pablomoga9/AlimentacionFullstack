import React from "react";



const RestaurantCard = (props) => {
  const info = props.data;
  
  return(
    <div>
    <h4>{info.name}</h4>
    <img src={info.image} alt="" />
  </div>
  )
};


export default RestaurantCard;
