import { APIRoute } from '@const';
import { createAppAsyncThunk } from '@hooks/index';
import { dropToken, saveToken } from '@services/token';
import { AuthData } from '@type/auth-data';
import { UserData } from '@type/user-data';

export const checkAuthAction = createAppAsyncThunk<UserData, undefined>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAppAsyncThunk<UserData, AuthData>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async(_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
