/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { div } from 'prelude-ls'
import React from 'react'
import hello from './hello.module.css'
import { withRouter } from 'react-router'


class Hello extends React.Component {
    state = {
        show: true
    }
    render() {
        const { show } = this.state
        const changShow = () => {
            this.setState({
                show: !this.state.show
            })
        }
        return (
            <div onClick={changShow} className={show ? hello.hello : null}>
                <h1>{this.props.topData}</h1>
                <h1>this is hello</h1>
            </div>
        )
    }
}

export default withRouter(Hello)