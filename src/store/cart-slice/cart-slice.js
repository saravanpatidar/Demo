import {createSlice} from '@reduxjs/toolkit'

const initialState={
    isOpen:false,
    cartItems:[],
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setIsOpen:(state,action)=>{
            state.isOpen=action.payload;
        },
    }
})

export const {setIsOpen} = cartSlice.actions;
export default cartSlice.reducer;