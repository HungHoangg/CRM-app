import { Key } from 'react';

export interface Pagination {
  page: number;
  size: number;
  totalRow?: number;
}

export interface DataSearch<T> {
  count: number;
  rows: T;
}
export interface Response<T> {
  status: number;
  message: string | null;
  data: T;
}

export interface DeleteById {
  ids: Key[];
}

export interface CommonFields {
  is_active?: boolean;
  created_by?: string;
  created_time?: string;
  updated_by?: string;
  updated_time?: string;
}
