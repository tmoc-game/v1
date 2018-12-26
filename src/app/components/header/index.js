import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return <h1>Header, {props.title} </h1>;
}

Header.propTypes = {
  title: PropTypes.string
};
