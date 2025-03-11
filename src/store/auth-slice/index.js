import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
        username:'',
        email:'',
        password:'',
    },
    
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleSignUp:(state,action)=>{
            state.user = {...action.payload}
            localStorage.setItem('user',JSON.stringify(state.user));
        },
    }
})

export const {handleSignUp} = UserSlice.actions

export default UserSlice.reducer;