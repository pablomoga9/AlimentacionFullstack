import React, { useEffect, useState, useContext } from "react";
import { checkUserContext } from "../../../../context/checkUserContext";
import MiniCard from "../../../common/Discounts/MiniCard/MiniCard";
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import { Link } from "react-router-dom";

//Tendra que recibir algun parametro para indicarle la id del comercio a buscar
const Recommendations = (props) => {
  const info = props.value;
  const { recommendations, setRecommendations } = useContext(checkUserContext);//Hook con el listado de las stores
  const { getRecommendations } = useContext(checkUserContext);//Funcion para obtener el listado de stores


  useEffect(() => {
    getRecommendations(info);
  }, []);


  return (<>
    <section>
      <h1>Recomendaciones:</h1>
      {recommendations ? recommendations.episode.slice(0, 2)
        .map((item, i) => <MiniCard key={uuidv4()} index={i} value={item} />)
        : "Loading..."}
      {/* <Swiper freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='recommendationCarousel'
                slidesPerView={2}
                spaceBetween={30}>
                {recommendations?recommendations.map((item,i)=>{
                  return <SwiperSlide key={i}><MiniCard value={item}/></SwiperSlide>
                })
                :null}
                
        </Swiper> */}
    </section>
  </>)
};

export default Recommendations;
