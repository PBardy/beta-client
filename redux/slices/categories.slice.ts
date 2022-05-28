import { ICategory } from '@interfaces/category.interface';
import {
  categoriesCreateMany,
  categoriesCreateOne,
  categoriesDeleteMany,
  categoriesDeleteOne,
  categoriesGetAll,
  categoriesGetMany,
  categoriesGetOne,
  categoriesUpdateMany,
  categoriesUpdateOne,
} from '@redux/actions/categories';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface ICategoriesState {
  loaded: boolean;
}

export const initialState: ICategoriesState = {
  loaded: false,
};

export const categoriesAdapter = createEntityAdapter<ICategory>({
  selectId: (product) => product.uuid,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    ...initialState,
    ...categoriesAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoriesGetOne, (state, action) => {
      categoriesAdapter.addOne(state, action.payload);
    });
    builder.addCase(categoriesGetAll, (state, action) => {
      state.loaded = true;
      categoriesAdapter.addMany(state, action.payload);
    });
    builder.addCase(categoriesGetMany, (state, action) => {
      categoriesAdapter.addMany(state, action.payload);
    });
    builder.addCase(categoriesCreateOne, (state, action) => {
      categoriesAdapter.addOne(state, action.payload);
    });
    builder.addCase(categoriesCreateMany, (state, action) => {
      categoriesAdapter.addMany(state, action.payload);
    });
    builder.addCase(categoriesUpdateOne, (state, action) => {
      const id = action.payload.uuid;
      categoriesAdapter.updateOne(state, { id, changes: action.payload });
    });
    builder.addCase(categoriesUpdateMany, (state, action) => {
      const changes = action.payload.map((p) => ({ id: p.uuid, changes: p }));
      categoriesAdapter.updateMany(state, changes);
    });
    builder.addCase(categoriesDeleteOne, (state, action) => {
      categoriesAdapter.removeOne(state, action.payload);
    });
    builder.addCase(categoriesDeleteMany, (state, action) => {
      categoriesAdapter.removeMany(state, action.payload);
    });
  },
});
