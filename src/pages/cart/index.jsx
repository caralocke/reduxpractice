import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {Add, Remove} from '@mui/icons-material'
import { addToCart, removeFromCart } from "../../feature/cartslice";

function Cart() {

  const {cartItems} = useSelector(state=> state.cart)
  const dispatch = useDispatch()
  
  console.log(cartItems)

  if(!cartItems.length) {
    return <Typography>Your cart is empty.</Typography>
  }

  return ( 
    <Stack
    sx={{
      display : 'grid',
      gridTemplateColumns : 'repeat(4, 1fr)',
      gap : '40px'
    }}
    >
    {cartItems && cartItems.length > 0 ? 
      cartItems.map(item=> (
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
              display: 'flex'
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
            justifyContent : 'center',
            alignItems : 'center'
          }}
          >
            <IconButton onClick={()=> dispatch(addToCart(item))}>
              <Add/>
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton onClick={()=> dispatch(removeFromCart(item))}>
              <Remove/>
            </IconButton>
          </Box>
        </Box>
      ))
      : null
    }
  </Stack>
   );
}

export default Cart;