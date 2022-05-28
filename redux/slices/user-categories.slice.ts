import type { IUserCategory } from '@interfaces/user-category.interface';
import {
  userCategoriesCreateMany,
  userCategoriesCreateOne,
  userCategoriesDeleteMany,
  userCategoriesDeleteOne,
  userCategoriesGetAll,
  userCategoriesGetMany,
  userCategoriesGetOne,
  userCategoriesUpdateMany,
  userCategoriesUpdateOne,
} from '@redux/actions/user-categories';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface IUserCategoryState {
  loaded: boolean;
}

export const initialState: IUserCategoryState = {
  loaded: false,
};

export const userCategoriesAdapter = createEntityAdapter<IUserCategory>({
  selectId: (product) => product.uuid,
});

export const userCategoriesSlice = createSlice({
  name: 'userCategories',
  initialState: {
    ...initialState,
    ...userCategoriesAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userCategoriesGetOne, (state, action) => {
      userCategoriesAdapter.addOne(state, action.payload);
    });
    builder.addCase(userCategoriesGetAll, (state, action) => {
      state.loaded = true;
      userCategoriesAdapter.addMany(state, action.payload);
    });
    builder.addCase(userCategoriesGetMany, (state, action) => {
      userCategoriesAdapter.addMany(state, action.payload);
    });
    builder.addCase(userCategoriesCreateOne, (state, action) => {
      userCategoriesAdapter.addOne(state, action.payload);
    });
    builder.addCase(userCategoriesCreateMany, (state, action) => {
      userCategoriesAdapter.addMany(state, action.payload);
    });
    builder.addCase(userCategoriesUpdateOne, (state, action) => {
      const id = action.payload.uuid;
      userCategoriesAdapter.updateOne(state, { id, changes: action.payload });
    });
    builder.addCase(userCategoriesUpdateMany, (state, action) => {
      const changes = action.payload.map((p) => ({ id: p.uuid, changes: p }));
      userCategoriesAdapter.updateMany(state, changes);
    });
    builder.addCase(userCategoriesDeleteOne, (state, action) => {
      userCategoriesAdapter.removeOne(state, action.payload.uuid);
    });
    builder.addCase(userCategoriesDeleteMany, (state, action) => {
      const ids = action.payload.map((m) => m.uuid);
      userCategoriesAdapter.removeMany(state, ids);
    });
  },
});
