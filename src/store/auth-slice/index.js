import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthenticated:false,
    user:null,
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthChange:(state,action)=>{
            // console.log(action.payload);
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user;
        },
        logOut:(state,action)=>{
            state.isAuthenticated=false;
            state.user=null;
        }
    }
})

export const {setAuthChange, logOut} = UserSlice.actions;

export default UserSlice.reducer;