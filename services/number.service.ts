import { INumberService } from '@interfaces/number.interface';
import { BaseService } from './base.service';

export class NumberService extends BaseService implements INumberService {
  public isPostive(number: Number): boolean {
    return number > 0;
  }

  public isNegative(number: Number): boolean {
    return number < 0;
  }
}
