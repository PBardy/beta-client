import { http } from '@config/axios.config';
import type { ApiResponse } from '@interfaces/api.interface';
import type { IProduct, IProductService } from '@interfaces/product.interface';
import { Product } from '@models/product.model';
import type { AxiosResponse } from 'axios';
import { BaseService } from './base.service';

type M = IProduct;
type A<T> = AxiosResponse<ApiResponse<T>>;

export class ProductsService extends BaseService implements IProductService {
  public async getAll(): Promise<Array<IProduct>> {
    const res = await http.get<void, A<Array<M>>>('/products');
    const data = res.data.data;
    const products = await Product.valiateMany(data);

    return products;
  }

  public async getOne(uuid: string): Promise<IProduct> {
    const res = await http.get<void, A<M>>('/products/' + uuid);
    const data = res.data.data;
    const product = await Product.validateOne(data);

    return product;
  }

  public async getMany(uuids: string[]): Promise<IProduct[]> {
    const params = new URLSearchParams();
    params.append('uuids', uuids.join(','));
    const res = await http.get<void, A<Array<M>>>('/products');
    const data = res.data.data;
    const products = await Product.valiateMany(data);

    return products;
  }

  public async createOne(payload: Partial<IProduct>): Promise<IProduct> {
    const res = await http.post<Partial<M>, A<M>>('/product', payload);
    const data = res.data.data;
    const product = await Product.validateOne(data);

    return product;
  }

  public async createMany(payload: Partial<IProduct>[]): Promise<IProduct[]> {
    const res = await http.post<Array<Partial<M>>, A<Array<M>>>('/locations', payload);
    const data = res.data.data;
    const products = await Product.valiateMany(data);

    return products;
  }

  public async updateOne(payload: IProduct): Promise<IProduct> {
    const res = await http.put<void, A<M>>('/product/' + payload.uuid);
    const data = res.data.data;
    const product = await Product.validateOne(data);

    return product;
  }

  public async updateMany(payload: IProduct[]): Promise<IProduct[]> {
    const res = await http.put<Array<M>, A<Array<M>>>('/products', payload);
    const data = res.data.data;
    const products = await Product.valiateMany(data);

    return products;
  }

  public async deleteOne(uuid: string): Promise<IProduct> {
    const res = await http.delete<void, A<M>>('/product/' + uuid);
    const data = res.data.data;
    const product = await Product.validateOne(data);

    return product;
  }

  public async deleteMany(uuids: string[]): Promise<Array<IProduct>> {
    const params = new URLSearchParams();
    params.append('uuids', uuids.join(','));
    const res = await http.delete<Array<M>, A<Array<M>>>('/products', { params });
    const data = res.data.data;
    const products = await Product.valiateMany(data);

    return products;
  }
}
