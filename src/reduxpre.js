/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

import React, { Component } from 'react'
import store from './redux/store'
import { createAddAction, createAsyncAddAction } from './redux/createAction'
export default class Reduxpre extends Component {
    add = () => {
        // store.dispatch({ type: 'add', data: 2 })
        // store.dispatch(createAddAction(2))
        store.dispatch(createAsyncAddAction(2, 1000))
    }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }
    render() {
        return (
            <div>
                here show redux<br />
                {store.getState()}
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}
