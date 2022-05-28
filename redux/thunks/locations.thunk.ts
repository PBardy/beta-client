import { http } from '@config/axios.config';
import { ApiResponse } from '@interfaces/api.interface';
import { ILocation } from '@interfaces/location.interface';
import { GetThunkAPI } from '@interfaces/redux.interface';
import { start, stop } from '@redux/actions/api';
import {
  locationsCreateMany,
  locationsCreateOne,
  locationsGetOne,
  locationsReceived,
  locationsUpdateOne,
} from '@redux/actions/locations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

type M = ILocation;
type A<T> = AxiosResponse<ApiResponse<T>>;

const getOne = async (uuid: string, api: GetThunkAPI) => {
  api.dispatch(start('locations/get-one'));
  const res = await http.get<void, A<M>>('/location/' + uuid);
  api.dispatch(locationsGetOne(res.data.data));
  api.dispatch(stop('locations/get-one'));
};

const getAll = async (payload: void, api: GetThunkAPI) => {
  api.dispatch(start('locations/get-all'));
  const res = await http.get<void, A<Array<M>>>('/locations');
  api.dispatch(locationsReceived(res.data.data));
  api.dispatch(stop('locations/get-all'));
};

const getMany = async (uuids: Array<string>, api: GetThunkAPI) => {
  api.dispatch(start('locations/get-many'));
  const params = new URLSearchParams();
  params.append('uuids', uuids.join(','));
  const res = await http.get<void, A<M>>('/locations', { params });
  api.dispatch(locationsGetOne(res.data.data));
  api.dispatch(stop('locations/get-many'));
};

const createOne = async (payload: Partial<M>, api: GetThunkAPI) => {
  api.dispatch(start('locations/create-one'));
  const res = await http.post<Partial<M>, A<M>>('/location', payload);
  api.dispatch(locationsCreateOne(res.data.data));
  api.dispatch(stop('locations/create-one'));
};

const createMany = async (payload: Array<M>, api: GetThunkAPI) => {
  api.dispatch(start('locations/create-many'));
  const res = await http.post<Partial<Array<M>>, A<Array<M>>>('/locations', payload);
  api.dispatch(locationsCreateMany(res.data.data));
  api.dispatch(stop('locations/create-many'));
};

const updateOne = async (payload: M, api: GetThunkAPI) => {
  api.dispatch(start('locations/update-one'));
  const res = await http.put<M, A<M>>('/locations/' + payload.uuid, payload);
  api.dispatch(locationsUpdateOne(res.data.data));
  api.dispatch(stop('locations/update-one'));
};

const updateMany = async (payload: any, api: GetThunkAPI) => {};

const deleteOne = async (uuid: string, api: GetThunkAPI) => {
  api.dispatch(start('locations/delete-one'));
  const res = await http.delete<void, A<M>>('/location/' + uuid);
  api.dispatch(locationsUpdateOne(res.data.data));
  api.dispatch(stop('locations/delete-one'));
};

const deleteMany = async (uuids: Array<string>, api: GetThunkAPI) => {
  api.dispatch(start('locations/delete-many'));
  const params = new URLSearchParams();
  params.append('uuids', uuids.join(','));
  const res = await http.delete<void, A<M>>('/locations', { params });
  api.dispatch(locationsUpdateOne(res.data.data));
  api.dispatch(stop('locations/delete-many'));
};

export const getOneLocationThunk = createAsyncThunk('locations/get-one', getOne);
export const getAllLocationsThunk = createAsyncThunk('locations/get-all', getAll);
export const getManyLocationsThunk = createAsyncThunk('locations/get-many', getMany);
export const createOneLocationThunk = createAsyncThunk('locations/create-one', createOne);
export const createManyLocationsThunk = createAsyncThunk('locations/create-many', createMany);
export const updateOneLocationThunk = createAsyncThunk('locations/update-one', updateOne);
export const updateManyLocationsThunk = createAsyncThunk('locations/update-many', updateMany);
export const deleteOneLocationThunk = createAsyncThunk('locations/delete-one', deleteOne);
export const deleteManyLocationsThunk = createAsyncThunk('locations/delete-many', deleteMany);
