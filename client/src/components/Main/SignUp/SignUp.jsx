import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (form) => {
    try {
      console.log(form);
      const res = await axios.post('http://localhost:5000/api/signup', form);
      console.log(res.data);
      navigate('/login')
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Escribe un email:</label>
        <input type="text"{
          ...register('email', {
            required: true,
            minLength: 3
          })
        } />{errors.email?.type === 'required' && <p>El campo 'Email' es requerido</p>}
        <label htmlFor="">Escribe una contraseña:</label>
        <input type="password"{
          ...register('password', {
            required: true,
            minLength: 3
          })
        } />{errors.email?.type === 'required' && <p>El campo 'Contraseña' es requerido</p>}
        <select name="role" {...register("role")}>
          <option value="business">Empresa</option>
          <option value="user">Usuario</option>
        </select>
        <input type="submit" value="Crear" />
      </form>
    </>
  )
}

export default SignUp;
