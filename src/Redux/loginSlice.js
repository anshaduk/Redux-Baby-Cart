import {createSlice} from '@reduxjs/toolkit';

const initialState=null
const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {loginUser} =loginSlice.actions;
export default loginSlice.reducer