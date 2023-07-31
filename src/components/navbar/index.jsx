import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Home, ShoppingBag } from "@mui/icons-material";

function NavBar() {
  return ( 
    <Stack
    direction={'row'} 
    sx={{
      padding: '10px 15px'
    }}>
      <Box sx={{
        flex: '1',
        display: 'flex'
      }}>
        <IconButton size='large'>
          <Home/>
        </IconButton>
      </Box>
      <Box>
        <IconButton size='large'>
          <ShoppingBag/>
        </IconButton>
      </Box>
    </Stack>
   );
}

export default NavBar;