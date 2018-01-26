import React, { Component } from 'react';
import logo from './logo.svg';
import Calculator from './Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <Calculator />
        </div>
        {/* <div className="footer">
          <p>Made by </p>
        </div> */}
      </div>
    );
  }
}

export default App;
