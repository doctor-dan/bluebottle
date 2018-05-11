import React, { Component } from 'react'
import './App.css'
import ItemsContainer from './components/ItemsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Blue Bottle Coffee Demo</h1>
        </div>
        <ItemsContainer />
      </div>
    );
  }
}

export default App