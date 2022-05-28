import { IModel } from './model.interface';

export interface IAlert extends IModel {
  title: string;
  body: string;
  data: any;
}
