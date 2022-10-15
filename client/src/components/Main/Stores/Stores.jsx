import React, { Component,useContext } from "react";
import { useEffect } from "react";
import { checkUserContext } from "../../../context/checkUserContext";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import StoreCard from "./StoreCard/StoreCard";
import {useForm} from 'react-hook-form';
import BackLogo from '../../../assets/img/Back @2x.png';
import BurgerBtn from '../../../assets/img/menu@2x.png'

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
      <div className="backButton">
        <Link to="/"><img src={BackLogo} alt="" /></Link>
      </div>
      <div className="storesTitleContainer">
        <h2 className="storesTitle">Comercios cerca de ti</h2>
      </div>
     
     <div className="sortBurger">
      <button><img className="burgerBtn" src={BurgerBtn} alt="" /></button>
      <select className="sortList">
          <option value="rating">Mejor valoradas</option>
          <option value="closest">Más cercanas</option>
        </select>
     </div>
      
      
        {data?data.map((item,i)=>{
          return <div key={i}>  
            <StoreCard data={item}/>
          </div>
            
          
        }):<h2>Loading...</h2>}
      
    </>
  )
}

export default Stores;
