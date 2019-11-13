import React, { Component } from 'react';

class EventsList extends Component {

  state = {
    events: [],
    apiDataLoaded: false
  }

  async componentDidMount() {
    try {
      const response = await fetch('event/list')
      const json = await response.json();
      this.setState({
        events: json,
        apiDataLoaded: true
      })
    } catch (error) {
      console.log('Error retrieving evens', error)
    }
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
      </div>
    )
  }
}

export default EventsList;
