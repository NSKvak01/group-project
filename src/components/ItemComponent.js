import React, {useState} from 'react'
import {Box} from "@mui/system"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useShoppingCart } from '../context/CartContext';
import { useSavedList } from '../context/SavedContext';

function ItemComponent(props) {
    const {addItemToCart} = useShoppingCart()
    const {addToSaved} = useSavedList()
    const {clothes} = props
    const [clicked, setClicked] = useState(false)
    
    
    return (
        
        <Box key={clothes.id}>
                    <Card sx={{ maxWidth: "800px", minWidth:"300px", margin:'10px', gridArea:"a" }}>
                        <CardActionArea>
                            <CardContent>
                            <CardMedia
                            component="img"
                            height="500"
                            image={clothes.image}
                            alt="green iguana"
                            />
                            <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'24px', marginTop:"20px"}}>
                                {clothes.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{marginTop:"10px"}}>
                                {clothes.description}
                            </Typography>
                            <Typography variant="body1" color="primary" sx={{marginTop:"20px", fontSize:"20px", marginBottom:"-10px", fontWeight:"bold"}}>
                                $ {clothes.price}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
                            <Button size="large" color="primary"  style={{fontSize:"16px"}} onClick={()=>addItemToCart({id:clothes.id, title:clothes.title, price:clothes.price, image:clothes.image, description:clothes.description})} >
                            Add to Cart
                            </Button>
                            <IconButton aria-label="add to favorites" onClick={()=>{addToSaved({id:clothes.id, title:clothes.title, price:clothes.price, image:clothes.image, description:clothes.description}); setClicked(true)}}>
                                <FavoriteIcon style={clicked ? {color:"red"}: {color:"grey"}}/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Box>
    )
}


export default ItemComponent
