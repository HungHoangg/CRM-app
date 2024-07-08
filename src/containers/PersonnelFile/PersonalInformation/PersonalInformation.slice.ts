/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Item from 'antd/es/list/Item';
import { Key } from 'react';
import CategoryService from 'services/CategoryService';
import DepartmentService from 'services/DepartmentService';
import PersonalInformationService from 'services/PersonnelFile/PersonalInformationService';
import { RootState } from 'store';
import { IPersonalInformation, Pagination } from 'types';
import { convertToSelectOptions } from 'utils/AntDesign';
import { formatDate, getNameByValue } from 'utils/Helper';
import { dataGender, dataWorkingStatus, insuranceStatus, isActive } from 'utils/Options';

interface UserState extends Pagination {
  userList: IPersonalInformation[];
  isOpenUserModal: boolean;
  selectedRowKeys: Key[];
  departmentList: any[];
  jobTitleList: any[];
  jobPositionList: any[];
  rows: any[];
  //   userDetail: IUser;
}

const initialState: UserState = {
  userList: [],
  isOpenUserModal: false,
  page: 1,
  size: 10,
  totalRow: 0,
  selectedRowKeys: [],
  departmentList: [],
  jobTitleList: [],
  jobPositionList: [],
  rows: [],
};

const personalInformationSlice = createSlice({
  name: 'personalInformationSlice',
  initialState,
  reducers: {
    setPage: (state, aciton: PayloadAction<number>) => {
      state.page = aciton.payload;
    },
    setSize: (state, aciton: PayloadAction<number>) => {
      state.size = aciton.payload;
    },
    setSelectedRowKeys: (state, action: PayloadAction<Key[]>) => {
      state.selectedRowKeys = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPersonalInformationThunk.fulfilled, (state, action: PayloadAction<any>) => {
        const { data, totalRow } = action.payload;
        const newRows = data.map((item) => ({
          ...item,
          department: item.positions[0].department_name,
          job_position: item.positions[0].job_position_name,
          job_title: item.positions[0].title,
          status: getNameByValue(dataWorkingStatus, 'value', item.status, 'label'),
          is_active: getNameByValue(isActive, 'value', item.is_active, 'label'),
          birthday: formatDate(item.birthday),
          sex: getNameByValue(dataGender, 'value', item.sex, 'label'),
          social_insurance_status: getNameByValue(insuranceStatus, 'value', item.social_insurance_status, 'label'),
        }));
        state.rows = newRows;
        state.totalRow = totalRow;
      })
      .addCase(getDepartmentListThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.departmentList = convertToSelectOptions(action.payload, 'name', 'id');
      })
      .addCase(getJobTitleListThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.jobTitleList = convertToSelectOptions(action.payload, 'dict_name', 'id');
      })
      .addCase(getJobPositionListThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.jobPositionList = convertToSelectOptions(action.payload, 'dict_name', 'id');
      });
  },
});

export const searchPersonalInformationThunk = createAsyncThunk(
  'searchPersonalInformation',
  async (params: any, { getState }) => {
    const state = getState() as RootState;
    const { page, size } = state.personalInformation;
    const response = await PersonalInformationService.search({
      ...params,
      page,
      size,
    });
    return response;
  }
);

// lấy danh sách phòng ban
export const getDepartmentListThunk = createAsyncThunk('getDepartmentList', async () => {
  const { data } = await DepartmentService.getAll();
  return data;
});

// lấy danh sách chức danh
export const getJobTitleListThunk = createAsyncThunk('getJobTitleList', async () => {
  const { data } = await CategoryService.getByName('Chức danh');
  return data;
});

// lấy danh sách vị trí công việc
export const getJobPositionListThunk = createAsyncThunk('getJobPositionList', async () => {
  const { data } = await CategoryService.getByName('Vị trí công việc');
  return data;
});

export const { setPage, setSize, setSelectedRowKeys } = personalInformationSlice.actions;
export const { reducer: personalInformationReducer } = personalInformationSlice;
export default personalInformationReducer;
