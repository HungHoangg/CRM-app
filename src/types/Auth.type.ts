export interface IAuth {
  email: string;
  password: string;
}

export interface IUserInfo {
  id: number;
  username: string;
  full_name: string;
  email: string;
  address: string;
  phone_number: string;
  role?: string;
  created_by?: string;
  created_time?: string;
  updated_by?: string;
  updated_time?: string;
}

export interface IUserResponse {
  active: number;
  address: string;
  createBy: string;
  email: string;
  fullName: string;
  gender: 1 | 0;
  groupRole: any;
  phone: string;
  position: string;
  token: string;
  userId: number;
  username: string;
}
