import type { IBaseService } from './base.interface';
import type { IModel } from './model.interface';

export interface ILocation extends IModel {
  name: string;
  thumbnail?: string;
  description?: string;
}

export interface ILocationService extends IBaseService {}
