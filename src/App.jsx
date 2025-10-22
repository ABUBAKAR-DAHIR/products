import React from 'react'
import Register from './Sections/Register'
import Login from './Sections/Login'
import Header from './Sections/Header'
import { Route, Routes } from 'react-router'
import Products from './Components/Products'

export default function App() {
  return (
    <>
      <Header /> 

      <Routes>
        <Route element={<p>This is the Home Page</p>} path='/'/>
        <Route element={<Register />} path='/register'/>
        <Route element={<Login />} path='/login'/>
        <Route element={<Products />} path='/products'/>

      </Routes>

    </>
  )
}
