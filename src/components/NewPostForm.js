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
        <h2>Share Your Thoughts</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Name</label>
            <input
              name="code"
              type="text"
              onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="description">Your Thoughts Here:</label>
            <input
              name="code"
              type="text"
              onChange={this.handleChange} />
          </div>
        </form>

        <hr />
        <hr />
      </div>
    )
  }
}

export default NewPostForm;
