import React, { Component } from 'react';

//Custom components
import Post from './Post';

class PostList extends Component {

  state = {
    posts: [],
    apiDataLoaded: false
  }
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

export default PostList;
