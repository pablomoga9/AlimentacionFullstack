import React, { useEffect, useState, useContext } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  // const checkList = ["service_local", "service_recogida", "service_reparto", "ambiente_dia", "ambiente_noche", "pet_friendly", "LGTBI_friendly", "slow_food", "healthy", "fresco", "de_temporada", "sostenible", "organico", "eco", "bio", "de_proximidad", "vegetariano", "vegano"];//CheckList services
  // const [checked, setChecked] = useState({});//Estado para ver cuantos check hay marcados
  const [part1, setPart1] = useState(true);//Estado para mostrar o no la parte 1 del formulario
  const [part2, setPart2] = useState(false);//Estado para mostrar o no la parte 2 del formulario
  const [part3, setPart3] = useState(false);//Estado para mostrar o no la parte 3 del formulario


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


  const handleChangePart = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "next" && part2 === false) {
      console.log("Estas en la segunda pagina");
      setPart1(false)
      setPart2(true)
      setPart3(false)
    } else if (value === "next" && part2 === true) {
      console.log("Estas en la ultima pagina");
      setPart1(false)
      setPart2(false)
      setPart3(true)
    }

    else if (value === "back" && part2 === true) {
      console.log("Estas en la primera pagina");
      setPart1(true)
      setPart2(false)
      setPart3(false)
    } else if (value === "back" && part3 === true) {
      console.log("Estas en la segunda pagina");
      setPart1(false)
      setPart2(true)
      setPart3(false)
    }

  }

  return (
    <>
      <h2>Bienvenido</h2>
      <div><p>Ya no queda nada, completando la siguiente información formarás parte de la comunidad Kmon.</p></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Primera parte del formulario */}
        {part1 ?
          <fieldset>
            {/* <div>
              <label htmlFor="">Nombre</label>
              <input type="text"
                {...register('nombre', {
                  required: {
                    value: true,
                    message: "Por favor introduce un Nombre válido"
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "El formato no es correcto"
                  }
                })
                } />
              {errors.nombre?.type === 'required' && <p>Por favor introduzca su nombre</p>}
              {errors.nombre?.type === 'pattern' && <p>Por favor introduzca un nombre válido</p>}

            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email"
                {...register('email', {
                  required: {
                    value: true,
                    message: "Por favor introduce un Email válido"
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto"
                  }
                })
                } />
              {errors.email?.type === 'required' && <p>{errors.email.message}Por favor introduce un Email válido</p>}
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password"{
                ...register('password', {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres"
                  }
                })} />
              {errors.password?.type === 'required' && <p>{errors.password.message}Por favor, introduce una contraseña válida</p>}
              {errors.password?.type === 'minLength' && <p>La contraseña debe de tener mínimo 8 caracteres</p>}
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
              />
              {errors.terms?.type === 'required' && <p>Tienes que aceptar los términos y condiciones para poder formar parte de nuestra comnunidad</p>}

            </div> */}
          </fieldset>
          : null}

        {/* segunda parte del formulario */}
        {part2 ?
          <div>
            <h2>Preferencias</h2>
            <div><p>En una escala de 1-5 (Muy poco-Mucho)¿Qué importancia otorgarías a cada uno de estos conceptos a la hora deconsumir alimentos?</p></div>



            <div>
              <label>
                <span >
                  Correo
                </span>
              </label>
              <input
                type="text"
                autoComplete="off"
                name="email3"

                placeholder="ejemplo@gmail.com"
                {...register("email3", {
                  required: { value: true },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto"
                  }
                })}
              />
              {errors.email3 && <span><p>Error</p></span>}
            </div>






            <fieldset>
              <legend>Producto de temporada</legend>
              <label htmlFor="1">
                <input
                  {...register("ProductoTemporada", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="ProductoTemporada"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("ProductoTemporada", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="ProductoTemporada"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("ProductoTemporada", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="ProductoTemporada"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("ProductoTemporada", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="ProductoTemporada"
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  {...register("ProductoTemporada", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="ProductoTemporada"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}

              </label>
            </fieldset>

            <fieldset>
              <legend>Productos frescos</legend>
              <label htmlFor="1">
                <input
                  {...register("ProductoFresco", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="ProductoFresco"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("ProductoFresco", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="ProductoFresco"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("ProductoFresco", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="ProductoFresco"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("ProductoFresco", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="ProductoFresco"
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  {...register("ProductoFresco", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="ProductoFresco"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}

              </label>
            </fieldset>

            <fieldset>
              <legend>Orgánico</legend>
              <label htmlFor="1">
                <input
                  {...register("Organico", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="Organico"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("Organico", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="Organico"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("Organico", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="Organico"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("Organico", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="Organico"
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  {...register("Organico", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="Organico"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}

              </label>
            </fieldset>

            <fieldset>
              <legend>Saludable</legend>
              <label htmlFor="1">
                <input
                  {...register("saludable", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="saludable"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("saludable", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="saludable"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("saludable", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="saludable"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("saludable", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="saludable"
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  {...register("saludable", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="saludable"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}

              </label>
            </fieldset>

            <fieldset>
              <legend>Artesanal</legend>
              <label htmlFor="1">
                <input
                  {...register("artesanal", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="artesanal"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("artesanal", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="artesanal"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("artesanal", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="artesanal"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("artesanal", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="artesanal"
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  {...register("artesanal", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="artesanal"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}

              </label>
            </fieldset>
          </div>
          : null}

        {/* tercera parte del formulario */}
        {part3 ?
          <div>
            <h1>SEGUNDA PAGINA PREFERENCIAS</h1>

            <fieldset>
              <legend>Sostenible</legend>
              <label htmlFor="1">
                <input
                  {...register("sostenible", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="sostenible"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("sostenible", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="sostenible"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("sostenible", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="sostenible"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("sostenible", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="sostenible"
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  {...register("sostenible", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="sostenible"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}

              </label>
            </fieldset>
            <fieldset>
              <legend>Basura 0</legend>
              <label htmlFor="1">
                <input
                  {...register("basura0", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="basura0"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("basura0", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="basura0"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("basura0", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="basura0"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("basura0", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="basura0"
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  {...register("basura0", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="basura0"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}

              </label>
            </fieldset>
            <fieldset>
              <legend>Km 0</legend>
              <label htmlFor="1">
                <input
                  {...register("km0", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="km0"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("km0", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="km0"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("km0", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="km0"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("km0", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="km0"
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  {...register("km0", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="km0"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}

              </label>
            </fieldset>
            <fieldset>
              <legend>Vegano</legend>
              <label htmlFor="1">
                <input
                  {...register("vegano", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="vegano"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("vegano", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="vegano"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("vegano", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="vegano"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("vegano", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="vegano"
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  {...register("vegano", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="vegano"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}

              </label>
            </fieldset>
            <fieldset>
              <legend>Vegetariano</legend>
              <label htmlFor="1">
                <input
                  {...register("vegetariano", { required: true })}
                  type="radio"
                  value="1"
                  id="1"
                  name="vegetariano"
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  {...register("vegetariano", { required: true })}
                  type="radio"
                  value="2"
                  id="2"
                  name="vegetariano"
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  {...register("vegetariano", { required: true })}
                  type="radio"
                  value="3"
                  id="3"
                  name="vegetariano"
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  {...register("vegetariano", { required: true })}
                  type="radio"
                  value="4"
                  id="4"
                  name="vegetariano"
                />
                4

              </label>
              <label htmlFor="5">
                <input
                  {...register("vegetariano", { required: true })}
                  type="radio"
                  value="5"
                  id="5"
                  name="vegetariano"
                />
                5
                {errors.vegetariano?.type === 'required' && <p>Por favor, marca algún valor</p>}
              </label>
            </fieldset>

          </div>
          : null}

        {/* botones */}
        {part3 ?
          <input type="submit" value="Regístrate" />
          : null}
      </form>
      {part2 || part3 ?
        <button onClick={handleChangePart} value="back">Atras</button>
        : null}
      {part1 || part2 ?
        <button onClick={handleChangePart} value="next">Siguiente</button>
        : null}
    </>
  )
}

export default SignUp;
