import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../css/nav.css';

export default function Nav(props) {
  return (
    <nav>
      <Link to={props.one}>{props.one}</Link> | <Link to={props.two}>{props.two}</Link>
    </nav>
  );
}

Nav.propTypes = {
  one: PropTypes.string,
  two: PropTypes.string,
};
