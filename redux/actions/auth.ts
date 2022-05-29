import { Auth } from '@interfaces/auth.interface';
import { createAction } from '@reduxjs/toolkit';

export const signInAction = createAction<string>('auth/sign-in');
export const signUpAction = createAction<string>('auth/sign-up');
export const signOutAction = createAction<void>('auth/sign-out');
export const saveAuthCredsAction = createAction<Auth.Req.ISignIn>('/auth/save-creds');
