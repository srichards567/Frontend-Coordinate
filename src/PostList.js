import React, { Component } from 'react';

//Custom components
import Post from './Post';
import NewPostForm from './NewPostForm';


class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      name: '',
      description: '',
      updateName: '',
      updateDescription: ''
    }
  }

  state = {
    posts: [],
    apiDataLoaded: false
  }

async componentDidMount() {
  try {
    const response = await fetch('http://localhost:8081/all')
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
      const newPostResponse = await fetch(`http://localhost:8081`, {
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

  updatePost = async (post) => {
    try {
      const updatedPostResponse = await fetch(`http://localhost:8081/update/{id}`, {
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
      const updatedPostList = [...this.state.posts]
      updatedPostList.push(updatedPostResponse.data)
      this.setState({posts: updatedPostList})
    } catch (error) {
      console.log('Error updating post')
      console.log(error)
    }
  }

  deleteCourse = async (post, index) => {
    try {
      const deleteCourseResponse = await fetch (`http://localhost:8081/delete/{id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      const deletedPost = [...this.state.course]
      const updatedPostList = [...this.state.posts]
      deletedPost.slice(index, 1)
      this.setState({posts: updatedPostList})
    } catch (error) {
      console.log('Error deleting course')
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <NewPostForm createPost={this.createPost}/>
        {
          this.state.apiDataLoaded &&
            this.state.posts.map((post, index) => {
              return (
                <Post
                  {...post}
                  key={index}
                  post={post} />
              )
            })
        }
      </div>
    )
  }
}
export default PostList;