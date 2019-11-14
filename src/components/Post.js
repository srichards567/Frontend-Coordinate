import React from 'react';

const Post = {( post, vote, index )} => {
  return (
    <div className="post">
      <div className="vote">
        <div className="upVote" onClick={() =>(post._id, index, true)}>
          <span role="img" aria-label="up vote">
            up arrow
          </span>
        </div>
        <div className="votecount">{post.votes}</div>
        <div className="downvote" onClick{() => vote(post._id, index, false)}>
          <span role="img" aria-label="down vote">
            down arrow
          </span>
      </div>
    </div>

    <div className="content">
      <div className="title-area">
        <span className="title">{post.title}</span>
      </div>
    </div>
  )
}

export default Post;
