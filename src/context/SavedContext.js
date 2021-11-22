import React, {createContext, useContext, useReducer, useEffect} from 'react'

const SavedContext = createContext()
export const useSavedList = ()=>useContext(SavedContext)

const addToSavedAction = ({id, title, price, image, description, })=>{
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

const removeFromSavedAction = ({id})=>{
    return {
        type:"REMOVE_FROM_SAVED_LIST",
        payload:{
            id
        }
    }
}

const savedReducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_SAVED_LIST":{
            const {payload:{id, title, price, image, description, heart}} = action
            const itemFound = state.saved.find(item=>item.id === id)
            if(!itemFound){
                return (
                        [...state,
                            {
                                id, title, price, image, description,
                            }
                        ]
                    )
            } else {
                return(
                    [...state]
                )
                
            }
        }
        
        case "REMOVE_FROM_SAVED_LIST":{
            const {payload:{id}} = action
            const itemFound = state.saved.find(item=>item.id === id)
            if(itemFound){
                return (
                        [...state.saved.filter(item=>item.id!==id)
                        ]
                    )
            }
        }
        case "EMPTY_SAVED":{
            return []
        }
    }
}



function SavedContextProvider(props) {
    const initialSaved = JSON.parse(window.localStorage.getItem('saved')) ? JSON.parse(window.localStorage.getItem('saved')) : []
    const [saved, dispatch] = useReducer(savedReducer, initialSaved)

    useEffect(() => {
        if (saved.length>0){
            window.localStorage.setItem('saved', JSON.stringify(saved))
        }
    }, [saved])

    const addToSaved = ({id, title, price, image, description})=>{
        dispatch(
            addToSavedAction({id, title, price, image, description})
        )
    }
    
    const removeFromSaved = (id)=>{
        dispatch(
            removeFromSavedAction({id})
        )
    }

    const emptySaved = () =>{
        dispatch({
            type: "EMPTY_SAVED"
        }
        )
    }

    return (
        <SavedContext.Provider value={{saved, addToSaved, removeFromSaved, emptySaved}}>
            {props.children}
        </SavedContext.Provider>
    )
}

export default SavedContextProvider
