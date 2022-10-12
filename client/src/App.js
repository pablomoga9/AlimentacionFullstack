import React,{useState} from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {checkUserContext} from './context/checkUserContext';

import '../src/styles/styles.scss';

function App() {
  const [userCheck,setUserCheck] = useState("");




  return (
    <div className="App">
      <BrowserRouter>
        <checkUserContext.Provider value={{userCheck,setUserCheck}}>
        <Header />
       
        <Main />
        </checkUserContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
