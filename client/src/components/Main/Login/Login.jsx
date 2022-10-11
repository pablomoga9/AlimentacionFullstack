import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import jwt from 'jwt-decode';



const Login = ()=>{
  const {register,formState:{errors},handleSubmit} = useForm();
  const navigate = useNavigate();
  


  return(
    <>
      {/* <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Email:</label>
      </form> */}
    </>
  )
}

export default Login
