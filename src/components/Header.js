import React from 'react';

const Header = ({ loggedIn, login, logout, username }) => {

  return (
    <div className="header">
      <div className="title">Coordinate</div>
      <div className="userInfo">
        {loggedIn ? (
          <span>
            {username} | {' '}
            <a className="logoutBtn" onClick={logout}>
              logout
            </a>
          </span>
        ) : (
          <Login login={login} />
        )}
    </div>
  )
}

export default Header;
