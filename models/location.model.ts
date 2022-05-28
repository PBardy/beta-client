import type { ILocation } from '@interfaces/location.interface';
import { Base } from './base.model';

export class Location extends Base implements ILocation {
  public name: string;
  public description?: string | undefined;
}
