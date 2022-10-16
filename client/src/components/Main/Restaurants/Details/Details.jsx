import React, { useEffect,useContext } from "react";
import {useParams} from 'react-router-dom';
import { checkUserContext } from "../../../../context/checkUserContext"
import Reserva from "../../../common/Reserva/Reserva";

function Details(){
  const params = useParams();
  const {restaurantDetails} = useContext(checkUserContext);
  const {getRestaurantDetails} = useContext(checkUserContext);


  useEffect(()=>{
    getRestaurantDetails(params.id)
  },[])


  return(
    <>
      <h1>{restaurantDetails?restaurantDetails.name:"..."}</h1>{restaurantDetails?<img src={restaurantDetails.image}></img>:"Loading"}
      {restaurantDetails?<p>{restaurantDetails.status}</p>:"..."}
      {restaurantDetails?<ul>{restaurantDetails.episode.slice(0, 5).map((item, i) => <li>{item}</li>)}</ul>:"Loading..."}
      <Reserva/>
    </>
  )
}

export default Details;
