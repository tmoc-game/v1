import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import { testAction } from '../../redux/status/actions';

function Login(props) {
  if (props.st === null) setTimeout(props.testAction, 1000);
  return (
    <div>
      <Header title={'Menu'}></Header>
      <h2>{props.st}</h2>
    </div>);
}

Login.propTypes = {
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

const LoginView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginView;
