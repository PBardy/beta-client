import type { IUserProduct } from '@interfaces/user-product.interface';
import {
  userProductsCreateMany,
  userProductsCreateOne,
  userProductsDeleteMany,
  userProductsDeleteOne,
  userProductsGetAll,
  userProductsGetMany,
  userProductsGetOne,
  userProductsUpdateMany,
  userProductsUpdateOne,
} from '@redux/actions/user-products';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface IUserProductsState {
  loaded: boolean;
}

export const initialState: IUserProductsState = {
  loaded: false,
};

export const userProductsAdapter = createEntityAdapter<IUserProduct>({
  selectId: (product) => product.uuid,
});

export const userProductsSlice = createSlice({
  name: 'userProducts',
  initialState: {
    ...initialState,
    ...userProductsAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userProductsGetOne, (state, action) => {
      userProductsAdapter.addOne(state, action.payload);
    });
    builder.addCase(userProductsGetAll, (state, action) => {
      state.loaded = true;
      userProductsAdapter.addMany(state, action.payload);
    });
    builder.addCase(userProductsGetMany, (state, action) => {
      userProductsAdapter.addMany(state, action.payload);
    });
    builder.addCase(userProductsCreateOne, (state, action) => {
      userProductsAdapter.addOne(state, action.payload);
    });
    builder.addCase(userProductsCreateMany, (state, action) => {
      userProductsAdapter.addMany(state, action.payload);
    });
    builder.addCase(userProductsUpdateOne, (state, action) => {
      const id = action.payload.uuid;
      userProductsAdapter.updateOne(state, { id, changes: action.payload });
    });
    builder.addCase(userProductsUpdateMany, (state, action) => {
      const changes = action.payload.map((p) => ({ id: p.uuid, changes: p }));
      userProductsAdapter.updateMany(state, changes);
    });
    builder.addCase(userProductsDeleteOne, (state, action) => {
      userProductsAdapter.removeOne(state, action.payload.uuid);
    });
    builder.addCase(userProductsDeleteMany, (state, action) => {
      const ids = action.payload.map((m) => m.uuid);
      userProductsAdapter.removeMany(state, ids);
    });
  },
});
