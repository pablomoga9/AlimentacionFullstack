import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Restaurants from './Restaurants/Restaurants'
import Stores from './Stores/Stores';
import Profile from './User/Profile'

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Login />} path={"/login"} />
        <Route element={<Restaurants />} path={"/restaurants"} />
        <Route element={<Stores />} path={"/stores"} />
        <Route element={<Profile />} path={"/user/profile"} />
      </Routes>
    </main>
  )
}

export default Main