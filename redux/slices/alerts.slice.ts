import { IAlert } from '@interfaces/alerts.interface';
import {
  alertsCreateMany,
  alertsCreateOne,
  alertsDeleteMany,
  alertsDeleteOne,
  alertsGetAll,
  alertsGetMany,
  alertsGetOne,
  alertsUpdateMany,
  alertsUpdateOne,
} from '@redux/actions/alerts';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface IAlertState {
  loaded: boolean;
}

export const initialState: IAlertState = {
  loaded: false,
};

export const alertsAdapter = createEntityAdapter<IAlert>({
  selectId: (alert) => alert.uuid,
});

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState: {
    ...initialState,
    ...alertsAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(alertsGetOne, (state, action) => {
      alertsAdapter.addOne(state, action.payload);
    });
    builder.addCase(alertsGetAll, (state, action) => {
      state.loaded = true;
      alertsAdapter.addMany(state, action.payload);
    });
    builder.addCase(alertsGetMany, (state, action) => {
      alertsAdapter.addMany(state, action.payload);
    });
    builder.addCase(alertsCreateOne, (state, action) => {
      alertsAdapter.addOne(state, action.payload);
    });
    builder.addCase(alertsCreateMany, (state, action) => {
      alertsAdapter.addMany(state, action.payload);
    });
    builder.addCase(alertsUpdateOne, (state, action) => {
      const id = action.payload.uuid;
      alertsAdapter.updateOne(state, { id, changes: action.payload });
    });
    builder.addCase(alertsUpdateMany, (state, action) => {
      const changes = action.payload.map((p) => ({ id: p.uuid, changes: p }));
      alertsAdapter.updateMany(state, changes);
    });
    builder.addCase(alertsDeleteOne, (state, action) => {
      alertsAdapter.removeOne(state, action.payload);
    });
    builder.addCase(alertsDeleteMany, (state, action) => {
      alertsAdapter.removeMany(state, action.payload);
    });
  },
});
