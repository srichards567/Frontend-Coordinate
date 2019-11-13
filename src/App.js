import React, { Component } from 'react';
import EventsList from './components/EventsLists';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const response = await fetch('/event/list')
      this.setState({ events: response.data })
    } catch (error) {
      console.log('Error retrieving events!')
      console.log(error)
    }
  }

  render() {
  return (
    <div className="App">
      <EventsList />
    </div>
  );
 }
}

export default App;
