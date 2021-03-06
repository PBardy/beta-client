import type { IBaseService } from './base.interface';
import type { IModel } from './model.interface';

export interface ICategory extends IModel {
  name: string;
  color: string;
  description?: string;
}

export interface ICategoryService extends IBaseService {}
