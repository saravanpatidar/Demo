import { configureStore } from '@reduxjs/toolkit'
import  userReducer from './auth-slice/index'
import createReducer from './cart-slice/cart-slice'

const store = configureStore({
    reducer:{
        auth:userReducer,
        cart:createReducer,
    }
})


export default store;