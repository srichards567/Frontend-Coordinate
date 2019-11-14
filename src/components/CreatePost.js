import React from 'react';

const CreatePost = ({ newPost }) => {
  return {
    <div>
      <h3>Share your thoughts!</h3>
      <form onSubmit={newPost}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          maxLength="100"
          required
        />
        <label htmlFor="body">Description</label>
        <textarea
          name="body"
          id=""
          cols="30"
          rows="10"
          maxLength="300"
        />
      </form>
    </div>
  }
}

export default Postbox;
