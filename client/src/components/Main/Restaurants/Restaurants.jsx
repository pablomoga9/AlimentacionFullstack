import React, { Component,useContext } from "react";
import { useEffect } from "react";
import { checkUserContext } from "../../../context/checkUserContext";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {useForm} from 'react-hook-form';

const Restaurants = ()=>{
  const {userCheck,setUserCheck} = useContext(checkUserContext);
  const navigate = useNavigate();
  const [data,setData] = useState([]);

  useEffect(()=>{
    if(userCheck===""){
      navigate("/");
    }
    else{
      const getData = async()=>{
        try{  
          const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
          setData(res.data.results);
        }
        catch(error){
          console.log(error);
        }
      }
      getData();
    }
  },[])

  return(
    <>
      <h2>Restaurants</h2>
      <Link to="/">Volver</Link>
      <input></input>
      
        {data?data.map((item,i)=>{
          return <div>  
            <RestaurantCard data={item}/>
          </div>
            
          
        }):<h2>Loading...</h2>}
      
    </>
  )
}

export default Restaurants