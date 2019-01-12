import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fb from '../../util/fb';

import { setLoginStatus, loginWithGoogle } from '../../redux/auth/actions';

import LoginPage from '../../pages/login';

// eslint-disable-next-line react/prefer-stateless-function
class AuthWrapper extends React.Component {
  componentWillMount() {
    const { currentUser } = fb.auth();
    if (currentUser != null) {
      this.props.setLoginStatus(1, currentUser);
    }

    // Monitoring
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setLoginStatus(1, user);
      } else {
        this.props.setLoginStatus(0, null);
      }
    });
  }

  render() {
    const { loginStatus, children } = this.props;

    if (loginStatus === -1) {
      return (<div>Login Status Checking...</div>);
    } else if (loginStatus === 0) {
      return (<LoginPage loginWithGoogle={() => this.props.loginWithGoogle()} />);
    }

    return children;
  }
}

AuthWrapper.propTypes = {
  loginStatus: PropTypes.number,
  setLoginStatus: PropTypes.func,
  loginWithGoogle: PropTypes.func,
  children: PropTypes.any,
};

function mapStateToProps(state) {
  return {
    loginStatus: state.auth.loginStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoginStatus: (status, user) => dispatch(setLoginStatus(status, user)),
    loginWithGoogle: () => dispatch(loginWithGoogle()),
  };
}

const AuthWrapperView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthWrapper);

export default AuthWrapperView;
