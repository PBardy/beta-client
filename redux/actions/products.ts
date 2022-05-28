import { IProduct } from '@interfaces/product.interface';
import { createAction } from '@reduxjs/toolkit';

// Alias model
type M = IProduct;

export const productsGetOne = createAction<M>('products/getOne');
export const productsGetAll = createAction<Array<M>>('products/getAll');
export const productsGetMany = createAction<Array<M>>('products/getMany');
export const productsCreateOne = createAction<M>('products/createOne');
export const productsCreateMany = createAction<Array<M>>('products/createMany');
export const productsUpdateOne = createAction<M>('products/updateOne');
export const productsUpdateMany = createAction<Array<M>>('products/updateMany');
export const productsDeleteOne = createAction<M>('products/deleteOne');
export const productsDeleteMany = createAction<Array<M>>('products/deleteMany');
