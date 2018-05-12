import React, { Component } from 'react'
import './App.css'

import MainContainer from './components/MainContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Blue Bottle Coffee Demo</h1>
        </div>
        <MainContainer />
      </div>
      
    );
  }
}

export default App