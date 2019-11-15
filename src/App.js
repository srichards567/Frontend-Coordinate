import React, { Component } from 'react';
import './App.css';

//Custom Imports
import Login from './components/Login';
import PostList from './PostList';


class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:8081')
    } catch(error) {
      console.log('Error retrieving posts!')
      console.log(error)
    }
  }

  render() {
  return (
    <div className="App">
      <h1>Coordinate</h1>
      <p>
        Start planning today!
      <PostList />
      </p>
    </div>
  );
 }
}

export default App;
