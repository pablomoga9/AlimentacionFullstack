import React, { Component, useState, useEffect } from "react";
//import { checkUserContext, useContext } from "../../../context/checkUserContext";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from 'axios';
import RestaurantCard from './RestaurantCard'


const Restaurants = ()=>{

  const [values, setValues] = useState({
    designation: '',
    discovery_date: '',
    h_mag: '',
    moid_au: '',
    q_au_1: '',
    q_au_2: '',
    period_yr: '',
    i_deg: '',
    pha: '',
    orbit_class: ''
  });

  //const {userCheck,setUserCheck} = useContext(checkUserContext);
  const navigate = useNavigate();
  const [dataRestaurants, setDataRestaurants] = useState([])
  const [currentItems] = useState(null);


  async function loadDataRestaurants() {
    let res = await axios.get("https://nasaapinacholopez.herokuapp.com/api/astronomy/neas?to=2022")
    let data = res.data
    setDataRestaurants(data)
    console.log(dataRestaurants);
  }

  useEffect(()=>{
    loadDataRestaurants();
    // console.log(userCheck);
    // if(userCheck===""){
    //   navigate("/");
    }
  ,[])

  return(
    <>
      <h2>Restaurants</h2>
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <RestaurantCard key={i} item={item} loadDataRestaurants={loadDataRestaurants}/>
          ))}
      </>
      <Link to="/">Volver</Link>
    </>
  )
}

export default Restaurants;
