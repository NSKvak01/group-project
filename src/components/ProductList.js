import React, {useEffect} from 'react'
import {Box} from "@mui/system"
import ItemComponent from './ItemComponent'
import { useHomeContext } from '../context/HomeContext'
import { fetchProducts } from '../fetchData'



function ProductList(props) {
    const {clothesData, setClothesData} = props
    const {gender} = useHomeContext()
    
    // if (gender==="Show all" || gender === ""){
        
    // }
    const filteredProducts = gender==="Show all" ? clothesData : clothesData.filter(item => item.gender === gender)



    return (
        <Box sx={{display:"grid",  
        gridTemplateAreas:`"a a a" 
        "a a a"`,
        width:"full",
        marginTop:"20px"}}>
            {filteredProducts.map(clothes=> 
                <ItemComponent 
                clothes={clothes}
                />
            )}
        </Box>
    )
}

export default ProductList
