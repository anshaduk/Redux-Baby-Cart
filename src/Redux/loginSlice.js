import {createSlice} from '@reduxjs/toolkit';

const initialState=[]
const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            const indexToRemove = action.payload;
            // Ensure index is valid before removing
            if (indexToRemove >= 0 && indexToRemove < state.length) {
              state.splice(indexToRemove, 1);
            }
          
        },
    }
})
export const {loginUser,remove} =loginSlice.actions;
export default loginSlice.reducer