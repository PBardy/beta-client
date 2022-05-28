import type { IAlert } from '@interfaces/alerts.interface';
import { createAction } from '@reduxjs/toolkit';

// Alias model
type M = IAlert;

export const alertsGetOne = createAction<M>('alerts/getOne');
export const alertsGetAll = createAction<Array<M>>('alerts/getAll');
export const alertsGetMany = createAction<Array<M>>('alerts/getMany');
export const alertsCreateOne = createAction<M>('alerts/createOne');
export const alertsCreateMany = createAction<Array<M>>('alerts/createMany');
export const alertsUpdateOne = createAction<M>('alerts/updateOne');
export const alertsUpdateMany = createAction<Array<M>>('alerts/updateMany');
export const alertsDeleteAll = createAction<void>('alerts/deleteAll');
export const alertsDeleteOne = createAction<string>('alerts/deleteOne');
export const alertsDeleteMany = createAction<Array<string>>('alerts/deleteMany');
