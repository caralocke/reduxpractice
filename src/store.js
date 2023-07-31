import { configureStore } from "@reduxjs/toolkit";
import productReducer from './feature/productslice'
import cartReducer from './feature/cartslice'

const globalStore = configureStore({
  reducer : {
    product : productReducer,
    cart : cartReducer
  }

});

export default globalStore;