import { configureStore } from '@reduxjs/toolkit'
import  userReducer from './auth-slice/index'

const store = configureStore({
    reducer:{
        auth:userReducer,
    }
})


export default store;