import type { Auth } from '@interfaces/auth.interface';
import type { GetThunkAPI } from '@interfaces/redux.interface';
import { start, stop } from '@redux/actions/api';
import { saveAuthCredsAction, signInAction } from '@redux/actions/auth';
import { setUserAction } from '@redux/actions/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@services/auth.service';

const authService = new AuthService();

const signIn = async (creds: Auth.Req.ISignIn, api: GetThunkAPI) => {
  api.dispatch(start('auth/sign-in'));
  const data = await authService.signIn(creds);
  api.dispatch(signInAction(data.token));
  api.dispatch(setUserAction(data.user));
  api.dispatch(saveAuthCredsAction(creds));
  api.dispatch(stop('auth/sign-in'));
};

export const signInThunk = createAsyncThunk('auth/sign-in', signIn);
