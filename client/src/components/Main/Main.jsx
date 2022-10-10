import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </main>
  )
}

export default Main