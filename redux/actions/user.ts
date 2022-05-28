import { IUser } from '@interfaces/user.interface';
import { createAction } from '@reduxjs/toolkit';

export const setUserAction = createAction<IUser | null>('user/set-user');
export const allowEmailsAction = createAction<boolean>('user/allow-emails');
export const allowAlertsAction = createAction<boolean>('user/allow-alerts');
