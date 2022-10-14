import { checkUserContext } from "../../../../../context/checkUserContext"
import { useForm } from 'react-hook-form';
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Edit = () => {
  const navigate = useNavigate();
  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm();//Formulario
  const { userCheck } = useContext(checkUserContext);//Hook para obtener el email del usuario logado
  const { userData, setUserData } = useContext(checkUserContext)//Hook para guardar los datos del perfil de usuario
  const { userDetails } = useContext(checkUserContext);
  const checkList = ["service_loca", "service_recogida", "service_reparto", "ambiente_dia", "ambiente_noche", "pet_friendly", "LGTBI_friendly", "slow_food", "healthy", "fresco", "de_temporada", "sostenible", "organico", "eco", "bio", "de_proximidad", "vegetariano", "vegano"];//CheckList services
  const [checked, setChecked] = useState({});//Estado para ver cuantos check hay marcados

  useEffect(() => {
    console.log("usuario: ", userCheck);
    console.log("Datos user", userData);
    if (userData == null) {
      userDetails()
    }
    if (userCheck === null) {
      navigate("/home");
    }
  }, []);

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
  console.log(checked);

  return <div>
    {/* Formulario con los campos del perfil a editar */}
    {/* Precarga de los datos del usuario */}
    {userData ? setValue("email", userData.email) : "..."}
    <h1>{userData ? userData.email : "..."}</h1>
    {
      userData ? <form onSubmit={handleSubmit(editUser)}>
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
      </form> : "Loading form..."
    }
  </div>;
};

export default Edit;
