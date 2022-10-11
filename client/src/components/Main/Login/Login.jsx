import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import jwt from 'jwt-decode';



const Login = ()=>{
  const {register,formState:{errors},handleSubmit} = useForm();
  const navigate = useNavigate();
  

  const onSubmit = async(form)=>{
    try{  
      console.log(form);
      const res = await fetch('http://localhost:5000/api/login',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
          'Content-Type':'application/json'
        },
        credentials:'include'
      })
      console.log(res.data);
    }
    catch(error){
      console.log(error);
    }
  }


  return(
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Email:</label>
      <input type="text"{
        ...register('email',{
          required:true,
          minLength:3
        })
      }/>{errors.email?.type==='required'&& <p>El campo 'Email' es requerido</p>}
      <label htmlFor="">Contraseña:</label>
      <input type="password"{
        ...register('password',{
          required:true,
          minLength:3
        })
      } />{errors.email?.type==='required'&& <p>El campo 'Contraseña' es requerido</p>}
       <input type="submit" value="Login" />
    </form>
    </>
  )
}

export default Login
