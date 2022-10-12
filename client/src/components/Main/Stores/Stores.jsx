import React, { Component,useContext } from "react";
import { useEffect } from "react";
import { checkUserContext } from "../../../context/checkUserContext";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const Stores = ()=>{
  const {userCheck,setUserCheck} = useContext(checkUserContext);
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(userCheck);
    if(userCheck===""){
      navigate("/");
    }
  },[])

  return(
    <>
      <h2>Stores</h2>
      <Link to="/">Volver</Link>
    </>
  )
}

export default Stores;
