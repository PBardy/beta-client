import type { ICategory } from '@interfaces/category.interface';
import { Base } from './base.model';

export class Category extends Base implements ICategory {
  public name: string;
  public description?: string | undefined;
  public color: string;
}
