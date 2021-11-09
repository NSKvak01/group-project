import React from 'react'
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header(props) {
    const history = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor:"black"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:"40px" }} onClick={()=>history("/")}>
                        ASOS
                    </Typography>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Typography variant="h6" component="div" sx={{  fontSize:"20px", marginRight:"20px"}} onClick={()=>history("/saved")}>
                        Favorites
                    </Typography>
                        <ShoppingCartIcon style={{fontSize:"30px"}} onClick={()=>history("/cart")}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header
