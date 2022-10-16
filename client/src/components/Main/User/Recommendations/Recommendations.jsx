import React, { useEffect, useState, useContext } from "react";
import { checkUserContext } from "../../../../context/checkUserContext";
import MiniCard from "../../../common/Discounts/MiniCard/MiniCard";
import { v4 as uuidv4 } from 'uuid';


//Tendra que recibir algun parametro para indicarle la id del comercio a buscar
const Recommendations = (props) => {
  console.log(props);
  const info = props.value;
  const { recommendations, setRecommendations } = useContext(checkUserContext);//Hook con el listado de las stores
  const { getRecommendations } = useContext(checkUserContext);//Funcion para obtener el listado de stores


  useEffect(() => {
    getRecommendations(info);
  }, []);

  console.log(recommendations);

  return (<>
    <section>
      <h1>Recomendaciones:</h1>
      {recommendations ? recommendations.episode.slice(0, 5)
        .map((item, i) => <MiniCard key={uuidv4()} index={i} value={item} />)
        : "Loading..."}
    </section>
  </>)
};

export default Recommendations;
