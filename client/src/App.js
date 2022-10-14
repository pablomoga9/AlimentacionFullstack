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
  const [userData, setUserData] = useState(null)//Hook para guardar los datos del perfil de usuario

  console.log("userCheck ", userCheck);

  useEffect(() => {

  }, [])

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
      const datas = await axios.get(`/api/getUser/?email=${userCheck}`);
      setUserData(...datas.data)
      console.log("user detail", datas.data);
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
    setUserData
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
