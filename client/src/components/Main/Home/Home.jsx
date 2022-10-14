import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { checkUserContext } from '../../../context/checkUserContext';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Logo from "../../common/Logo"
import { Link, useNavigate } from "react-router-dom";
// import Scanner from './Scanner/Scanner';


const Home = () => {
  const { userCheck, setUserCheck } = useContext(checkUserContext);
  const { checkUser } = useContext(checkUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser()
    console.log(userCheck);
    // if (userCheck === null) {
    //   navigate("/");
    // }
  }, []);


  return (
    <>
      <Logo />
      <div></div>
      <div className='directories'>
        <div className='restaurantsDirectory'>
          <Link className='imgContainer' to={'/restaurants'}><img className='restaurantImg' src="https://www.crisb.es/wp-content/uploads/2019/03/huerto-de-lucas-restaurante-ecologico.jpg" alt="" /><h3 className='directoryTitle'>Restaurantes</h3></Link>
        </div>
        <div className='storesDirectory'>
          <Link className='imgContainer' to={'/stores'}><img className='storeImg' src="https://revista.storyous.es/wp-content/uploads/sites/2/2018/05/mamacampo3.jpg" alt="" /><h3 className='directoryTitle'>Tiendas</h3></Link>
        </div>
      </div>
      <div className='novedades'>
        <h1>NOVEDADES</h1>
      </div>
      <div className='profile'>
        <Link to={'/user/profile'}><h1>Perfil</h1></Link>
      </div>
      <div className='scanner'>

        <h3>Scanner</h3>
        {/* <Scanner/> */}

      </div>
    </>
  )
}

export default Home