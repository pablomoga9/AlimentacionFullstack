import React from "react";


const RestaurantCard = (props) => {
  return (
    <>
      <h1>Asteroides Card</h1>
      <div >
        <br />
        name: {props.item.name}
        <br />
        id: {props.item.id}
        <br />
        nametype: {props.item.nametype}
        <br />
        recclass: {props.item.recclass}
        <br />
        mass: {props.item.mass}
        <br />
        fall: {props.item.fall}
        <br />
        year: {props.item.year}
        <br />
        reclat: {props.item.reclat}
        <br />
        reclong: {props.item.reclong}
        <br />
        geolocation: latitude {props.item.geolocation.latitude}, longitude {props.item.geolocation.longitude}
        <br />

      </div>

    </>
  );
};


export default RestaurantCard;
