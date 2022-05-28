import { IDateService } from '@interfaces/date.interface';
import { BaseService } from './base.service';

// Date constants
export const MILLISECONDS_PER_SECOND = 1000;
export const MILLISECONDS_PER_MINUTE = 60 * MILLISECONDS_PER_SECOND;
export const MILLISECONDS_PER_HOUR = 60 * MILLISECONDS_PER_MINUTE;
export const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;
export const MILLISECONDS_PER_WEEK = 7 * MILLISECONDS_PER_DAY;
export const MILLISECONDS_PER_FORTNIGHT = 2 * MILLISECONDS_PER_WEEK;
export const MILLISECONDS_PER_MONTH = 30 * MILLISECONDS_PER_DAY;
export const MILLISECONDS_PER_YEAR = 12 * MILLISECONDS_PER_MONTH;

export class DateService extends BaseService implements IDateService {
  public getAge(date: Date): number {
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  public getMillsecondsBetween(a: Date, b: Date): number {
    return Math.abs(a.getTime() - b.getTime());
  }

  public getSecondsBetween(a: Date, b: Date): number {
    return this.getMillsecondsBetween(a, b) / MILLISECONDS_PER_SECOND;
  }

  public getDaysBetween(a: Date, b: Date): number {
    return this.getMillsecondsBetween(a, b) / MILLISECONDS_PER_DAY;
  }

  public getMonthsBetween(a: Date, b: Date): number {
    return this.getMillsecondsBetween(a, b) / MILLISECONDS_PER_MONTH;
  }

  public getYearsBetween(a: Date, b: Date): number {
    return this.getMillsecondsBetween(a, b) / MILLISECONDS_PER_YEAR;
  }

  public isAfterToday(a: Date): boolean {
    const now = new Date();
    const milliseconds = now.getTime() - a.getTime();

    return milliseconds < 0;
  }

  public isBeforeToday(a: Date): boolean {
    const now = new Date();
    const milliseconds = now.getTime() - a.getTime();

    return milliseconds > 0;
  }
}
