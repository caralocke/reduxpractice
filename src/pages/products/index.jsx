import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../feature/productslice";

function Products() {
const dispatch = useDispatch()
const {productList} = useSelector(state=>state.product)
console.log(useSelector(state=>state));
useEffect(() => {
dispatch(getProducts())
}, []);

console.log('product list', productList)

  return ( 
    <Stack>
      <Typography>Products</Typography>
    </Stack>
   );
}

export default Products;