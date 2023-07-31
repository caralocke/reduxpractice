import { Stack, Typography, Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callProductListApi } from "../../feature/productslice";
import { addToCart } from "../../feature/cartslice";

function Products() {
  const dispatch = useDispatch()
  const {productList, isLoading} = useSelector(state=>state.product);
  const {cartItems} = useSelector(state=> state.cart);
  useEffect(() => {
    dispatch(callProductListApi())
  }, []);

  const handleAddToCart = (currentItem)=> {
    dispatch(addToCart(currentItem))
  } 

  if(isLoading) {
    return <Typography>Loading, please wait...</Typography>
  }

  return ( 
    <Stack 
    sx={{
      display : 'grid',
      gridTemplateColumns : 'repeat(4, 1fr)',
      gap : '40px'
    }}
    >
      {
        productList && productList.length > 0 ? 
        productList.map(item=> (
          <Box 
          sx={{
            border : '1px solid #d7cccc',
            borderRadius: '4px'
          }}
          key={item.id}>
            <Box
            sx={{
              height : '200px',
              padding : '10px',
              borderBottom : '1px solid #d7cccc'
            }}
            >
              <img 
              style={{
                width : '100%',
                height : '100%'
              }}
              src={item.thumbnail} alt={'item description'}/>
            </Box>
            <Box
            sx={{
              display : 'flex',
              padding: '10px'
            }}
            >
              <Typography
              sx={{
                flex : '1',
                color: '#6f6c6c',
                fontSize : '14px',
                display : 'flex'
              }}
              >{item.title}</Typography>
              <Typography
              sx={{
                color: '#6f6c6c',
                fontSize : '14px'
              }}
              >{item.price}</Typography>
            </Box>
            <Box
            sx={{
              padding : '10px'
            }}
            >
            <Typography
            sx={{
              color : '#000',
              fontSize : '16px',
              fontWeight : 'bold',
              whiteSpace : 'nowrap',
              textOverflow : 'ellipsis',
              overflow : 'hidden',
              width: '318px'
            }}
            >{item.description}</Typography>
            </Box>
            <Box
            sx={{
              padding : '10px',
              display : 'flex',
              justifyContent : 'center'
            }}
            >
              <Button
              sx={{
                padding: '8px 25px',
                border: '1px solid #000'
              }}
              onClick={()=>handleAddToCart(item)}
              disabled = {cartItems && cartItems.length > 0 ? 
                cartItems.map(cartItem=>cartItem.id).indexOf(item.id) > -1
                : false}
              >Add To Cart</Button>
            </Box>
          </Box>
        ))
        : null
      }
    </Stack>
   );
}

export default Products;