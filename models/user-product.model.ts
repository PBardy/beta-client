import { IUserProduct } from '@interfaces/user-product.interface';
import { object, string } from 'yup';
import { Base } from './base.model';

export class UserProduct extends Base implements IUserProduct {
  public static async validateOne(object: unknown): Promise<IUserProduct> {
    return await userProductShape.validate(object);
  }

  public static async valiateMany(object: Array<unknown>): Promise<Array<IUserProduct>> {
    return await Promise.all(object.map(UserProduct.validateOne));
  }

  public static async fromOneObject(object: unknown): Promise<IUserProduct> {
    const product = await userProductShape.validate(object);
    const instance = new UserProduct();
    instance.uuid = product.uuid;

    return instance;
  }

  public static async fromManyObjects(objects: Array<unknown>): Promise<Array<IUserProduct>> {
    return await Promise.all(objects.map(UserProduct.fromOneObject));
  }
}

export const userProductShape = object().shape({
  uuid: string().required(),
});
