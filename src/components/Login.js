import React from 'react';

const Login = ({ login }) => {

  return (
    <form method="POST" onSubmit={login}>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        maxLength="20"
        required
      />
      <button>Signup!</button>
    </form>
  )
}
