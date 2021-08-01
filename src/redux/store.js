/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { createStore } from 'redux'
import countReducer from './countReducer.js'


export default createStore(countReducer)