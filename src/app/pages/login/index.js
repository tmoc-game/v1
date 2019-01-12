import React from 'react';
import PropTypes from 'prop-types';
import '../../css/login.css';

export default function Login(props) {
  return (
    <div>
      <div className="login_div">
        {/*
        <p>
          <Link to="menu">
            <button className="facebook_button">Login with facebook
            </button>
          </Link>
        </p>
        */}
        <p>
          <button onClick={props.loginWithGoogle} className="google_button">
            Login with Google
          </button>
        </p>
      </div>
    </div>);
}

Login.propTypes = {
  loginWithGoogle: PropTypes.func,
};
