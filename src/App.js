import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import CartPage from "./pages/CartPage"
import { CartContextProvider } from './context/CartContext'
import SavedContextProvider from './context/SavedContext';
import SavedPage from './pages/SavedPage';

export class App extends Component {
  render() {
    return (
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
    )
  }
}

export default App
