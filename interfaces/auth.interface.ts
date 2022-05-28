import { IUser } from './user.interface';

export namespace Auth {
  export namespace Req {
    export interface ISignIn {
      email: string;
      password: string;
    }
    export interface ISignUp {
      email: string;
      password: string;
    }
    export interface ISignOut {}
    export interface IForgotPassword {
      email: string;
    }

    export interface IResetPassword {
      oldPassword: string;
      newPassword: string;
    }
  }
  export namespace Res {
    export interface ISignIn {
      token: string;
      user: IUser;
    }
    export interface ISignUp {
      token: string;
      user: IUser;
    }
    export interface ISignOut {}
    export interface IForgotPassword {}
    export interface IResetPassword {}
  }
}

export interface IAuthService {
  signIn(payload: Auth.Req.ISignIn): Promise<Auth.Res.ISignIn>;
  signUp(payload: Auth.Req.ISignUp): Promise<Auth.Res.ISignUp>;
  signOut(payload: Auth.Req.ISignOut): Promise<Auth.Res.ISignOut>;
  resetPassword(payload: Auth.Req.IResetPassword): Promise<Auth.Res.IResetPassword>;
}
