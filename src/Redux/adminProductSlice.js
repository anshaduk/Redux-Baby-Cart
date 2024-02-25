import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
};
const adminProductSlice=createSlice({
    name:'admin',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            state=state.filter((item)=>item.id!==action.payload)
        },
        addNewProduct:(state,action)=>{
            state.items.push(action.payload)
        }
    }
})
export const {add,remove,addNewProduct} = adminProductSlice.actions;
export default adminProductSlice.reducer