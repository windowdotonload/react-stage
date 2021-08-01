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
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './hello'
import { Route } from 'react-router';
import Reduxpre from './reduxpre';
import { withRouter } from 'react-router-dom';

class App extends React.Component {

  state = {
    topData: "top"
  }
  changeProps = () => {
    this.setState({
      topData: 'change'
    })
  }
  goRedux = () => {
    this.props.history.push('/redux')
  }

  render() {
    return (
      <div className="App">
        <Hello topData={this.state.topData} />
        <button onClick={this.goRedux}>Go to Redux</button>
        <Route path='/redux' component={Reduxpre}></Route>
        <header className="App-header" onClick={this.changeProps}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withRouter(App)
