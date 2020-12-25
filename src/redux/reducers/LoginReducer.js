import * as actionTypes from "../actions/LoginActionTypes";
export const initialState = {
  user: null,
  isLogged: false,
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      localStorage.setItem('user',action.payload);
      localStorage.setItem('isLogged',true);
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case actionTypes.CLEAR_USER:
      localStorage.removeItem({
        ...state,
        user: action.payload,
        isLogged: true,});
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
}
