import { IAuth, IUserResponse } from 'types';
import BaseService from './BaseService';

const API_END_POINT = 'auth/';

const AuthService = {
  login: (body: IAuth) => BaseService.post<typeof body, IUserResponse>(`${API_END_POINT}login`, body),
};

export default AuthService;
