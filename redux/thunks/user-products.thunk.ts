import { ApiResponse } from '@interfaces/api.interface';
import { IProduct } from '@interfaces/product.interface';
import { GetThunkAPI } from '@interfaces/redux.interface';
import { IUserProduct } from '@interfaces/user-product.interface';
import { start, stop } from '@redux/actions/api';
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
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { UserProductsService } from '../../services/user-product.service';

// Alias types
type M = IUserProduct;
type A<T> = AxiosResponse<ApiResponse<T>>;

const userProductsService = new UserProductsService();

const getOneUserProduct = async (uuid: string, api: GetThunkAPI) => {
  api.dispatch(start('userProducts/get-one'));
  api.dispatch(userProductsGetOne(await userProductsService.getOne(uuid)));
  api.dispatch(stop('userProducts/get-one'));
};

const getAllUserProducts = async (_: void, api: GetThunkAPI) => {
  api.dispatch(start('userProducts/get-all'));
  api.dispatch(userProductsGetAll(await userProductsService.getAll()));
  api.dispatch(stop('userProducts/get-all'));
};

const getManyUserProducts = async (uuids: Array<string>, api: GetThunkAPI) => {
  api.dispatch(start('userProducts/get-many'));
  api.dispatch(userProductsGetMany(await userProductsService.getMany(uuids)));
  api.dispatch(stop('userProducts/get-many'));
};

const createOneUserProduct = async (payload: Partial<M>, api: GetThunkAPI) => {
  api.dispatch(start('userProducts/create-one'));
  api.dispatch(userProductsCreateOne(await userProductsService.createOne(payload)));
  api.dispatch(stop('userProducts/create-one'));
};

const createManyUserProducts = async (payload: Array<Partial<M>>, api: GetThunkAPI) => {
  api.dispatch(start('locations/create-many'));
  api.dispatch(userProductsCreateMany(await userProductsService.createMany(payload)));
  api.dispatch(stop('locations/create-many'));
};

const updateOneUserProduct = async (payload: M, api: GetThunkAPI) => {
  api.dispatch(start('userProducts/update-one'));
  api.dispatch(userProductsUpdateOne(await userProductsService.updateOne(payload)));
  api.dispatch(stop('userProducts/update-one'));
};

const updateManyUserProducts = async (payload: Array<M>, api: GetThunkAPI) => {
  api.dispatch(start('userProducts/update-many'));
  api.dispatch(userProductsUpdateMany(await userProductsService.updateMany(payload)));
  api.dispatch(stop('userProducts/update-many'));
};

const deleteOneUserProduct = async (uuid: string, api: GetThunkAPI) => {
  api.dispatch(start('userProducts/delete-one'));
  api.dispatch(userProductsDeleteOne(await userProductsService.deleteOne(uuid)));
  api.dispatch(stop('userProducts/delete-one'));
};

const deleteManyUserProducts = async (uuids: Array<string>, api: GetThunkAPI) => {
  api.dispatch(start('userProducts/delete-one'));
  api.dispatch(userProductsDeleteMany(await userProductsService.deleteMany(uuids)));
  api.dispatch(stop('userProducts/delete-one'));
};

export const getOneUserProductThunk = createAsyncThunk('userProducts/get-one', getOneUserProduct);

export const getAllUserProductsThunk = createAsyncThunk('userProducts/get-all', getAllUserProducts);

export const getManyUserProductsThunk = createAsyncThunk(
  'userProducts/get-many',
  getManyUserProducts
);

export const createOneUserProductThunk = createAsyncThunk(
  'userProducts/create-one',
  createOneUserProduct
);

export const createManyUserProductsThunk = createAsyncThunk(
  'userProducts/create-many',
  createManyUserProducts
);

export const updateOneUserProductThunk = createAsyncThunk(
  'userProducts/update-one',
  updateOneUserProduct
);

export const updateManyUserProductsThunk = createAsyncThunk(
  'userProducts/update-many',
  updateManyUserProducts
);

export const deleteOneProductThunk = createAsyncThunk(
  'userProducts/delete-one',
  deleteOneUserProduct
);

export const deleteManyUserProductsThunk = createAsyncThunk(
  'userProducts/delete-many',
  deleteManyUserProducts
);
