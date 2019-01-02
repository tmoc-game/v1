import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import '../../css/login.css';

export default function Login() {
  return (
    <div>
      <div className="login_div">
        <p>
          <Link to="menu">
            <button className="facebook_button">Login with facebook
            </button>
          </Link>
        </p>
        <p>
          <Link to={'menu'} >
            <button className="google_button">Login with Google
            </button>
          </Link>
        </p>
      </div>
    </div>);
}

Login.propTypes = {
};
