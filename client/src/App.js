import React, { Component } from 'react'
import './App.css'

import ControlledTabs from "./components/ControlledTabs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Blue Bottle Coffee Demo</h1>
        </div>
        <ControlledTabs />
      </div>
      
    );
  }
}

export default App