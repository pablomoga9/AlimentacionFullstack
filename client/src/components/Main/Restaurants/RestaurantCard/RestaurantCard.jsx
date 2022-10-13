import React from "react";


const RestaurantCard = (props) => {
  return (
    <>
      
      <div >
      <h5>Sustainable Restaurant:</h5>
        Nombre: {props.item.name}
        <br />
        id: {props.item.id}
        <br />
        Categoría: {props.item.nametype}
        <br />
        Tfno: {props.item.recclass}
        <br />
        Reservas: {props.item.mass}
        <br />
        Ubicación: {props.item.fall}
        <br />
           

      </div>

    </>
  );
};


export default RestaurantCard;
