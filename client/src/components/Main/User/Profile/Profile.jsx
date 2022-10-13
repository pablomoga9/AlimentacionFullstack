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
    try {
      console.log("Details");
      const { data } = await axios.get(`/api/getUser/?email=${userCheck}`);
      setData(...data)
      console.log("Data user details", data);//Mostrar en consola los datos del usuario buscado
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);

  //Editar los datos del usuario
  const editUser = async (data) => {
    try {
      console.log("EDIT USER DATA", data);
      const refactorData = {
        email: data.email,
      }
      await axios.put('/api/updateUser', refactorData);
    } catch (error) {
      console.log(error, "No se ha podido editar el Usuario")
    }
  }


  return <div>
    {/* Campos que se pueden editar del perfil */}
    {data ? setValue("email", data.email) : "..."}
    <h1>{data.email}</h1>
    <h2>Role: {data.role ? data.role : "???"}</h2>
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

        <div>
          <button type="submit">Edit profile</button>
        </div>
      </fieldset>
    </form> : "Loading form..."}
    <h1>Tus recomendaciones</h1>
    <p>segun tus preferencias se mostraran unos post u otros</p>
    <h1>Tu historial de reservas</h1>
    <p>se muestran todas las reservas que has hecho</p>

    <h1>Descuentos</h1>
    <p>mostrar todos los descuentos de todas las empresas</p>

  </div>;
};

export default Profile;
