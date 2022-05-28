import type { IUserCategory } from '@interfaces/user-category.interface';
import { createAction } from '@reduxjs/toolkit';

// Alias model
type M = IUserCategory;

export const userCategoriesGetOne = createAction<M>('userCategories/getOne');
export const userCategoriesGetAll = createAction<Array<M>>('userCategories/getAll');
export const userCategoriesGetMany = createAction<Array<M>>('userCategories/getMany');
export const userCategoriesCreateOne = createAction<M>('userCategories/createOne');
export const userCategoriesCreateMany = createAction<Array<M>>('userCategories/createMany');
export const userCategoriesUpdateOne = createAction<M>('userCategories/updateOne');
export const userCategoriesUpdateMany = createAction<Array<M>>('userCategories/updateMany');
export const userCategoriesDeleteOne = createAction<M>('userCategories/deleteOne');
export const userCategoriesDeleteMany = createAction<Array<M>>('userCategories/deleteMany');
