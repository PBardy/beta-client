import type { IUserLocation } from '@interfaces/user-location.interface';
import {
  userLocationsCreateMany,
  userLocationsCreateOne,
  userLocationsDeleteMany,
  userLocationsDeleteOne,
  userLocationsGetAll,
  userLocationsGetMany,
  userLocationsGetOne,
  userLocationsUpdateMany,
  userLocationsUpdateOne,
} from '@redux/actions/user-locations';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface IUserLocationsState {
  loaded: boolean;
}

export const initialState: IUserLocationsState = {
  loaded: false,
};

export const userLocationsAdapter = createEntityAdapter<IUserLocation>({
  selectId: (product) => product.uuid,
});

export const userLocationsSlice = createSlice({
  name: 'userLocations',
  initialState: {
    ...initialState,
    ...userLocationsAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLocationsGetOne, (state, action) => {
      userLocationsAdapter.addOne(state, action.payload);
    });
    builder.addCase(userLocationsGetAll, (state, action) => {
      state.loaded = true;
      userLocationsAdapter.addMany(state, action.payload);
    });
    builder.addCase(userLocationsGetMany, (state, action) => {
      userLocationsAdapter.addMany(state, action.payload);
    });
    builder.addCase(userLocationsCreateOne, (state, action) => {
      userLocationsAdapter.addOne(state, action.payload);
    });
    builder.addCase(userLocationsCreateMany, (state, action) => {
      userLocationsAdapter.addMany(state, action.payload);
    });
    builder.addCase(userLocationsUpdateOne, (state, action) => {
      const id = action.payload.uuid;
      userLocationsAdapter.updateOne(state, { id, changes: action.payload });
    });
    builder.addCase(userLocationsUpdateMany, (state, action) => {
      const changes = action.payload.map((p) => ({ id: p.uuid, changes: p }));
      userLocationsAdapter.updateMany(state, changes);
    });
    builder.addCase(userLocationsDeleteOne, (state, action) => {
      userLocationsAdapter.removeOne(state, action.payload.uuid);
    });
    builder.addCase(userLocationsDeleteMany, (state, action) => {
      const ids = action.payload.map((m) => m.uuid);
      userLocationsAdapter.removeMany(state, ids);
    });
  },
});
