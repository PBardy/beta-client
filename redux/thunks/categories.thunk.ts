import { http } from '@config/axios.config';
import { ApiResponse } from '@interfaces/api.interface';
import { ICategory } from '@interfaces/Category.interface';
import { GetThunkAPI } from '@interfaces/redux.interface';
import { start, stop } from '@redux/actions/api';
import {
  categoriesCreateMany,
  categoriesDeleteOne,
  categoriesGetAll,
  categoriesGetMany,
  categoriesGetOne,
  categoriesUpdateMany,
  categoriesUpdateOne,
} from '@redux/actions/categories';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// Alias types
type M = ICategory;
type A<T> = ApiResponse<T>;
type R<T> = AxiosResponse<T>;

const getOneCategory = async (uuid: string, api: GetThunkAPI) => {
  api.dispatch(start('categories/get-one'));
  const res = await http.get<void, A<M>>('/categories/' + uuid);
  api.dispatch(categoriesGetOne(res.data));
  api.dispatch(stop('categories/get-one'));
};

const getAllCategories = async (_: void, api: GetThunkAPI) => {
  api.dispatch(start('categories/get-all'));
  const res = await http.get<void, R<A<Array<M>>>>('/categories');
  api.dispatch(categoriesGetAll(res.data.data));
  api.dispatch(stop('categories/get-all'));
};

const getManyCategories = async (uuids: Array<string>, api: GetThunkAPI) => {
  api.dispatch(start('categories/get-many'));
  const params = new URLSearchParams();
  params.append('uuids', uuids.join(','));
  const res = await http.get<void, A<Array<M>>>('/categories');
  api.dispatch(categoriesGetMany(res.data));
  api.dispatch(stop('categories/get-many'));
};

const createOneCategory = async (payload: Array<Partial<M>>, api: GetThunkAPI) => {
  api.dispatch(start('categories/create-one'));
  const res = await http.post<Partial<M>, A<Array<M>>>('/category', payload);
  api.dispatch(categoriesCreateMany(res.data));
  api.dispatch(stop('categories/create-one'));
};

const createManyCategories = async (payload: Array<Partial<M>>, api: GetThunkAPI) => {
  api.dispatch(start('categories/create-many'));
  const res = await http.post<Array<Partial<M>>, A<Array<M>>>('/categories', payload);
  api.dispatch(categoriesCreateMany(res.data));
  api.dispatch(stop('categories/create-many'));
};

const updateOneCategory = async (payload: M, api: GetThunkAPI) => {
  api.dispatch(start('categories/update-one'));
  const res = await http.put<void, A<M>>('/Category/' + payload.uuid);
  api.dispatch(categoriesUpdateOne(res.data));
  api.dispatch(stop('categories/update-one'));
};

const updateManyCategories = async (payload: Array<M>, api: GetThunkAPI) => {
  api.dispatch(start('categories/update-many'));
  const res = await http.put<Array<M>, A<Array<M>>>('/categories', payload);
  api.dispatch(categoriesUpdateMany(res.data));
  api.dispatch(stop('categories/update-many'));
};

const deleteOneCategory = async (payload: M, api: GetThunkAPI) => {
  api.dispatch(start('categories/delete-one'));
  const res = await http.delete<void, A<M>>('/Category/' + payload.uuid);
  api.dispatch(categoriesDeleteOne(res.data.uuid));
  api.dispatch(stop('categories/delete-one'));
};

const deleteManyCategories = async (payload: M, api: GetThunkAPI) => {};

const getOneCategoryThunk = createAsyncThunk('categories/get-one', getOneCategory);
const getAllCategoriesThunk = createAsyncThunk('categories/get-all', getAllCategories);
const getManyCategoriesThunk = createAsyncThunk('categories/get-many', getManyCategories);
const createOneCategoryThunk = createAsyncThunk('categories/create-one', createOneCategory);
const createManyCategoriesThunk = createAsyncThunk('categories/create-many', createManyCategories);
const updateOneCategoryThunk = createAsyncThunk('categories/update-one', updateOneCategory);
const updateManyCategoriesThunk = createAsyncThunk('categories/update-many', updateManyCategories);
const deleteOneCategoryThunk = createAsyncThunk('categories/delete-one', deleteOneCategory);
const deleteManyCategoriesThunk = createAsyncThunk('categories/delete-many', deleteManyCategories);

export {
  getOneCategoryThunk,
  getAllCategoriesThunk,
  getManyCategoriesThunk,
  createOneCategoryThunk,
  createManyCategoriesThunk,
  updateOneCategoryThunk,
  updateManyCategoriesThunk,
  deleteOneCategoryThunk,
  deleteManyCategoriesThunk,
};
