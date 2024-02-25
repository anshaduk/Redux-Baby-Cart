import {createSlice} from '@reduxjs/toolkit';

const initialState=[]
const sighnupSlice=createSlice({
    name:'sighnup',
    initialState,
    reducers:{
        addSighnupUser:(state,action)=>{
            state.push(action.payload);
        }
    }
})

export const {addSighnupUser}=sighnupSlice.actions;
export default sighnupSlice.reducer;