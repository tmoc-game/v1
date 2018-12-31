import React from 'react';
import PropTypes from 'prop-types';

import '../../css/header.css';

export default function Header(props) {
  return (
    <div className="header">
      <h1>Header, {props.title} </h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string
};
