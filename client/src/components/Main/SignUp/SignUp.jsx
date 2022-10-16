import React, { useEffect, useState, useContext } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  const checkList = ["service_local", "service_recogida", "service_reparto", "ambiente_dia", "ambiente_noche", "pet_friendly", "LGTBI_friendly", "slow_food", "healthy", "fresco", "de_temporada", "sostenible", "organico", "eco", "bio", "de_proximidad", "vegetariano", "vegano"];//CheckList services
  const [checked, setChecked] = useState({});//Estado para ver cuantos check hay marcados


  const onSubmit = async (form) => {
    try {
      console.log(form);
      // const res = await axios.post('http://localhost:5000/api/signup', form);
      // console.log(res.data);
      // navigate('/login')
    }
    catch (error) {
      console.log(error);
    }
  }

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    console.log("event", event);
    var updatedList = { ...checked };
    if (event.target.checked) {//Si se marcha un check, se añade a la lista de checked
      const item = event.target.value;
      const newItem = {
        [item]: true
      }
      updatedList = { ...checked, ...newItem };
      setChecked(updatedList);
    } else {//Si se desmarca un check lo quita de la lista de checked
      const itemValue = event.target.value;
      const asArray = Object.entries(checked);
      const filtered = asArray.filter(([key, value]) => key !== itemValue);
      const asObjet = Object.fromEntries(filtered);
      setChecked(asObjet);
    }
  };
  console.log(checked);


  return (
    <>
      <h2>Bienvenido</h2>
      <div><p>Ya no queda nada, completando la siguiente información formarás parte de la comunidad Kmon.</p></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text"{
            ...register('nombre', {
              required: true,
              minLength: 3
            })
          } />{errors.nombre?.type === 'required' && <p>El campo 'Email' es requerido</p>}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email"{
            ...register('email', {
              required: true,
              minLength: 3
            })
          } />{errors.email?.type === 'required' && <p>El campo 'Email' es requerido</p>}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password"{
            ...register('password', {
              required: true,
              minLength: 3
            })
          } />{errors.email?.type === 'required' && <p>El campo 'Contraseña' es requerido</p>}
        </div>
        <div>
          <label>Deseo recibir en mi mail ofertas, descuentos y promociones de Kmon</label>
          <input {...register("spam")} type="radio" value="spam" />
        </div>
        <div>
          <label htmlFor="">Acepto los términos y condiciones de Kmon</label>
          <input
            {
            ...register('terms', {
              required: true
            })
            }
            type="radio" value="terms"
          />{errors.terms?.type === 'required' && <p>Tienes que aceptar los términos y condiciones para poder formar parte de nuestra comnunidad</p>}

        </div>

        <input type="submit" value="Regístrate" />
        <h1>REGISTRARTE SIGNIFICA IR A LA PANTALLA DE PREFERENCIAS</h1>

        <h1>PARTE 2 DEL REGISTRO</h1>
        <h2>Preferencias</h2>
        <div><p>Evalúa de 1 a 5 los sigiuentes parámetros para poder recomendarte los mejores planes para ti.</p></div>
        {checkList.map((item, i) => (
          <article key={i}>
            <input type="checkbox" value={item} onChange={handleCheck} />
            <span>{item}</span>
          </article>
        ))
        }

        <h1>Y ASI CUANTAS PAGINAS QUIERAN</h1>

      </form>

    </>
  )
}

export default SignUp;
