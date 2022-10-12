import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { checkUserContext } from '../../../context/checkUserContext';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {Link} from 'react-router-dom';
import Scanner from './Scanner/Scanner';

const Home = ()=>{
  const {userCheck,setUserCheck} = useContext(checkUserContext);

  useEffect(()=>{
    const checkUser = async()=>{
      try{
        const res = await axios.get('http://localhost:5000/api/checkUser',{withCredentials:true});
        const userToken = res.data.msg.substr(6,res.data.msg.length);
        const user = await jwtDecode(userToken);
        await setUserCheck(user.email);
        console.log(userCheck)
      }
      catch(error){
        console.log(error.stack);
      }
    }
    checkUser();
  },[])


  return(
    <>
      <div className='directories'>
        <div className='restaurantsDirectory'>
          <Link className='imgContainer' to={'/restaurants'}><img className='restaurantImg' src="https://www.crisb.es/wp-content/uploads/2019/03/huerto-de-lucas-restaurante-ecologico.jpg" alt="" /><h3 className='directoryTitle'>Restaurantes</h3></Link>
        </div>
        <div className='storesDirectory'>
          <Link className='imgContainer' to={'/stores'}><img className='storeImg' src="https://revista.storyous.es/wp-content/uploads/sites/2/2018/05/mamacampo3.jpg" alt="" /><h3 className='directoryTitle'>Tiendas</h3></Link>
        </div>
      </div>
      <div className='novedades'>
        
      </div>
      <div className='scanner'>
        <Scanner/>
      </div>
    </>
  )
}

export default Home