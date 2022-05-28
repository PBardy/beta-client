import type { IBaseService } from './base.interface';
import type { IModel } from './model.interface';

export interface IProduct extends IModel {
  name: string;
  thumbnail?: string;
  description?: string;
}

export interface IProductService extends IBaseService {
  getAll(): Promise<Array<IProduct>>;
  getOne(uuid: string): Promise<IProduct>;
  getMany(uuids: Array<string>): Promise<Array<IProduct>>;
  createOne(product: Partial<IProduct>): Promise<IProduct>;
  createMany(products: Array<Partial<IProduct>>): Promise<Array<IProduct>>;
  updateOne(product: IProduct): Promise<IProduct>;
  updateMany(products: Array<IProduct>): Promise<Array<IProduct>>;
  deleteOne(uuid: string): Promise<IProduct>;
  deleteMany(uuids: Array<string>): Promise<Array<IProduct>>;
}
