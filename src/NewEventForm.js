import React, { Component } from 'react';

class NewEventForm extends Component {

  state = {
    newEvent: {}
  }

  handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedNewEvent = { ...this.state.newEvent }
    updatedNewEvent[attributeToChange] = newValue
    this.setState({ newEvent: updatedNewEvent })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createEvent(this.state.newEvent)
  }

  render() {
    return (
      <div>
        <h2>Enter A Name for Your Event</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="description">Event Name:</label>
            <input
              name="code"
              type="text"
              onChange={this.handleChange} />
          </div>
        </form>
        <h3>Extra Practice Day</h3>

      </div>
    )
  }
}

export default NewEventForm;
