import React, {useEffect, useState} from 'react'
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
import { removeFromSavedAction } from '../redux/savedReducer';


function SavedPage(props) {
    const history = useNavigate()
    const dispatch = useDispatch()
    const saved = useSelector(state=>state.saved)

    // useEffect(() => {
    //     if (saved.length>0){
    //         window.localStorage.setItem('saved', JSON.stringify(saved))
    //     }
    // }, [])

    



    return (
        <div>
            <Header />
            {
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"full", marginTop:"150px"}}>
                {saved.length===0 && <p>You haven't saved anything</p>}
                {saved.map(item =>
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
                            <DeleteIcon aria-label="delete" size="big" style={{color:"red", }} onClick={()=>{dispatch(removeFromSavedAction(item.id))}} />
                        </Card>
                    </Box>
                )}
                <Box mt={6} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    
                    <Box mb={2} mt={4}>
                        <Button variant="contained" style={{backgroundColor:"black"}} onClick={()=>{dispatch({type: 'EMPTY_SAVED'})}} > <ReplayIcon style={{width:"20px", marginRight:"5px", backgroundColor:"black"}} /> Delete all saved items</Button>
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

export default SavedPage
