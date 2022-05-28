import type { IBaseService } from './base.interface';

export interface IDateService extends IBaseService {
  getAge(date: Date): number;
  getMillsecondsBetween(a: Date, b: Date): number;
  getSecondsBetween(a: Date, b: Date): number;
  getDaysBetween(a: Date, b: Date): number;
  getMonthsBetween(a: Date, b: Date): number;
  getYearsBetween(a: Date, b: Date): number;
  isAfterToday(a: Date): boolean;
  isBeforeToday(a: Date): boolean;
}
