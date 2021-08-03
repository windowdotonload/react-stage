/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddAction } from './redux/createAction'


class Reactredux extends Component {
    add = () => {
        this.props.add(2)
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.add}>click</button>
                </div>
                <h1>this.counts:{this.props.num}</h1>
                <h1>{this.props.other}</h1>
            </div>
        )
    }
}

export default connect(
    state => ({ num: state.num, other: state.other }),
    {
        add: createAddAction
    }
)(Reactredux)
