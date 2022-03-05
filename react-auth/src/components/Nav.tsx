import React from "react";
import { Link } from "react-router-dom";

const Nav = (props: { name: string }) => {
  const logout = async () => {
    await fetch(process.env.REACT_APP_BACKEND_URL + '/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  };

  let menu;
  if (props.name === undefined) {
    menu = (<ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">Register</Link>
      </li>
    </ul>);
  } else {
    menu = <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
      </li>
    </ul>
  }
  return (<nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div className="container-fluid">
      <Link to="/" className="nav-link">Home</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
       {menu}
      </div>
    </div>
  </nav>);
}

export default Nav;