import { IAuthState } from '@redux/reducers/auth.reducer';
import { store } from '@redux/store';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

export const useAuth = (state: IAuthState) => state;
export const useAuthDraft = createDraftSafeSelector(useAuth, (s) => s);
export const useAuthSelector = () => useAuthDraft(store.getState().auth);
