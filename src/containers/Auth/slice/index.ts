import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthService from 'services/AuthService';
import { IAuth, IUserInfo, IUserResponse } from 'types';
import { LOCAL_STORAGE } from 'utils/Constants';

interface AuthState {
  isLoading: boolean;
  users: IUserInfo[];
}

const initialState: AuthState = {
  isLoading: false,
  users: [],
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IUserResponse>) => {
        localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, JSON.stringify(action.payload.token));

        localStorage.setItem(LOCAL_STORAGE.AUTH_INFO, JSON.stringify(action.payload));

        state.isLoading = false;
      });
  },
});

export const login = createAsyncThunk('login', async (params: IAuth) => {
  const response = await AuthService.login(params);
  return response.data;
});

const { reducer: authReducer } = authSlice;
export default authReducer;
