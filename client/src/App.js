import React, {Component} from 'react'
import './App.css'
import MainContainer from "./components/MainContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Blue Bottle Coffee</h1>
                    <h2>Item Management System</h2>
                </div>
                <div className="App-container">
                    <h3>Click on any item to adjust the price</h3>
                    <MainContainer/>
                </div>
            </div>

        );
    }
}

export default App