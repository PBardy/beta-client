import { createAction } from '@reduxjs/toolkit';

export const stop = createAction<string>('api/stop');
export const start = createAction<string>('api/start');
export const error = createAction<string>('api/error');
export const cancel = createAction<string>('api/cancel');
export const stopRefresh = createAction<string>('api/stop-refresh');
export const startRefresh = createAction<string>('api/start-refresh');
