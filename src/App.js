import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import CartPage from "./pages/CartPage"
import { CartContextProvider } from './context/CartContext'
import SavedContextProvider from './context/SavedContext';
import SavedPage from './pages/SavedPage';
import {createStore} from 'redux'
import { Provider as ReduxProvider } from 'react-redux';

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

const savedReducer = (state,action) =>{
  switch(action.type){
      case "ADD_TO_SAVED_LIST":{
          const {payload:{id, title, price, image, description, heart}} = action
          const itemFound = state.find(item=>item.id === id)
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
              return (
                      [...state.filter(item=>item.id!==id)
                      ]
                  )
      }
      case "EMPTY_SAVED":{
          return []
      }
  }
  return state
}




const saved = JSON.parse(window.localStorage.getItem('saved')) ? JSON.parse(window.localStorage.getItem('saved')) : []

const store = createStore(savedReducer, saved,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
  function App () {
    return (
      <ReduxProvider store={store}>
        <CartContextProvider>
          <SavedContextProvider>
            <Router>
              <Routes>
                <Route exact path="/" element = {<HomePage/>} />
                <Route exact path="/cart" element = {<CartPage/>} />
                <Route exact path="/saved" element = {<SavedPage/>} />
              </Routes>
              </Router>
            </SavedContextProvider>
        </CartContextProvider>
      </ReduxProvider>
      )
    }

export default App
