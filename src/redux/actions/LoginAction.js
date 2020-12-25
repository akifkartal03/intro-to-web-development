import * as actionTypes from "./LoginActionTypes";
export function setUSer(username) {
  return {
    type: actionTypes.SET_USER,
    payload: username,
  };
}
export function clear() {
  return {
    type: actionTypes.CLEAR_USER,
  };
}
