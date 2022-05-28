import type { IUserProduct } from '@interfaces/user-product.interface';
import { createAction } from '@reduxjs/toolkit';

// Alias model
type M = IUserProduct;

export const userProductsGetOne = createAction<M>('userProducts/getOne');
export const userProductsGetAll = createAction<Array<M>>('userProducts/getAll');
export const userProductsGetMany = createAction<Array<M>>('userProducts/getMany');
export const userProductsCreateOne = createAction<M>('userProducts/createOne');
export const userProductsCreateMany = createAction<Array<M>>('userProducts/createMany');
export const userProductsUpdateOne = createAction<M>('userProducts/updateOne');
export const userProductsUpdateMany = createAction<Array<M>>('userProducts/updateMany');
export const userProductsDeleteOne = createAction<M>('userProducts/deleteOne');
export const userProductsDeleteMany = createAction<Array<M>>('userProducts/deleteMany');
