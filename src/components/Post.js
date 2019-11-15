import React, { Component } from 'react';

class Post extends Component {
  render() {

  return (
    <div>
      <div>{this.props.name}</div>
      <div>{this.props.description}</div>
    </div>
  );
 }
}

export default Post;
