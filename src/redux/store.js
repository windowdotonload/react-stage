/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './countReducer.js'
import otherReducer from './otherReducer.js'

const allReducers = combineReducers({
    num: countReducer,
    other: otherReducer
})
export default createStore(allReducers, applyMiddleware(thunk))