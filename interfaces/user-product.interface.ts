import { IBaseService } from './base.interface';
import type { IModel } from './model.interface';
import type { IProduct } from './product.interface';
import type { IUser } from './user.interface';

export interface IUserProduct extends IModel, IUser, IProduct {}

export interface IUserProductService extends IBaseService {
  getAll(): Promise<Array<IUserProduct>>;
  getOne(uuid: string): Promise<IUserProduct>;
  getMany(uuids: Array<string>): Promise<Array<IUserProduct>>;
  createOne(product: Partial<IUserProduct>): Promise<IUserProduct>;
  createMany(products: Array<Partial<IUserProduct>>): Promise<Array<IUserProduct>>;
  updateOne(product: IUserProduct): Promise<IUserProduct>;
  updateMany(products: Array<IUserProduct>): Promise<Array<IUserProduct>>;
  deleteOne(uuid: string): Promise<IUserProduct>;
  deleteMany(uuids: Array<string>): Promise<Array<IUserProduct>>;
}
