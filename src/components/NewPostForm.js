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
}

export default NewPostForm;
