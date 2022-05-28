import { ApiResponse } from '@interfaces/api.interface';
import { IProduct } from '@interfaces/product.interface';
import { GetThunkAPI } from '@interfaces/redux.interface';
import { start, stop } from '@redux/actions/api';
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
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ProductsService } from '../../services/products.service';

// Alias types
type M = IProduct;
type A<T> = AxiosResponse<ApiResponse<T>>;

const productsService = new ProductsService();

const getOneProduct = async (uuid: string, api: GetThunkAPI) => {
  api.dispatch(start('products/get-one'));
  api.dispatch(productsGetOne(await productsService.getOne(uuid)));
  api.dispatch(stop('products/get-one'));
};

const getAllProducts = async (_: void, api: GetThunkAPI) => {
  api.dispatch(start('products/get-all'));
  api.dispatch(productsGetAll(await productsService.getAll()));
  api.dispatch(stop('products/get-all'));
};

const getManyProducts = async (uuids: Array<string>, api: GetThunkAPI) => {
  api.dispatch(start('products/get-many'));
  api.dispatch(productsGetMany(await productsService.getMany(uuids)));
  api.dispatch(stop('products/get-many'));
};

const createOneProduct = async (payload: Partial<M>, api: GetThunkAPI) => {
  api.dispatch(start('products/create-one'));
  api.dispatch(productsCreateOne(await productsService.createOne(payload)));
  api.dispatch(stop('products/create-one'));
};

const createManyProducts = async (payload: Array<Partial<M>>, api: GetThunkAPI) => {
  api.dispatch(start('locations/create-many'));
  api.dispatch(productsCreateMany(await productsService.createMany(payload)));
  api.dispatch(stop('locations/create-many'));
};

const updateOneProduct = async (payload: M, api: GetThunkAPI) => {
  api.dispatch(start('products/update-one'));
  api.dispatch(productsUpdateOne(await productsService.updateOne(payload)));
  api.dispatch(stop('products/update-one'));
};

const updateManyProducts = async (payload: Array<M>, api: GetThunkAPI) => {
  api.dispatch(start('products/update-many'));
  api.dispatch(productsUpdateMany(await productsService.updateMany(payload)));
  api.dispatch(stop('products/update-many'));
};

const deleteOneProduct = async (uuid: string, api: GetThunkAPI) => {
  api.dispatch(start('products/delete-one'));
  api.dispatch(productsDeleteOne(await productsService.deleteOne(uuid)));
  api.dispatch(stop('products/delete-one'));
};

const deleteManyProducts = async (uuids: Array<string>, api: GetThunkAPI) => {
  api.dispatch(start('products/delete-one'));
  api.dispatch(productsDeleteMany(await productsService.deleteMany(uuids)));
  api.dispatch(stop('products/delete-one'));
};

export const getOneProductThunk = createAsyncThunk('products/get-one', getOneProduct);
export const getAllProductsThunk = createAsyncThunk('products/get-all', getAllProducts);
export const getManyProductsThunk = createAsyncThunk('products/get-many', getManyProducts);
export const createOneProductThunk = createAsyncThunk('products/create-one', createOneProduct);
export const createManyProductsThunk = createAsyncThunk('products/create-many', createManyProducts);
export const updateOneProductThunk = createAsyncThunk('products/update-one', updateOneProduct);
export const updateManyProductsThunk = createAsyncThunk('products/update-many', updateManyProducts);
export const deleteOneProductThunk = createAsyncThunk('products/delete-one', deleteOneProduct);
export const deleteManyProductsThunk = createAsyncThunk('products/delete-many', deleteManyProducts);
