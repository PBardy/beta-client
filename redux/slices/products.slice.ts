import { IProduct } from '@interfaces/product.interface';
import {
  productsCreateMany,
  productsCreateOne,
  productsDeleteMany,
  productsDeleteOne,
  productsGetAll,
  productsGetMany,
  productsGetOne,
  productsUpdateMany,
  productsUpdateOne,
} from '@redux/actions/products';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface IProductsState {
  loaded: boolean;
}

export const initialState: IProductsState = {
  loaded: false,
};

export const productsAdapter = createEntityAdapter<IProduct>({
  selectId: (product) => product.uuid,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    ...initialState,
    ...productsAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsGetOne, (state, action) => {
      productsAdapter.addOne(state, action.payload);
    });
    builder.addCase(productsGetAll, (state, action) => {
      state.loaded = true;
      productsAdapter.addMany(state, action.payload);
    });
    builder.addCase(productsGetMany, (state, action) => {
      productsAdapter.addMany(state, action.payload);
    });
    builder.addCase(productsCreateOne, (state, action) => {
      productsAdapter.addOne(state, action.payload);
    });
    builder.addCase(productsCreateMany, (state, action) => {
      productsAdapter.addMany(state, action.payload);
    });
    builder.addCase(productsUpdateOne, (state, action) => {
      const id = action.payload.uuid;
      productsAdapter.updateOne(state, { id, changes: action.payload });
    });
    builder.addCase(productsUpdateMany, (state, action) => {
      const changes = action.payload.map((p) => ({ id: p.uuid, changes: p }));
      productsAdapter.updateMany(state, changes);
    });
    builder.addCase(productsDeleteOne, (state, action) => {
      productsAdapter.removeOne(state, action.payload.uuid);
    });
    builder.addCase(productsDeleteMany, (state, action) => {
      const ids = action.payload.map((m) => m.uuid);
      productsAdapter.removeMany(state, ids);
    });
  },
});
