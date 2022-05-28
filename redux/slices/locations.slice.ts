import { ILocation } from '@interfaces/location.interface';
import {
  locationsCreateMany,
  locationsCreateOne,
  locationsDeleteAll,
  locationsDeleteMany,
  locationsDeleteOne,
  locationsReceived,
  locationsUpdateMany,
  locationsUpdateOne,
} from '@redux/actions/locations';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface ILocationsState {
  loaded: boolean;
}

export const initialState: ILocationsState = {
  loaded: false,
};

export const locationsAdapter = createEntityAdapter<ILocation>({
  selectId: (Location) => Location.uuid,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const locationsSlice = createSlice({
  name: 'Locations',
  initialState: {
    ...initialState,
    ...locationsAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(locationsCreateOne, (state, action) => {
      locationsAdapter.addOne(state, action.payload);
    });
    builder.addCase(locationsCreateMany, (state, action) => {
      locationsAdapter.addMany(state, action.payload);
    });
    builder.addCase(locationsUpdateOne, (state, action) => {
      locationsAdapter.updateOne(state, { id: action.payload.uuid, changes: action.payload });
    });
    builder.addCase(locationsUpdateMany, (state, action) => {
      const changes = action.payload.map((location) => ({ id: location.uuid, changes: location }));
      locationsAdapter.updateMany(state, changes);
    });
    builder.addCase(locationsDeleteAll, (state) => {
      locationsAdapter.removeAll(state);
    });
    builder.addCase(locationsDeleteOne, (state, action) => {
      locationsAdapter.removeOne(state, action.payload);
    });
    builder.addCase(locationsDeleteMany, (state, action) => {
      locationsAdapter.removeMany(state, action.payload);
    });
    builder.addCase(locationsReceived, (state, action) => {
      state.loaded = true;
      locationsAdapter.addMany(state, action.payload);
    });
  },
});
