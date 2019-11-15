import React, { Component } from 'react';

class Event extends Component {
  render() {

  return (
    <div>
      <div>{this.props.name}</div>
      <div>{this.props.description}</div>
    </div>
  );
 }
}

export default Event;
