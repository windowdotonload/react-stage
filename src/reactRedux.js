/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddAction } from './redux/createAction'


class reactRedux extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(
    state => ({ count: state }),
    {
        add: createAddAction
    }
)(reactRedux)
