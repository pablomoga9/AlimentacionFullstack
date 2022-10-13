import { useForm } from 'react-hook-form';
import axios from 'axios';
import { checkUserContext } from '../../../../context/checkUserContext'
import React, { useEffect, useState, useContext } from "react";


const Profile = () => {
  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm();//Formulario
  const { userCheck } = useContext(checkUserContext);//Hook para obtener el email del usuario logado
  const [data, setData] = useState()//Hook para guardar los datos del perfil de usuario


  useEffect(() => {
    userDetails();
  }, []);

  //Obtener todos los datos de user
  const userDetails = async () => {
    try {
      const { data } = await axios.get(`/api/getUser/${userCheck}`);
      setData(data)
      console.log(data);//Mostrar en consola los datos del usuario buscado
    } catch (error) {
      console.log(error);
    }
  }

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
        <div>
          <button type="submit">Edit profile</button>
        </div>
      </fieldset>
    </form> : "Loading..."}
    Incluir:
    -Configuración (imagen,nickname y preferencias)
    -Recomendaciones (en base a las preferencias del usuario)
    -Historial (creo que de reservas)
    -Descuentos
  </div>;
};

export default Profile;
