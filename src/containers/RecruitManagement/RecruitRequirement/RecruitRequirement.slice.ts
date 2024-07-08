import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { Key } from 'react';
import CategoryService from 'services/CategoryService';
import DepartmentService from 'services/DepartmentService';
import PersonService from 'services/PersonService';
import RecruitRequirementService from 'services/RecruitManagement/RecruitRequirement/RecruitRequirementService';
import { RootState } from 'store';
import { Pagination } from 'types';
import { convertToSelectOptions } from 'utils/AntDesign';
import { getNameByValue } from 'utils/Helper';
import { approvalStatus, requestStatus } from 'utils/Options';

interface RecruitRequireState extends Pagination {
  list_dept_id: any[];
  list_job_postion: any[];
  jobTitleList: any[];
  rows: any[];
  selectedRowKeys: Key[];
  start_date: string;
  end_date: string;
  start_onboard: string;
  end_onboard: string;
  name: string;
  code: string;
  isOpenUserModal: boolean;
  personList: any[];
}

const initialState: RecruitRequireState = {
  isOpenUserModal: false,
  page: 1,
  size: 10,
  totalRow: 0,
  selectedRowKeys: [],
  list_dept_id: [],
  list_job_postion: [],
  jobTitleList: [],
  rows: [],
  start_date: '',
  end_date: '',
  start_onboard: '',
  end_onboard: '',
  code: '',
  name: '',
  personList: [],
};

const recruitRequirementSlice = createSlice({
  name: 'recruitRequirementSlice',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
    setSelectedRowKeys: (state, action: PayloadAction<Key[]>) => {
      state.selectedRowKeys = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRecruitRequirementThunk.fulfilled, (state, action: PayloadAction<any>) => {
        const { data, totalRow } = action.payload;
        const newRows = data.map((item) => ({
          ...item,
          start_date: moment(item.start_date).format('DD/MM/YYYY'),
          end_date: moment(item.end_date).format('DD/MM/YYYY'),
          onboard_date_expected: moment(item.onboard_date_expected).format('DD/MM/YYYY'),
          approval_status: getNameByValue(approvalStatus, 'value', item.approval_status, 'label'),
          request_status: getNameByValue(requestStatus, 'value', item.request_status, 'label'),
        }));
        state.rows = newRows;
        state.totalRow = totalRow;
      })
      .addCase(getDepartmentListThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.list_dept_id = convertToSelectOptions(action.payload, 'name', 'id');
      })
      .addCase(getJobPositionListThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.list_job_postion = convertToSelectOptions(action.payload, 'dict_name', 'id');
      })
      .addCase(getJobTitleListThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.jobTitleList = convertToSelectOptions(action.payload, 'dict_name', 'id');
      })
      .addCase(getPersonListThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.personList = convertToSelectOptions(action.payload, 'name', 'id');
      });
  },
});

export const searchRecruitRequirementThunk = createAsyncThunk(
  'searchRecruitRequirement',
  async (params: any, { getState }) => {
    const state = getState() as RootState;
    const { page, size } = state.recruitRequirement;
    const response = await RecruitRequirementService.search({
      ...params,
      page,
      size,
    });
    return response;
  }
);

export const addRecruitRequirementThunk = createAsyncThunk('addRecruitRequirement', async (params: any) => {
  const res = await RecruitRequirementService.add({ ...params });
  return res;
});

// Lấy danh sách phòng ban
export const getDepartmentListThunk = createAsyncThunk('getDepartmentList', async () => {
  const { data } = await DepartmentService.getAll();
  return data;
});
// Lấy danh sách vị trí công việc
export const getJobPositionListThunk = createAsyncThunk('getJobPositionList', async () => {
  const { data } = await CategoryService.getByName('Vị trí công việc');
  return data;
});
// Lấy chức danh
export const getJobTitleListThunk = createAsyncThunk('getJobTitleList', async () => {
  const { data } = await CategoryService.getByName('Chức danh');
  return data;
});
// lấy danh sách nhận viên
export const getPersonListThunk = createAsyncThunk('getPersonList', async () => {
  const { data } = await PersonService.getListPer({ get_all: true, is_active: 1 });
  return data;
});

export const { setPage, setSize, setSelectedRowKeys } = recruitRequirementSlice.actions;
export const { reducer: recruitRequirementReducer } = recruitRequirementSlice;
export default recruitRequirementReducer;
