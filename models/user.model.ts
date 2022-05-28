import type { IUser } from '@interfaces/user.interface';
import { Base } from './base.model';

export class User extends Base implements IUser {
  public email: string;
}
