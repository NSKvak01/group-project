import React,{createContext, useContext, useReducer, useEffect} from 'react'
export const CartContext = createContext()
export const useShoppingCart = () => useContext(CartContext)

const ADD_TO_CART_CREATOR = "ADD_TO_CART"
const REMOVE_FROM_CART_CREATOR = "REMOVE_FROM_CART"
const REMOVE_ONE_CREATOR = "REMOVE_ONE"
const ADD_ONE_CREATOR = "ADD_ONE"

const addToCartAction = ({id, title, price, image, description, quantity}, type) =>{
    return {
        type: type,
        payload:{
            id,
            title,
            price,
            image,
            description,
            quantity,
            timeStamp:Date.now()
        }
    }
}

const removeFromCartAction = ({id}, type)=>{
    return ({
        type:type,
        payload:{
            id
        }
    })
}

const sortCartItems = (shoppingCartArray)=>{
    const sorted = shoppingCartArray.sort(function(a,b){
        return b.timeStamp - a.timeStamp
    })
    return sorted
}

const reducer = (state, action) =>{
    switch (action.type){
        case "ADD_TO_CART":{
            const {payload:{id, title, price, image, description, timeStamp}} = action
            const itemFound = state.find(item=>item.id === id)
            if(itemFound){
                return sortCartItems (
                        [...state.filter(item=>item.id!==id),{
                            ...itemFound,
                            quantity:itemFound.quantity+1
                        }]
                    )
            }
                return sortCartItems(
                    [...state,{
                        id,
                        title, 
                        price, 
                        image, 
                        description, 
                        quantity:1, 
                        timeStamp
                    }])
            }
        case "REMOVE_FROM_CART":{
            const {payload:{id}} = action
            const itemFound = state.find(item=>item.id===id)
            if(itemFound){
                return sortCartItems([...state.filter(item=>item.id!==id)])
            } 
        }
        case "ADD_ONE":{
            const {payload:{id}} = action
            const itemFound = state.find(item=>item.id === id)
            if(itemFound){
                return sortCartItems(
                    [...state.filter(item=>item.id!==id),{
                        ...itemFound,
                        quantity:itemFound.quantity+1

                    }]
                )
            }
        }
        case "REMOVE_ONE":{
            const {payload:{id}} = action 
            const itemFound = state.find(item=>item.id===id)
            if (itemFound){
                if(itemFound.quantity>1){
                    return sortCartItems(
                        [...state.filter(item=>item.id!==id),
                        {
                            ...itemFound,
                            quantity: itemFound.quantity -1
                        }]
                    )
                } else{
                    return sortCartItems(
                        [...state.filter(item=>item.id!==id)]
                    )
                }
            }
        }
        case "EMPTY_CART":{
            return []
        }
    }
}

export const countTotal = (shoppingCart)=>{
    const total = shoppingCart.reduce(
        (accumulator, item)=>{
            return accumulator + item.price * item.quantity
        }, 0)
    return total
}

export function CartContextProvider(props) {
    const initialCart = JSON.parse(window.localStorage.getItem('shoppingCart')) ? JSON.parse(window.localStorage.getItem('shoppingCart')) : []
    const [cart, dispatch] = useReducer(reducer, initialCart)

    useEffect(() => {
        if (cart.length>0){
            window.localStorage.setItem('shoppingCart', JSON.stringify(cart))
        }
    }, [cart])

    const addItemToCart = ({id, title, price, image, description, quantity, timeStamp})=>{
        dispatch (
            addToCartAction({id, title, price, image, description, quantity, timeStamp}, ADD_TO_CART_CREATOR)
        )
    }
    const removeItemFromCart = (id)=>{
        dispatch(
            removeFromCartAction({id}, REMOVE_FROM_CART_CREATOR)
            )
        }
        
    const reduceQuantity = (id)=>{
        dispatch(
            removeFromCartAction(id, REMOVE_ONE_CREATOR)
        )
    }

    const addQuantity = ({id, title, price, image, description, quantity, timeStamp})=>{
        dispatch (
            addToCartAction({id, title, price, image, description, quantity, timeStamp}, ADD_ONE_CREATOR)
        )
    }
    
    const emptyCart = ()=>{
        dispatch(
            {type:"EMPTY_CART"}
        )
    }
    

    return (
        <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart, reduceQuantity, addQuantity, emptyCart, total:countTotal(cart) }}>
            {props.children}
        </CartContext.Provider>
    )
}