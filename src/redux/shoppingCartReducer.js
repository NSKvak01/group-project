export const addToCartAction = ({id, title, price, image, description, quantity}, type) =>{
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

export const removeFromCartAction = ({id}, type)=>{
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



export const shoppingCartReducer = (state=[], action) =>{
switch(action.type){
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
return state
}




