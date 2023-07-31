import { configureStore } from "@reduxjs/toolkit";
import productReducer from './feature/productslice'

const globalStore = configureStore({
  reducer : {
    product : productReducer
  }

});

export default globalStore;