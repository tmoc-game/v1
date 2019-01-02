import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testAction } from '../../redux/status/actions';

import '../../css/menu.css';

function Menu(props) {
  if (props.st === null) setTimeout(props.testAction, 1000);
  return (
    <div>
      <div className="menu_div">
        <p>
          <Link to="inventory">
            <button className="menu_button">Start a new game</button>
          </Link>
        </p>
        <p>
          <Link to="inventory">
            <button className="menu_button">Continue the game</button>
          </Link>
        </p>
      </div>
    </div>);
}

Menu.propTypes = {
  st: PropTypes.string,
  testAction: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    st: state.status.st
  };
}

function mapDispatchToProps(dispatch) {
  return {
    testAction: () => dispatch(testAction()),
  };
}

const MenuView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

export default MenuView;
