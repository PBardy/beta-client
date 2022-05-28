import type { IBaseService } from './base.interface';

export interface INumberService extends IBaseService {
  isPostive(number: Number): boolean;
  isNegative(number: Number): boolean;
}
