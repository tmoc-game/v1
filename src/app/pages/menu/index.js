import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import { testAction } from '../../redux/status/actions';

import '../../css/menu.css';

function Menu(props) {
  if (props.st === null) setTimeout(props.testAction, 1000);
  return (
    <div>
      <Header title={'Menu'}></Header>
      <div className="menu_div">
        <p><button>Start a new game</button></p>
        <p><button>Continue the game</button></p>
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
