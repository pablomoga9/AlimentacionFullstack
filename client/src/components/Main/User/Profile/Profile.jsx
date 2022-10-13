import { useForm } from 'react-hook-form';
import axios from 'axios';
import { checkUserContext } from '../../../../context/checkUserContext'
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();
  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm();//Formulario
  const { userCheck } = useContext(checkUserContext);//Hook para obtener el email del usuario logado
  const [data, setData] = useState()//Hook para guardar los datos del perfil de usuario
  const checkList = ["service_loca", "service_recogida", "service_reparto", "ambiente_dia", "ambiente_noche", "pet_friendly", "LGTBI_friendly", "slow_food", "healthy", "fresco", "de_temporada", "sostenible", "organico", "eco", "bio", "de_proximidad", "vegetariano", "vegano"];//CheckList services
  const [checked, setChecked] = useState({});//Estado para ver cuantos check hay marcados
  console.log(userCheck);

  useEffect(() => {
    userDetails();
    console.log(userCheck);
    if (userCheck === "") {
      navigate("/");
    }
  }, []);

  //Obtener todos los datos de user
  const userDetails = async () => {
    console.log("user detail");
    try {
      const { data } = await axios.get(`/api/getUser/?email=${userCheck}`);
      setData(...data)
    } catch (error) {
      console.log(error);
    }
  }

  //Editar los datos del usuario
  const editUser = async (data) => {
    try {
      const refactorData = {
        email: data.email,

      }
      const mergedData = { ...refactorData, ...checked };//unimos el objeto refactor data que contiene los datos de los inputs, con los datos de los checkbox
      console.log("USER EDITED", mergedData);
      // await axios.put('/api/updateUser', mergedData);
    } catch (error) {
      console.log(error, "No se ha podido editar el Usuario")
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

  // Return classes based on whether item is checked
  // const isChecked = (item) =>
  //   checked.includes(item) ? true : false;

  console.log(checked);


  return <div>
    {/* Campos que se pueden editar del perfil */}
    {data ? setValue("email", data.email) : "..."}
    <h1>{data ? data.email : "..."}</h1>
    <h2>Role: {data ? data.role : "..."}</h2>
    {/* Formulario con los campos del perfil */}
    {data ? <form onSubmit={handleSubmit(editUser)}>
      <fieldset>
        <div>
          <label id="email">Email</label>
          <input id="" label="email" type="text" name="email"
            {...register("email", { required: true, minLength: { value: 1, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <p>Copiar mas campos a mostrar/editar</p>
        <p>Campos select para que indique sus preferencias (TB se peuden editar)</p>
        <h3>Preferencias</h3>
        {checkList.map((item, i) => (
          <article key={i}>
            <input type="checkbox" value={item} onChange={handleCheck} />
            <span>{item}</span>
          </article>
        ))
        }
        <div>
          <input type="checkbox" id="" name='servicio_local'
            {...register("servicio_local", { minLength: { value: 1, message: "." } })} />
          Servicio local
        </div>
        <div>
          <button type="submit">Edit profile</button>
        </div>
      </fieldset>
    </form> : "Loading form..."}
    <h1>Tus recomendaciones</h1>
    <p>segun tus preferencias se mostraran unas cards de servicios de negocios</p>
    <h1>Tu historial de reservas</h1>
    <p>se muestran todas las reservas que has hecho </p>
    <p>RESERVAS DE DONDE?? DE UN SERVICIO?</p>

    <h1>Descuentos</h1>
    <p>mostrar todos los descuentos de todas las empresas</p>
    <p>ESOS DESCUENTOS DONDE SE ALMACENAN??</p>

  </div>;
};

export default Profile;
