import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


//name
//initialstate
//reducers
//extrareducers

const data = [
  {
    name : 'Product 1',
    id : 1
  },
  {
    name : 'Product 2',
    id : 2
  },
  {
    name : 'Product 3',
    id : 3
  },
]


const initialState = {
  productList : [],
  isLoading : false,
  isFailed : false,
};

export const callProductListApi = createAsyncThunk('/product/callproductlistapi', async function(){
  try {
    const apiResponse = await fetch('https://dummyjson.com/products')
    const result = await apiResponse.json()

    return result;

  } catch(error) {
    console.log(error)
  }
})


//pending state
//fulfilled state
//rejected
const productSlice = createSlice({
  name : 'product', 
  initialState,
  reducers : {
    getProducts: (state) => {
      state.productList = data;
    }
  },
  extraReducers : {
    [callProductListApi.pending] : (state) => {
      state.isLoading = true
    },
    [callProductListApi.fulfilled] : (state, action) => {
      console.log('action', action);
      state.isLoading = true
    },
    [callProductListApi.rejected] : (state) => {
      state.isLoading = false
      state.isFailed = true
    }
  }
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;