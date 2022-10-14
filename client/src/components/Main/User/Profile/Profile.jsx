import { checkUserContext } from '../../../../context/checkUserContext'
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();
  const { userCheck } = useContext(checkUserContext);//Hook para obtener el email del usuario logado
  const { userData } = useContext(checkUserContext)//Hook para guardar los datos del perfil de usuario
  const { userDetails } = useContext(checkUserContext);

  console.log(userCheck);


  useEffect(() => {
    if (userData == null) {
      userDetails()
    }
    console.log(userCheck);
    if (userCheck === null) {
      navigate("/home");
    }
  }, []);


  return <div>
    <Link to="/user/profile/edit"><button>Configuracion</button></Link>

    <h1>{userData ? userData.email : "Usuario"}</h1>
    <img style={{ width: "100px" }} src='https://cdn-icons-png.flaticon.com/512/17/17004.png'></img>

    <h1>Tus recomendaciones</h1>
    <p>segun tus preferencias se mostraran unas cards de servicios de negocios</p>
    <h1>Tu historial de reservas</h1>
    <p>se muestran todas las reservas que has hecho </p>
    <p>RESERVAS DE DONDE?? DE UN SERVICIO?</p>

    <h1>Descuentos</h1>
    <p>mostrar todos los descuentos de todas las empresas</p>
    <p>ESOS DESCUENTOS DONDE SE ALMACENAN??</p>

  </div >;
};

export default Profile;
