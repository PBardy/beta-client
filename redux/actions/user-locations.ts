import type { IUserLocation } from '@interfaces/user-location.interface';
import { createAction } from '@reduxjs/toolkit';

// Alias model
type M = IUserLocation;

export const userLocationsGetOne = createAction<M>('userLocations/getOne');
export const userLocationsGetAll = createAction<Array<M>>('userLocations/getAll');
export const userLocationsGetMany = createAction<Array<M>>('userLocations/getMany');
export const userLocationsCreateOne = createAction<M>('userLocations/createOne');
export const userLocationsCreateMany = createAction<Array<M>>('userLocations/createMany');
export const userLocationsUpdateOne = createAction<M>('userLocations/updateOne');
export const userLocationsUpdateMany = createAction<Array<M>>('userLocations/updateMany');
export const userLocationsDeleteOne = createAction<M>('userLocations/deleteOne');
export const userLocationsDeleteMany = createAction<Array<M>>('userLocations/deleteMany');
