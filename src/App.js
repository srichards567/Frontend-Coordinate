import React, { Component } from 'react';
import './App.css';

//Custom Imports
import Login from './components/Login';


class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const response = await fetch('localhost:8081')
    }
  }

  render() {
  return (
    <div className="App">
      <h1>Coordinate</h1>
      <p>
        Share questions and get answers
      </p>
    </div>
  );
 }
}

export default App;
