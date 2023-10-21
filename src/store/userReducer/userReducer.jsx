import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false
}

export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');

export default createReducer(initialState, {
  [login]: (state) => {
    state.isLoggedIn = true;
  },
  [logout]: (state) => {
    state.isLoggedIn = false;
  }
});

