import React from "react";


const RestaurantCard = (props) => {
  return (
    <>
      <h1>Restaurantes</h1>
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
        

      </div>

    </>
  );
};


export default RestaurantCard;
