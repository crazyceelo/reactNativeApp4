import firebase from "firebase";

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from "./types";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

/* 
dispatch is what redux-thunk allows
in order to do async calls(e.g. api)
when doing network requests
*/
export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // right here we are dispatching an action after a request
      // is complete
      .then(user => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user
        });
      });
  };
};
