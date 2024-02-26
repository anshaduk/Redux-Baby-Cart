import { createSlice } from "@reduxjs/toolkit";
import MockProducts from "../DummyData/DummyProducts";

const initialState={
    items:MockProducts,
};
const adminProductSlice=createSlice({
    name:'admin',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            const indexToRemove = action.payload;
            // Ensure index is valid before removing
            if (indexToRemove >= 0 && indexToRemove < state.items.length) {
              state.items.splice(indexToRemove, 1);
            }
          
        },
        addNewProduct:(state,action)=>{
            state.items.push(action.payload)
        },
        edit: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            if (index !== -1) {
              state.items[index] = updatedProduct;
            }
          },
    }
})
export const {add,remove,addNewProduct,edit} = adminProductSlice.actions;
export default adminProductSlice.reducer