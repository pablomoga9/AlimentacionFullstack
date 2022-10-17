import React, { useEffect, useState, useContext } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  // const checkList = ["service_local", "service_recogida", "service_reparto", "ambiente_dia", "ambiente_noche", "pet_friendly", "LGTBI_friendly", "slow_food", "healthy", "fresco", "de_temporada", "sostenible", "organico", "eco", "bio", "de_proximidad", "vegetariano", "vegano"];//CheckList services
  // const [checked, setChecked] = useState({});//Estado para ver cuantos check hay marcados


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
  // const handleCheck = (event) => {
  //   console.log("event", event);
  //   var updatedList = { ...checked };
  //   if (event.target.checked) {//Si se marcha un check, se añade a la lista de checked
  //     const item = event.target.value;
  //     const newItem = {
  //       [item]: true
  //     }
  //     updatedList = { ...checked, ...newItem };
  //     setChecked(updatedList);
  //   } else {//Si se desmarca un check lo quita de la lista de checked
  //     const itemValue = event.target.value;
  //     const asArray = Object.entries(checked);
  //     const filtered = asArray.filter(([key, value]) => key !== itemValue);
  //     const asObjet = Object.fromEntries(filtered);
  //     setChecked(asObjet);
  //   }
  // };
  // console.log(checked);


  return (
    <>
      <h2>Bienvenido</h2>
      <div><p>Ya no queda nada, completando la siguiente información formarás parte de la comunidad Kmon.</p></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text"{
            ...register('nombre', {
              // required: true,
              minLength: 3
            })
          } />
          {/* {errors.nombre?.type === 'required' && <p>El campo 'Email' es requerido</p>} */}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email"{
            ...register('email', {
              // required: true,
              minLength: 3
            })
          } />
          {/* {errors.email?.type === 'required' && <p>El campo 'Email' es requerido</p>} */}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password"{
            ...register('password', {
              // required: true,
              minLength: 3
            })
          } />
          {/* {errors.email?.type === 'required' && <p>El campo 'Contraseña' es requerido</p>} */}
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
              // required: true
            })
            }
            type="radio" value="terms"
          />
          {/* {errors.terms?.type === 'required' && <p>Tienes que aceptar los términos y condiciones para poder formar parte de nuestra comnunidad</p>} */}

        </div>

        <input type="submit" value="Regístrate" />
        <h1>REGISTRARTE SIGNIFICA IR A LA PANTALLA DE PREFERENCIAS</h1>

        <h1>PARTE 2 DEL REGISTRO</h1>
        <h2>Preferencias</h2>
        <div><p>Evalúa de 1 a 5 los sigiuentes parámetros para poder recomendarte los mejores planes para ti.</p></div>


        <fieldset>
          <legend>Producto de temporada</legend>
          <label htmlFor="1">
            <input
              {...register("ProductoTemporada")}
              type="radio"
              value="1"
              id="1"
              name="ProductoTemporada"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("ProductoTemporada")}
              type="radio"
              value="2"
              id="2"
              name="ProductoTemporada"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("ProductoTemporada")}
              type="radio"
              value="3"
              id="3"
              name="ProductoTemporada"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("ProductoTemporada")}
              type="radio"
              value="4"
              id="4"
              name="ProductoTemporada"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("ProductoTemporada")}
              type="radio"
              value="5"
              id="5"
              name="ProductoTemporada"
            />
            5
          </label>
        </fieldset>

        <fieldset>
          <legend>Productos frescos</legend>
          <label htmlFor="1">
            <input
              {...register("ProductoFresco")}
              type="radio"
              value="1"
              id="1"
              name="ProductoFresco"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("ProductoFresco")}
              type="radio"
              value="2"
              id="2"
              name="ProductoFresco"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("ProductoFresco")}
              type="radio"
              value="3"
              id="3"
              name="ProductoFresco"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("ProductoFresco")}
              type="radio"
              value="4"
              id="4"
              name="ProductoFresco"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("ProductoFresco")}
              type="radio"
              value="5"
              id="5"
              name="ProductoFresco"
            />
            5
          </label>
        </fieldset>

        <fieldset>
          <legend>Orgánico</legend>
          <label htmlFor="1">
            <input
              {...register("Organico")}
              type="radio"
              value="1"
              id="1"
              name="Organico"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("Organico")}
              type="radio"
              value="2"
              id="2"
              name="Organico"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("Organico")}
              type="radio"
              value="3"
              id="3"
              name="Organico"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("Organico")}
              type="radio"
              value="4"
              id="4"
              name="Organico"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("Organico")}
              type="radio"
              value="5"
              id="5"
              name="Organico"
            />
            5
          </label>
        </fieldset>

        <fieldset>
          <legend>Saludable</legend>
          <label htmlFor="1">
            <input
              {...register("saludable")}
              type="radio"
              value="1"
              id="1"
              name="saludable"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("saludable")}
              type="radio"
              value="2"
              id="2"
              name="saludable"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("saludable")}
              type="radio"
              value="3"
              id="3"
              name="saludable"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("saludable")}
              type="radio"
              value="4"
              id="4"
              name="saludable"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("saludable")}
              type="radio"
              value="5"
              id="5"
              name="saludable"
            />
            5
          </label>
        </fieldset>

        <fieldset>
          <legend>Artesanal</legend>
          <label htmlFor="1">
            <input
              {...register("artesanal")}
              type="radio"
              value="1"
              id="1"
              name="artesanal"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("artesanal")}
              type="radio"
              value="2"
              id="2"
              name="artesanal"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("artesanal")}
              type="radio"
              value="3"
              id="3"
              name="artesanal"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("artesanal")}
              type="radio"
              value="4"
              id="4"
              name="artesanal"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("artesanal")}
              type="radio"
              value="5"
              id="5"
              name="artesanal"
            />
            5
          </label>
        </fieldset>


        <h1>SEGUNDA PAGINA PREFERENCIAS</h1>

        <fieldset>
          <legend>Sostenible</legend>
          <label htmlFor="1">
            <input
              {...register("sostenible")}
              type="radio"
              value="1"
              id="1"
              name="sostenible"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("sostenible")}
              type="radio"
              value="2"
              id="2"
              name="sostenible"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("sostenible")}
              type="radio"
              value="3"
              id="3"
              name="sostenible"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("sostenible")}
              type="radio"
              value="4"
              id="4"
              name="sostenible"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("sostenible")}
              type="radio"
              value="5"
              id="5"
              name="sostenible"
            />
            5
          </label>
        </fieldset>
        <fieldset>
          <legend>Basura 0</legend>
          <label htmlFor="1">
            <input
              {...register("basura0")}
              type="radio"
              value="1"
              id="1"
              name="basura0"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("basura0")}
              type="radio"
              value="2"
              id="2"
              name="basura0"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("basura0")}
              type="radio"
              value="3"
              id="3"
              name="basura0"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("basura0")}
              type="radio"
              value="4"
              id="4"
              name="basura0"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("basura0")}
              type="radio"
              value="5"
              id="5"
              name="basura0"
            />
            5
          </label>
        </fieldset>
        <fieldset>
          <legend>Km 0</legend>
          <label htmlFor="1">
            <input
              {...register("km0")}
              type="radio"
              value="1"
              id="1"
              name="km0"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("km0")}
              type="radio"
              value="2"
              id="2"
              name="km0"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("km0")}
              type="radio"
              value="3"
              id="3"
              name="km0"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("km0")}
              type="radio"
              value="4"
              id="4"
              name="km0"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("km0")}
              type="radio"
              value="5"
              id="5"
              name="km0"
            />
            5
          </label>
        </fieldset>
        <fieldset>
          <legend>Vegano</legend>
          <label htmlFor="1">
            <input
              {...register("vegano")}
              type="radio"
              value="1"
              id="1"
              name="vegano"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("vegano")}
              type="radio"
              value="2"
              id="2"
              name="vegano"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("vegano")}
              type="radio"
              value="3"
              id="3"
              name="vegano"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("vegano")}
              type="radio"
              value="4"
              id="4"
              name="vegano"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("vegano")}
              type="radio"
              value="5"
              id="5"
              name="vegano"
            />
            5
          </label>
        </fieldset>
        <fieldset>
          <legend>Vegetariano</legend>
          <label htmlFor="1">
            <input
              {...register("vegetariano")}
              type="radio"
              value="1"
              id="1"
              name="vegetariano"
            />
            1
          </label>
          <label htmlFor="2">
            <input
              {...register("vegetariano")}
              type="radio"
              value="2"
              id="2"
              name="vegetariano"
            />
            2
          </label>
          <label htmlFor="3">
            <input
              {...register("vegetariano")}
              type="radio"
              value="3"
              id="3"
              name="vegetariano"
            />
            3
          </label>
          <label htmlFor="4">
            <input
              {...register("vegetariano")}
              type="radio"
              value="4"
              id="4"
              name="vegetariano"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              {...register("vegetariano")}
              type="radio"
              value="5"
              id="5"
              name="vegetariano"
            />
            5
          </label>
        </fieldset>

        {/* {checkList.map((item, i) => (
          <article key={i}>
            <input type="checkbox" value={item} onChange={handleCheck} />
            <span>{item}</span>
          </article>
        ))
        } */}

        <h1>Y ASI CUANTAS PAGINAS QUIERAN</h1>

      </form>

    </>
  )
}

export default SignUp;
