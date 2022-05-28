import { http } from '@config/axios.config';
import { ApiResponse } from '@interfaces/api.interface';
import { Auth, IAuthService } from '@interfaces/auth.interface';
import { AxiosResponse } from 'axios';
import { BaseService } from './base.service';

// Alias common types
type A<T> = ApiResponse<T>;
type R<T> = AxiosResponse<T>;

export class AuthService extends BaseService implements IAuthService {
  public signIn = async (p: Auth.Req.ISignIn): Promise<Auth.Res.ISignIn> => {
    const res = await http.post<Auth.Req.ISignIn, R<A<Auth.Res.ISignIn>>>('/auth/sign-in', p);
    return res.data.data;
  };

  public signUp = async (p: Auth.Req.ISignUp): Promise<Auth.Res.ISignUp> => {
    const res = await http.post<Auth.Req.ISignUp, R<A<Auth.Res.ISignUp>>>('/auth/sign-up', p);
    return res.data.data;
  };

  public signOut = async (p: Auth.Req.ISignOut): Promise<Auth.Res.ISignOut> => {
    const res = await http.post<Auth.Req.ISignOut, R<A<Auth.Res.ISignOut>>>('/auth/sign-out', p);
    return res.data.data;
  };

  public resetPassword = async (p: Auth.Req.IResetPassword): Promise<Auth.Res.IResetPassword> => {
    const res = await http.post<Auth.Req.IResetPassword, R<A<Auth.Res.IResetPassword>>>(
      '/auth/reset-password',
      p
    );
    return res.data.data;
  };
}
