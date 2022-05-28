import { cancel, error, start, startRefresh, stop, stopRefresh } from '@redux/actions/api';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IApiState {
  loader: {
    actions: Array<string>;
    refreshing: Array<string>;
  };
  error: {
    actions: Array<string>;
  };
}

export const apiState: IApiState = {
  loader: {
    actions: [],
    refreshing: [],
  },
  error: {
    actions: [],
  },
};

export const apiReducer = createReducer(apiState, (builder) => {
  builder.addCase(stop, (state, action: PayloadAction<string>) => {
    state.loader.actions = state.loader.actions.filter((a) => a !== action.payload);
  });
  builder.addCase(start, (state, action) => {
    state.error.actions = state.error.actions.filter((a) => a !== action.payload);
    state.loader.actions.push(action.payload);
  });
  builder.addCase(error, (state, action) => {
    state.error.actions.push(action.payload);
    const index = state.loader.actions.indexOf(action.payload);
    if (index > -1) {
      state.loader.actions.splice(index, 1);
    }
  });
  builder.addCase(cancel, (state, action) => {
    state.error.actions = state.error.actions.filter((a) => a !== action.payload);
    state.loader.actions = state.loader.actions.filter((a) => a !== action.payload);
  });
  builder.addCase(stopRefresh, (state, action) => {
    state.loader.refreshing = state.loader.refreshing.filter((a) => a !== action.payload);
  });
  builder.addCase(startRefresh, (state, action) => {
    state.loader.refreshing.push(action.payload);
  });
});
