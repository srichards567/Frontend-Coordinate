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

  login = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
  }

  if (username) {
    fetch('/users/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
    .then((res) => {
      if (res.status === 200) {
        this.setState({ loggedIn: true, username });
        localStorage.setITem('username', username);
      }
    })
    .catch((e) => null);
  }

  newPost = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let body = e.target.body.value;

    if (title) {
      this.state.title = title;
      this.state.body = body;
      this.state.author = this.state.username || 'User';
      this.state.posted = Date.now();
      this.state.votes = 1;
    }
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
