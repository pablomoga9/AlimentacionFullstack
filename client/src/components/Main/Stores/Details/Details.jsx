import { useParams, Link, useNavigate, Navigate } from "react-router-dom";//Para capturar el parametro ID pasado por los parametros del router
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { checkUserContext } from "../../../../context/checkUserContext"
import Discounts from "../../../common/Discounts/Discounts";
import Reserva from "../../../common/Reserva/Reserva";
import Map from "../../../common/Map/Map";




function Details() {
  const params = useParams();// Para poder usar los parametros capturados por el router
  const { storeDetails, setStoreDetails } = useContext(checkUserContext);//Hook con el listado de las stores
  const { getStoreDetails } = useContext(checkUserContext);//Hook con el listado de las stores
  const { getDiscounts } = useContext(checkUserContext);//Funcion para obtener el listado de stores
  const { discounts, setDiscounts } = useContext(checkUserContext);//Hook con el listado de las stores


  // const [searchId] = useState(params.id);//Creo variable de estado local para almacenar la ID


  useEffect(() => {
    getStoreDetails(params.id)//Lanzamos la busqueda
    console.log("storeDetails", storeDetails);
    // getDiscounts(params.id);
  }, []
  );


  return (
    <article>

      <h1>{storeDetails ? storeDetails.name
        : "..."}</h1>
      {storeDetails ? <img src={storeDetails.image}></img>
        : "Loading"}
      {storeDetails ? <p>{storeDetails.status}</p>
        : "..."}
      {storeDetails ? <ul>
        {storeDetails.episode.slice(0, 5).map((item, i) => <li>{item}</li>)}
      </ul>
        : "Loading..."}

      <Discounts value={params.id} />
      <Reserva />
      <Map />
    </article>
  )
}


export default Details