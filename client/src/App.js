import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import 'normalize.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { checkUserContext } from './context/checkUserContext';
import '../src/styles/styles.scss';
import jwtDecode from 'jwt-decode';


function App() {
  const [userCheck, setUserCheck] = useState(null);
  const [userData, setUserData] = useState(null)//Hook para almacenar los datos del perfil de usuario
  const [stores, setStores] = useState(null);//Hook para almacenar el listado de tiendas
  const [storeDetails, setStoreDetails] = useState(null);//Hook para almacenar los detalles de una store
  const [restaurantDetails, setRestaurantDetails] = useState(null);//Almacenar detalles de restaurants
  const [discounts, setDiscounts] = useState(null);//Hook con el listado de los descuentos


  console.log("userCheck ", userCheck);

  useEffect(() => {

  }, [])

  //Users----------------------------------------------------------------------------
  //Checkear usuario
  const checkUser = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/checkUser', { withCredentials: true });
      const userToken = res.data.msg.substr(6, res.data.msg.length);
      const user = await jwtDecode(userToken);
      console.log("Token user ", user);
      setUserCheck(user.email);
      console.log(userCheck)

    }
    catch (error) {
      console.log(error.stack);
    }
  }

  //Obtener todos los datos de user
  const userDetails = async () => {
    try {
      console.log(userCheck);
      const datas = await axios.get(`http://localhost:5000/api/getUser/?email=${userCheck}`);
      setUserData(...datas.data)
      console.log("user detail", datas.data);
    } catch (error) {
      console.log(error);
    }
  }
  //------------------------------------------------------------------

  //Stores -----------------------------------------------------------
  //Obtener listado de todas las tiendas
  const getStores = async () => {
    try {
      console.log("Estas en getStoresSortBy");

      const res = await axios.get('https://rickandmortyapi.com/api/character');
      setStores(res.data.results.slice(0, 5));
    }
    catch (error) {
      console.log(error);
    }
  }

  //Obtener los detalles de una store
  const getStoreDetails = async (id) => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      console.log(res);
      setStoreDetails(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  //------------------------------------------------------------------

  //Obtener los detalles de un restaurante
  const getRestaurantDetails = async (id) => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setRestaurantDetails(res.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  //Obtener los descuentos
  const getDiscounts = async (id) => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      console.log(res);
      setDiscounts(res.data)
    } catch (error) {
      console.log(error);
    }
  }


  const data = {
    userDetails,
    checkUser,
    userCheck,
    setUserCheck,
    userData,
    setUserData,
    stores,
    setStores,
    getStores,
    getStoreDetails,
    storeDetails,
    setStoreDetails,
    restaurantDetails,
    setRestaurantDetails,
    getRestaurantDetails,
    discounts,
    setDiscounts,
    getDiscounts
  }


  return (
    <div className="App">
      <BrowserRouter>
        <checkUserContext.Provider value={data}>
          <Header />

          <Main />
        </checkUserContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
