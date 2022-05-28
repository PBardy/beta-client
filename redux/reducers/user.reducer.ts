import type { IUser } from '@interfaces/user.interface';
import { allowAlertsAction, allowEmailsAction, setUserAction } from '@redux/actions/user';
import { createReducer } from '@reduxjs/toolkit';

export interface IUserState {
  user: IUser | null;
  allowEmails: boolean;
  allowAlerts: boolean;
}

export const state: IUserState = {
  user: null,
  allowEmails: false,
  allowAlerts: false,
};

export const userReducer = createReducer(state, (builder) => {
  builder.addCase(setUserAction, (state, action) => {
    state.user = action.payload;
  });
  builder.addCase(allowEmailsAction, (state, action) => {
    state.allowEmails = action.payload;
  });
  builder.addCase(allowAlertsAction, (state, action) => {
    state.allowAlerts = action.payload;
  });
});
