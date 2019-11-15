import React, { Component } from 'react';

class NewPostForm extends Component {

  state = {
    newPost: {}
  }

  handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedNewPost = { ...this.state.newPost }
    updatedNewPost[attributeToChange] = newValue
    this.setState({ newPost: updatedNewPost })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createPost(this.state.newPost)
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


      </div>
    )
  }
}

export default NewPostForm;
