import React, { Component } from 'react';

//Custom components
import Event from './Event';
import NewEventForm from './NewEventForm';


class EventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: [],
      name: '',
      description: '',
      updateName: '',
      updateDescription: ''
    }
  }

  state = {
    events: [],
    apiDataLoaded: false
  }

async componentDidMount() {
  try {
    const response = await fetch('http://localhost:8081/all')
    const json = await response.json();
    this.setState({
      events: json,
      apiDataLoaded: true
    })
  } catch (error) {
    console.log('Error retrieving events!', error)
  }
}

  createEvents = async (event, index) => {
    try {
      const newEventResponse = await fetch(`http://localhost:8081`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: event.name,
          description: event.description
        })
      })
      const updatedEventList = [...this.state.events]
      updatedEventList.push(newEventResponse.data)
      this.setState({events: updatedEventList})
    } catch (error) {
      console.log('Error making new Event!')
      console.log(error)
    }
  }

  updateEvent = async (event) => {
    try {
      const updatedEventResponse = await fetch(`http://localhost:8081/update/{id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          description: this.state.description
        })
      })
      const updatedEventList = [...this.state.events]
      updatedEventList.push(updatedEventResponse.data)
      this.setState({events: updatedEventList})
    } catch (error) {
      console.log('Error updating event')
      console.log(error)
    }
  }

  deleteEvent = async (event, index) => {
    try {
      const deleteEventResponse = await fetch (`http://localhost:8081/delete/{id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      const deletedEvent = [...this.state.events]
      const updatedEventList = [...this.state.events]
      deletedEvent.slice(index, 1)
      this.setState({events: updatedEventList})
    } catch (error) {
      console.log('Error deleting event')
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <NewEventForm createPost={this.createEvent}/>
        {
          this.state.apiDataLoaded &&
            this.state.events.map((events, index) => {
              return (
                <Event
                  {...events}
                  key={index}
                  event={events} />
              )
            })
        }
      </div>
    )
  }
}
export default EventList;
