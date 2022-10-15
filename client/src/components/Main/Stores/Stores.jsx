import { checkUserContext } from '../../../context/checkUserContext'
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import List from "../List/List"
import axios from "axios";


const Stores = () => {
  const navigate = useNavigate();
  const { userCheck } = useContext(checkUserContext);//Hook para obtener el email del usuario logado
  const { userData } = useContext(checkUserContext);//Hook para guardar los datos del perfil de usuario
  const { userDetails } = useContext(checkUserContext);//Funcion para obtener los detalles del usuario
  const { stores, setStores } = useContext(checkUserContext);//Hook con el listado de las stores
  const { getStores } = useContext(checkUserContext);//Funcion para obtener el listado de stores
  const [sortBy, setSortBy] = useState("bestValue"); //Para indicar como ordenar el listado


  console.log("userCheck", userCheck);
  console.log(sortBy);
  console.log(stores);


  useEffect(() => {
    getStores();//Cambiar a getStoresSortBy(sortBy)

    console.log(userCheck);
    if (userCheck === null) {
      navigate("/home");
    }
  }, []);

  const handleChange = (e) => {
    setSortBy(e.target.value)
    console.log("sorBy", e.target.value);
    handleSort(e.target.value);
  }

  //Ordenar por nombre
  const handleSort = (sort) => {
    console.log("HANDLESORT", sortBy);
    if (sort === "byName") {
      console.log("Ordenado de la A a la Z");
      //Para ordenar de la A a la Z
      const data = [...stores].sort((a, b) => {
        return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      })
      setStores(data);
    }
    else if (sort === "bestValue") {//Hay que modificarlo
      console.log("Ordenado de la A a la Z");
      //Para ordenar de la A a la Z
      const data = [...stores].sort((a, b) => {
        return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      })
      setStores(data);
    }
    else if (sort === "byProximity") {//Hay que modificarlo
      console.log("Ordenado de la A a la Z");
      //Para ordenar de la A a la Z
      const data = [...stores].sort((a, b) => {
        return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      })
      setStores(data);
    }
    else if (sort === "byScore") {//Hay que modificarlo
      console.log("Ordenado de la A a la Z");
      //Para ordenar de la A a la Z
      const data = [...stores].sort((a, b) => {
        return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      })
      setStores(data);
    }
  }

  return <div>
    <div><h1>Comercios cerca de ti</h1></div>
    <div>Menu hamburguesa</div>

    <div>
      <select onChange={handleChange}>
        <option selected value="bestValue">Mejor Valorados</option>
        <option value="byName">Por nombre</option>
        <option value="byProximity">Por cercanía</option>
        <option value="byScore">Por puntuación</option>
      </select>
    </div>
    <h3></h3>
    {stores != null ?
      <List />
      : "Loading..."}
  </div >;
};


export default Stores;
