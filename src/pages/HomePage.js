import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import { fetchProducts } from '../fetchData'
import {Box} from "@mui/system"
import ProductList from "../components/ProductList"
import Filter from "../components/Filter"
import { HomeContextProvider } from '../context/HomeContext'

function HomePage(props) {
    const [clothesData, setClothesData] = useState([])
    useEffect(() => {
        fetchProducts().then(
            clothesData=>{
                setClothesData(clothesData)
            }
        )
    }, [])

    return (
        <HomeContextProvider>
            <Header />
            <Filter />
            <Box>
                <ProductList clothesData={clothesData} setClothesData={setClothesData} saved={props.saved}/>
            </Box>
        </HomeContextProvider>
    )
}

export default HomePage
