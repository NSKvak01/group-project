export const removeFromSavedAction = (id)=>{
    return {
        type:"REMOVE_FROM_SAVED_LIST",
        payload:{
            id
        }
    }
    }

    export const addToSavedAction = ({id, title, price, image, description, })=>{
    return {
        type: "ADD_TO_SAVED_LIST",
        payload:{
            id,
            title,
            price,
            image,
            description,
            heart:true
        }
    }
}

export const savedReducer = (state=[],action) =>{
    switch(action.type){
        case "ADD_TO_SAVED_LIST":{
            const {payload:{id, title, price, image, description, heart}} = action
            const itemFound = state.find(item=>item.id === id)
            if(!itemFound){
                return [...state,{id, title, price, image, description,}  
                    ]
            }
        }
        
        case "REMOVE_FROM_SAVED_LIST":{
            const {payload:{id}} = action
                return [
                        ...state.filter(item=>item.id!==id)
                    ]
                
            }

        case "EMPTY_SAVED":{
            return []
        }

    }
    return state
}