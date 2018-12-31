import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from '../../components/header';

export default function Login() {
  return (
    <div>
      <Header title={'Login'}></Header>
      <Link to="menu"><button>Login</button></Link>
    </div>);
}

Login.propTypes = {
};
