import { http } from '@config/axios.config';
import type { ApiResponse } from '@interfaces/api.interface';
import type { IUserProduct, IUserProductService } from '@interfaces/user-product.interface';
import { UserProduct } from '@models/user-product.model';
import type { AxiosResponse } from 'axios';
import { BaseService } from './base.service';

type M = IUserProduct;
type A<T> = AxiosResponse<ApiResponse<T>>;

export class UserProductsService extends BaseService implements IUserProductService {
  /**
   * Get all products belonging to a specific user, then validate the response to
   * ensure data validity.
   *
   * @returns
   */
  public async getAll(): Promise<Array<IUserProduct>> {
    const res = await http.get<void, A<Array<M>>>('/user/products');
    const data = res.data.data;
    const products = await UserProduct.valiateMany(data);

    return products;
  }

  /**
   * Get a product belonging to a specific user, then validate the response to
   * ensure data validity.
   *
   * @param uuid
   * @returns
   */
  public async getOne(uuid: string): Promise<IUserProduct> {
    const res = await http.get<void, A<M>>('/user/products/' + uuid);
    const data = res.data.data;
    const product = await UserProduct.validateOne(data);

    return product;
  }

  /**
   * Get many products belonging to a specific user, then validate the response to
   * ensure data validity.
   *
   * @param uuids
   * @returns
   */
  public async getMany(uuids: string[]): Promise<IUserProduct[]> {
    const params = new URLSearchParams();
    params.append('uuids', uuids.join(','));
    const res = await http.get<void, A<Array<M>>>('/user/products');
    const data = res.data.data;
    const products = await UserProduct.valiateMany(data);

    return products;
  }

  /**
   * Relate a specific product to a specific user, then validate the response to
   * ensure data validity.
   *
   * @param payload
   * @returns
   */
  public async createOne(payload: Partial<IUserProduct>): Promise<IUserProduct> {
    const res = await http.post<Partial<M>, A<M>>('/user/products', payload);
    const data = res.data.data;
    const product = await UserProduct.validateOne(data);

    return product;
  }

  /**
   * Relate many products to a specific user, then validate the response to
   * ensure data validity.
   *
   * @param payload
   * @returns
   */
  public async createMany(payload: Partial<IUserProduct>[]): Promise<IUserProduct[]> {
    const res = await http.post<Array<Partial<M>>, A<Array<M>>>('/user/products', payload);
    const data = res.data.data;
    const products = await UserProduct.valiateMany(data);

    return products;
  }

  /**
   * Update a specific user product relationship, then validate the response to
   * ensure data validity.
   *
   * @param payload
   * @returns
   */
  public async updateOne(payload: IUserProduct): Promise<IUserProduct> {
    const res = await http.put<void, A<M>>('/user/products/' + payload.uuid);
    const data = res.data.data;
    const product = await UserProduct.validateOne(data);

    return product;
  }

  /**
   * Update many user product relationships, then validate the response to
   * ensure data validity.
   *
   * @param payload
   * @returns
   */
  public async updateMany(payload: IUserProduct[]): Promise<IUserProduct[]> {
    const res = await http.put<Array<M>, A<Array<M>>>('/user/products', payload);
    const data = res.data.data;
    const products = await UserProduct.valiateMany(data);

    return products;
  }

  /**
   * Remove a specific user product relationship.
   *
   * @param uuid
   * @returns
   */
  public async deleteOne(uuid: string): Promise<IUserProduct> {
    const res = await http.delete<void, A<M>>('/user/products/' + uuid);
    const data = res.data.data;
    const product = await UserProduct.validateOne(data);

    return product;
  }

  /**
   * Remove many user product relationships.
   *
   * @param uuids
   * @returns
   */
  public async deleteMany(uuids: string[]): Promise<Array<IUserProduct>> {
    const params = new URLSearchParams();
    params.append('uuids', uuids.join(','));
    const res = await http.delete<Array<M>, A<Array<M>>>('/user/products', { params });
    const data = res.data.data;
    const products = await UserProduct.valiateMany(data);

    return products;
  }
}
