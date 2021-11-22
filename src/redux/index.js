import React, { Component, useState } from 'react'
import {createStore, combineReducers} from 'redux'
import {shoppingCartReducer} from './shoppingCartReducer'
import {savedReducer} from './savedReducer'

const rootReducer = combineReducers ({
    shoppingCart:shoppingCartReducer,
    saved:savedReducer
    }
)

export const store = createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())