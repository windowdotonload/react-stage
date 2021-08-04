/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import React from 'react'

export default function Hook() {
    const [state, setstate] = React.useState(0)
    console.log(state)

    const changeNumber = () => {
        setstate((val) => {
            val++
            return val
        })
    }
    return (
        <div>
            <h1 onClick={changeNumber}>this is hook{state}</h1>
        </div>
    )
}
