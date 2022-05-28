import { ILocation } from '@interfaces/location.interface';
import { createAction } from '@reduxjs/toolkit';

export const locationsGetOne = createAction<ILocation>('locations/getOne');
export const locationsGetMany = createAction<Array<ILocation>>('locations/getMany');
export const locationsReceived = createAction<Array<ILocation>>('locations/all');
export const locationsCreateOne = createAction<ILocation>('locations/createOne');
export const locationsCreateMany = createAction<Array<ILocation>>('locations/createMany');
export const locationsUpdateOne = createAction<ILocation>('locations/updateOne');
export const locationsUpdateMany = createAction<Array<ILocation>>('locations/updateMany');
export const locationsDeleteAll = createAction<void>('locations/deleteAll');
export const locationsDeleteOne = createAction<string>('locations/deleteOne');
export const locationsDeleteMany = createAction<Array<string>>('locations/deleteMany');
