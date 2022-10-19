import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { checkUserContext } from '../../../context/checkUserContext';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Logo from "../../common/Logo"
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import Card from '../List/Card/Card';
import Lupa from '../../../assets/img/lupa.png'
import plusSign from '../../../assets/img/plusSign.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
// import Scanner from './Scanner/Scanner';


const Home = () => {
  const { userCheck, setUserCheck } = useContext(checkUserContext);
  const { checkUser } = useContext(checkUserContext);
  const { getStores } = useContext(checkUserContext);
  const { getRestaurants } = useContext(checkUserContext);
  const navigate = useNavigate();
  const { stores, setStores } = useContext(checkUserContext);
  const {restaurants,setRestaurants} = useContext(checkUserContext);
  const {showNav,setShowNav} = useContext(checkUserContext);


  useEffect(() => {
    setShowNav(true);
    checkUser()
    getStores()
    getRestaurants();
    // if (userCheck === null) {
    //   navigate("/");
    // }
  }, []);


  return (
    <>

  {/* Dar funcion a este input */}
          <div className='searchContainer'>
            <button type='submit'><img src={Lupa} alt="" /></button>
            <input name='search' type="text" placeholder='Búsqueda...'/>
          </div>
          <h2 className='carouselTitle'>Restaurantes</h2>
          <div className='carouselHome'>
             <Swiper freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='homeDirectory'
                slidesPerView={2}
                spaceBetween={30}>
                {restaurants?restaurants.map((item,i)=>{
                  return <SwiperSlide  className='swiperCard' key={i}><Card value={item}/></SwiperSlide>
                })
                :null}
                <SwiperSlide className='plusCard'><Link to="/restaurants"><img className='plusImg' src={plusSign} alt="" /><h3>Ver más</h3></Link></SwiperSlide>
              </Swiper>
          </div>
              <h2 className='carouselTitle'>Tiendas</h2>
              <div className='carouselHome'>
                <Swiper freeMode={true}
                  grabCursor={true}
                  modules={[FreeMode]}
                  className='homeDirectory'
                  slidesPerView={2}
                  spaceBetween={30}>
                  {stores?stores.map((item,i)=>{
                    return <SwiperSlide className='swiperCard' key={i}><Card value={item}/></SwiperSlide>
                  })
                  :null}
                  <SwiperSlide className='plusCard'><Link to="/stores"><img className='plusImg' src={plusSign} alt="" /><h3>Ver más</h3></Link></SwiperSlide>
                </Swiper>
              </div>
               <h2 className='carouselTitle'>Saber+</h2>
                <div>
                     <Swiper freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className='homeDirectory'
            slidesPerView={2}
            spaceBetween={30}>
             {/* creat estado con un array de saber+ */}
            {stores?stores.map((item,i)=>{
              return <SwiperSlide className='swiperCard'  key={i}><Card value={item}/></SwiperSlide>
            })
            :null}
            <SwiperSlide className='plusCard'><Link to="/stores"><img className='plusImg' src={plusSign} alt="" /><h3>Ver más</h3></Link></SwiperSlide>
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