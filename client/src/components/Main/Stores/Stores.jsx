import React, { Component,useContext } from "react";
import { useEffect } from "react";
import { checkUserContext } from "../../../context/checkUserContext";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import StoreCard from "./StoreCard/StoreCard";
import {useForm} from 'react-hook-form';

const Stores = ()=>{
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
          const res = await axios.get('https://rickandmortyapi.com/api/character');
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
      <h2>Stores</h2>
      <Link to="/">Volver</Link>
      <input></input>
      
        {data?data.map((item,i)=>{
          return <div>  
            <StoreCard data={item}/>
          </div>
            
          
        }):<h2>Loading...</h2>}
      
    </>
  )
}

export default Stores;
