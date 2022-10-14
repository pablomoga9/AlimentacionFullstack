import React, { useEffect, useState, useContext } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { checkUserContext } from '../../../context/checkUserContext';
import Logo from '../../common/Logo';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { userCheck, setUserCheck } = useContext(checkUserContext);
  const { userDetails } = useContext(checkUserContext);
  const { checkUser } = useContext(checkUserContext);


  useEffect(() => {
  }, [])


  const onSubmit = async (form) => {
    try {
      console.log(form);
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      checkUser();

      navigate("/home");
    }
    catch (error) {
      console.log(error);
    }
  }





  return (
    <>
      <Logo />
      <div>
        {userCheck == null ? <h3>Inicia sesión</h3> : <h3>Has iniciado sesión como: </h3>}
        {userCheck == null ? <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Email:</label>
          <input type="text"{
            ...register('email', {
              required: true,
              minLength: 3
            })
          } />{errors.email?.type === 'required' && <p>El campo 'Email' es requerido</p>}
          <label htmlFor="">Contraseña:</label>
          <input type="password"{
            ...register('password', {
              required: true,
              minLength: 3
            })
          } />{errors.email?.type === 'required' && <p>El campo 'Contraseña' es requerido</p>}
          <input type="submit" value="Login" />
        </form> : userCheck}
      </div>
      <div>
        <Link to="/signup"><span>
          Registro
        </span></Link>
        <Link to=""><span>
          ¿Has olvidado tu contraseña?
        </span></Link>
      </div>
    </>
  )
}

export default Login
