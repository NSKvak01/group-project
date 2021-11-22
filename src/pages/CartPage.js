import React,{useEffect, useState} from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import  {Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCartAction, addToCartAction} from "../redux/shoppingCartReducer"

function CartPage() {
    const history = useNavigate()
    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.shoppingCart)
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        const total1 = shoppingCart.reduce(
                (accumulator, item)=>{
                    return accumulator + item.price * item.quantity
                }, 0)
                setTotal(total1)
            }
    , [])

    console.log(shoppingCart)

    return (
        <div>
            <Header />
            {
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"full", marginTop:"150px"}}>
                {shoppingCart.length===0 && <p>You haven't added anything to the cart</p>}
                {shoppingCart.map(item =>
                    <Box key={item.id} >
                        <Card style={{display:"flex", justifyContent:"space-around", alignItems:"center", minWidth:"550px", maxWidth:"1000px", marginBottom:"20px", padding:"15px 0"}}>
                            <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                                <CardMedia
                                component="img"
                                image={item.image}
                                alt="green iguana"
                                style={{width:"100px", height:"100px"}}
                                />
                                <Box sx={{display:"flex", flexDirection:"column", marginLeft:"15px"}}>
                                    <Typography sx={{fontSize:'24px', color:"black"}}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" color="primary" style={{fontSize:"18px",fontWeight:"bold"}}>
                                        $ {item.price}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <Button style={{fontSize:"20px"}} onClick={()=>{dispatch(removeFromCartAction({id:item.id},"REMOVE_ONE"))}}>-</Button>
                                        <Typography variant="body1" color="primary" style={{fontSize:"18px", fontWeight:"bold"}}>
                                            x{item.quantity}
                                        </Typography>
                                    <Button style={{fontSize:"20px"}} onClick={()=>{dispatch(addToCartAction({id:item.id}, "ADD_ONE"))}}>+</Button>
                                </Box>
                            <DeleteIcon aria-label="delete" size="big" style={{color:"red", }} onClick={()=>{dispatch(removeFromCartAction({id:item.id}, "REMOVE_FROM_CART"))}} />
                        </Card>
                    </Box>
                )}
                <Box mt={6} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Box>
                        <Typography>
                            Total: $ {total.toFixed(2)}
                        </Typography>
                    </Box>
                    <Box mb={2} mt={4}>
                        <Button variant="contained" style={{backgroundColor:"black"}} onClick={()=>{dispatch({type:"EMPTY_CART"})}} > <ReplayIcon style={{width:"20px", marginRight:"5px", backgroundColor:"black"}} /> Empty Cart</Button>
                    </Box>
                    <Box mb={2}>
                        <Button variant="contained" style={{backgroundColor:"black"}} onClick={()=>history("/")}>Back to Home</Button>
                    </Box>
                </Box>
            </Box>
            }
        </div>
    )
}

export default CartPage
