import React, { Component } from 'react';

//Custom components
import Post from './Post';

class PostList extends Component {

  state = {
    posts: [],
    apiDataLoaded: false
  }

async componentDidMount() {
  try {
    const response = await fetch('localhost:8081/all')
    const json = await response.json();
    this.setState({
      posts: json,
      apiDataLoaded: true
    })
  } catch (error) {
    console.log('Error retrieving posts!', error)
  }
}

  createPost = async (post, index) => {
    try {
      const newPostResponse = await fetch(`localhost:8081`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: post.name,
          description: post.description
        })
      })
      const updatedPostList = [...this.state.posts]
      updatedPostList.push(newPostResponse.data)
      this.setState({posts: updatedPostList})
    } catch (error) {
      console.log('Error making new Post!')
      console.log(error)
    }
  }

  updatePost = async (course) => {
    try {
      const updatedPostResponse = await fetch(`localhost:8081/update/{id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: post.name,
          description: post.description
        })
      })
      const updatedPostList = [...this.state.posts]
      updatedPostList.push(updatedPostResponse.data)
      this.setState({posts: updatedPostList})
    } catch (error) {
      console.log('Error updating post')
      console.log(error)
    }
  }

  
}
export default PostList;
