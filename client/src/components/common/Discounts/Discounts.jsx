import React, { useEffect, useState, useContext } from "react";
import { checkUserContext } from '../../../context/checkUserContext'
import MiniCard from "../Discounts/MiniCard/MiniCard";
import { v4 as uuidv4 } from 'uuid';


//Tendra que recibir algun parametro para indicarle la id del comercio a buscar
const Discounts = (props) => {
  const info = props.value;
  const { discounts, setDiscounts } = useContext(checkUserContext);//Hook con el listado de las stores
  const { getDiscounts } = useContext(checkUserContext);//Funcion para obtener el listado de stores


  useEffect(() => {
    getDiscounts(info);
  }, []);


  return (<>
    <section>
      <h1>Descuentos:</h1>
      {discounts ? discounts.episode.slice(0, 2)
        .map((item, i) => <MiniCard key={uuidv4()} index={i} value={item} />)
        : "Loading..."}
    </section>
  </>)
};

export default Discounts;
