import React,{createContext, useContext, useReducer, useState} from 'react'

const HomeContext = createContext()
export const useHomeContext = () => useContext(HomeContext)


export function HomeContextProvider(props) {
    const [gender, setGender] = useState("Show all")
    return (
        <HomeContext.Provider value={{gender, setGender}}>
            {props.children}
        </HomeContext.Provider>
    )
}


