import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import sighnupReducer from './sighnupSlice'
import loginReducer from './loginSlice'
import adminProductReducer from './adminProductSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer,
        sighnup:sighnupReducer,
        login:loginReducer,
        admin:adminProductReducer,
    }
})
export default store