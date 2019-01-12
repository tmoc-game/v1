import { SET_LOGIN_STATUS } from '../types';
import { goTo } from '../../util/route';
import fb from '../../util/fb';

export function setLoginStatus(loginStatus, user) {
  return {
    type: SET_LOGIN_STATUS,
    payload: {
      loginStatus,
      user
    },
  };
}

export function loginWithGoogle() {
  return (dispatch) => {
    const provider = new fb.auth.GoogleAuthProvider();
    fb.auth().signInWithPopup(provider)
      .then((result) => {
        goTo('/');
        dispatch(setLoginStatus(1, result.user));
      });
  };
}
