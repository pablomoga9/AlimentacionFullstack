import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignUp/>} path="/signup"/>
        <Route element={<Login/>} path={"/login"}/>
      </Routes>
    </main>
  )
}

export default Main