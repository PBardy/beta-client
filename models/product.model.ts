import type { IProduct } from '@interfaces/product.interface';
import { object, string } from 'yup';
import { Base } from './base.model';

export class Product extends Base implements IProduct {
  public name: string;
  public description?: string | undefined;

  public static async validateOne(object: unknown): Promise<IProduct> {
    return await productShape.validate(object);
  }

  public static async valiateMany(object: Array<unknown>): Promise<Array<IProduct>> {
    return await Promise.all(object.map(Product.validateOne));
  }

  public static async fromOneObject(object: unknown): Promise<IProduct> {
    const product = await productShape.validate(object);
    const instance = new Product();
    instance.uuid = product.uuid;
    instance.name = product.name;
    instance.description = product.description;

    return instance;
  }

  public static async fromManyObjects(objects: Array<unknown>): Promise<Array<IProduct>> {
    return await Promise.all(objects.map(Product.fromOneObject));
  }
}

export const productShape = object().shape({
  uuid: string().required(),
  name: string().required(),
  description: string(),
});
