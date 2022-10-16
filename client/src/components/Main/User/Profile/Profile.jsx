import { checkUserContext } from '../../../../context/checkUserContext';
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Recommendations from '../Recommendations/Recommendations';
import Favorites from "../favorites/favorites"
import Discounts from "../../../common/Discounts/Discounts"

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
    <img style={{ width: "100px" }} src='https://cdn-icons-png.flaticon.com/512/17/17004.png'></img>
    <h1>{userData ? userData.email : "Usuario"}</h1>

    <Recommendations />

    <Discounts />

    <Favorites />

  </div >;
};

export default Profile;
