import React, { Component } from 'react';
import './App.css';

//Custom Imports
import EventsList from './components/EventsLists';
import Header from './components/Header';
import Login from './components/Login';
import CreatePost from './components/CreatePost';


class App extends Component {
  state = {
    initialLoad: false,
    loggedIn: false,
    username: '',
    updated: false
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
      <Header
        username={this.state.username}
        loggedIn={this.state.loggedIn}
        login={this.login}
        logout={this.logout}
      />
      <EventsList />
    </div>
  );
 }
}

export default App;
