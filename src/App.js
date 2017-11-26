import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Household Income</h1>
        </header>
        <p className="App-intro">
          <div>
            Target Market Income ($):
            <input id="target-income" type="text" value="60000" />
          </div>
          <div>
            Enter some ZIP Codes (comma separated):
            <input id="zipcodes" type="text" value="94103,94043" />
          </div>
          <div>
            <input id="go-button" type="submit" name="" value="Go" />
          </div>
          <br />
          <div>Results:</div>
          <div id="results"></div>
        </p>
      </div>
    );
  }
}

export default App;
