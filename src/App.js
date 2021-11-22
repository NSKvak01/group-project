import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import CartPage from "./pages/CartPage"
import { CartContextProvider } from './context/CartContext'
import SavedContextProvider from './context/SavedContext';
import SavedPage from './pages/SavedPage';
import { Provider as ReduxProvider } from 'react-redux';
import {store, initialState} from "./redux/index"




  function App () {
    return (
      <ReduxProvider store={store}>
            <Router>
              <Routes>
                <Route exact path="/" element = {<HomePage/>} />
                <Route exact path="/cart" element = {<CartPage/>} />
                <Route exact path="/saved" element = {<SavedPage/>} />
              </Routes>
              </Router>
      </ReduxProvider>
      )
    }

export default App
