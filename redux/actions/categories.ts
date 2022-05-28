import { ICategory } from '@interfaces/category.interface';
import { createAction } from '@reduxjs/toolkit';

// Alias model
type M = ICategory;

export const categoriesGetOne = createAction<M>('categories/getOne');
export const categoriesGetAll = createAction<Array<M>>('categories/getAll');
export const categoriesGetMany = createAction<Array<M>>('categories/getMany');
export const categoriesCreateOne = createAction<M>('categories/createOne');
export const categoriesCreateMany = createAction<Array<M>>('categories/createMany');
export const categoriesUpdateOne = createAction<M>('categories/updateOne');
export const categoriesUpdateMany = createAction<Array<M>>('categories/updateMany');
export const categoriesDeleteAll = createAction<void>('categories/deleteAll');
export const categoriesDeleteOne = createAction<string>('categories/deleteOne');
export const categoriesDeleteMany = createAction<Array<string>>('categories/deleteMany');
