import type { GetThunkAPI } from './redux.interface';

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface IGetThunk<T> {
  api: GetThunkAPI;
  name: string;
  route: string;
}

export interface IPostThunk<T> {
  api: GetThunkAPI;
  name: string;
  route: string;
  payload: T;
}
