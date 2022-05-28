import { signInAction, signOutAction, signUpAction } from '@redux/actions/auth';
import { createReducer } from '@reduxjs/toolkit';

export interface IAuthState {
  token: string | null;
  signedIn: boolean;
  signedOut: boolean;
}

export const state: IAuthState = {
  token: null,
  signedIn: false,
  signedOut: true,
};

export const authReducer = createReducer(state, (builder) => {
  builder.addCase(signInAction, (state, action) => {
    state.signedIn = true;
    state.signedOut = false;
    state.token = action.payload;
  });
  builder.addCase(signUpAction, (state, action) => {
    state.signedIn = true;
    state.signedOut = false;
    state.token = action.payload;
  });
  builder.addCase(signOutAction, (state, action) => {
    state.signedIn = false;
    state.signedOut = true;
    state.token = null;
  });
});
