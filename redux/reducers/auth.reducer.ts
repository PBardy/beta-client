import { storage } from '@config/storage.config';
import {
  saveAuthCredsAction,
  signInAction,
  signOutAction,
  signUpAction,
} from '@redux/actions/auth';
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
  builder.addCase(saveAuthCredsAction, (state, action) => {
    storage.setItem('email', action.payload.email);
    storage.setItem('password', action.payload.password);
  });
});
