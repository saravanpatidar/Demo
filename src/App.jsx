import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/shop/Dashboard'
import Form from './components/Form'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Products from './pages/shop/Products'
import LoginPage from './pages/auth/Login'
import RegisterPage from './pages/auth/Register'
import CheckAuth from './common/CheckAuth'
import UnAuth_page from './pages/unauth-page/UnAuth_page'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthChange } from './store/auth-slice'
import axios from 'axios'
import CreateProduct from './components/CreateProduct'



function App() {
 const {isAuthenticated} = useSelector(state=>state.auth);
 const navigate = useNavigate();
 const dispatch = useDispatch();

 useEffect(()=>{
  const token = localStorage.getItem('token');
  
  if(token){
    // axios.get('http://localhost:3001/auth/check-auth',{
    //   headers:{
    //     Authorization: token
    //   }
    // }).then((res)=>{
    //   console.log(res);
    //   dispatch(setAuthChange({isAuthenticated:true, user:res.data.user}))
    // }).catch((err)=>{
    //   if(err.response && err.response.status===401){
    //     localStorage.removeItem('token');
    //     dispatch(setAuthChange({isAuthenticated:false, user:null}));
    //     navigate('/auth/login');
    //   }
    // })
    dispatch(setAuthChange({isAuthenticated:true, user:null}))
    
  }else{
    dispatch(setAuthChange({isAuthenticated:false, user:null}))
    navigate('/auth/login');
  }
 },[ navigate,dispatch ])

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
          <Route path='create-product' element={<CreateProduct />} />
        </Route>
      </Route>
      <Route path="*" element={<UnAuth_page />} />
    </Routes>
  )
}

export default App
