import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { checkUserContext } from '../../../context/checkUserContext';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Logo from "../../common/Logo"
import { Link, useNavigate } from "react-router-dom";
import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import Card from '../List/Card/Card';

// import Scanner from './Scanner/Scanner';


const Home = () => {
  const { userCheck, setUserCheck } = useContext(checkUserContext);
  const { checkUser } = useContext(checkUserContext);
  const { getStores } = useContext(checkUserContext);
  const { getRestaurants } = useContext(checkUserContext);
  const navigate = useNavigate();
  const { stores, setStores } = useContext(checkUserContext);
  const {restaurants,setRestaurants} = useContext(checkUserContext);

  useEffect(() => {
    checkUser()
    getStores()
    getRestaurants();
    // if (userCheck === null) {
    //   navigate("/");
    // }
  }, []);
 

  return (
    <>
      <Logo />
        <input type="text" />
          <div className='carouselHome'>
              <h2>Restaurantes</h2>
              <Swiper freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='homeDirectory'
                slidesPerView={2}
                spaceBetween={30}>
                {restaurants?restaurants.map((item,i)=>{
                  return <SwiperSlide key={i}><Card value={item}/></SwiperSlide>
                })
                :null}
                <SwiperSlide><Link to="/restaurants">Ver más</Link></SwiperSlide>
              </Swiper>
          </div>
              <div className='carouselHome'>
                <h2>Tiendas</h2>
                <Swiper freeMode={true}
                  grabCursor={true}
                  modules={[FreeMode]}
                  className='homeDirectory'
                  slidesPerView={2}
                  spaceBetween={30}>
                  {stores?stores.map((item,i)=>{
                    return <SwiperSlide key={i}><Card value={item}/></SwiperSlide>
                  })
                  :null}
                  <SwiperSlide><Link to="/stores">Ver más</Link></SwiperSlide>
                </Swiper>
              </div>
                <div>
                     <h2>Saber+</h2>
            <Swiper freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className='homeDirectory'
            slidesPerView={2}
            spaceBetween={30}>
            {stores?stores.map((item,i)=>{
              return <SwiperSlide key={i}><Card value={item}/></SwiperSlide>
            })
            :null}
            <SwiperSlide><Link to="/stores">Ver más</Link></SwiperSlide>
          </Swiper>
                </div>
        {/* <div className='storesDirectory'>
          <Link className='imgContainer' to={'/stores/'}><img className='storeImg' src="https://revista.storyous.es/wp-content/uploads/sites/2/2018/05/mamacampo3.jpg" alt="" /><h3 className='directoryTitle'>Tiendas</h3></Link>
        </div> */}
     
      {/* <div className='novedades'>
        <h1>NOVEDADES</h1>
      </div>
      <div className='profile'>
        <Link to={'/user/profile'}><h1>Perfil</h1></Link>
      </div>
      <div className='scanner'>

        <h3>Scanner</h3>
       

      </div> */}
    </>
  )
}

export default Home