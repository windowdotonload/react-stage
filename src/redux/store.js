/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './countReducer.js'


export default createStore(countReducer, applyMiddleware(thunk))