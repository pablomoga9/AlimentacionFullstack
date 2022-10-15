import { checkUserContext } from '../../../context/checkUserContext'
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import List from "../List/List"
import axios from "axios";


const Stores = () => {
  const navigate = useNavigate();
  const { userCheck } = useContext(checkUserContext);//Hook para obtener el email del usuario logado
  const { userData } = useContext(checkUserContext)//Hook para guardar los datos del perfil de usuario
  const { userDetails } = useContext(checkUserContext);
  const [stores, setStores] = useState([]);


  console.log(userCheck);

  useEffect(() => {
    console.log(userCheck);
    if (userCheck === null) {
      navigate("/home");
    }
  }, []);

  const getStores = async () => {
    try {
      const res = await axios.get('https://rickandmortyapi.com/api/character');
      setStores(res.data.results);
    }
    catch (error) {
      console.log(error);
    }
  }


  return <div>
    <div><h1>Comercios cerca de ti</h1></div>
    <div>Menu hamburguesa</div>

    <div><h1>Desplegable para ordenar</h1></div>
    <h3></h3>
    <List />
  </div >;
};


export default Stores;
