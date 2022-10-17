import React, { useEffect, useState, useContext } from "react";
import { checkUserContext } from "../../../../context/checkUserContext";
import MiniCard from "../../../common/Discounts/MiniCard/MiniCard";
import { v4 as uuidv4 } from 'uuid';
import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import { Link } from "react-router-dom";

//Tendra que recibir algun parametro para indicarle la id del comercio a buscar
const Favorites = (props) => {
  console.log(props);
  const info = props.value;
  const { favorites, setFavorites } = useContext(checkUserContext);//Hook con el listado de las stores
  const { getFavorites } = useContext(checkUserContext);//Funcion para obtener el listado de stores


  useEffect(() => {
    getFavorites(info);
  }, []);

  console.log(favorites);

  return (<>
    <section>
      <h1>Favorites:</h1>
      {favorites ? favorites.episode.slice(0, 5)
        .map((item, i) => <MiniCard key={uuidv4()} index={i} value={item} />)
        : "Loading..."}
    </section>
    {/* <Swiper freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='favoritesCarousel'
                slidesPerView={2}
                spaceBetween={30}>
                {favorites?favorites.map((item,i)=>{
                  return <SwiperSlide key={i}><MiniCard value={item}/></SwiperSlide>
                })
                :null}
                
        </Swiper> */}
  </>)
};

export default Favorites;