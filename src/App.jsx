import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/shop/Dashboard'
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/shop/Products'
import LoginPage from './pages/auth/Login'
import RegisterPage from './pages/auth/Register'
import CheckAuth from './common/CheckAuth'
import UnAuth_page from './pages/unauth-page/UnAuth_page'



function App() {
  const isAuthenticated = JSON.parse(localStorage.getItem('user'));
  console.log(isAuthenticated);

  return (
    <Routes>
      <Route path='/auth' element={<CheckAuth isAuthenticated={isAuthenticated} />} >
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>

      <Route path='/shop' element={<CheckAuth isAuthenticated={isAuthenticated} />}>
        <Route path='' element={<Sidebar />} >
          <Route path='' element={<Dashboard />} />
          <Route path='form' element={<Form />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Route>
      <Route path="*" element={<UnAuth_page />} />
    </Routes>
  )
}

export default App
