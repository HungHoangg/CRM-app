import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Key } from "react";
import RegisterManagementService from "services/RegisterManagement/RegisterManagement.Service";
import { RootState } from "store";
import { Pagination } from "types";
import { IRegister } from "types/RegisterManagement/Register.type";
import { formatDate, getNameByValue } from "utils/Helper";
import { classificationOfLeave, approvalStatus } from 'utils/Options';

interface HaltRegisterState extends Pagination {
    HaltRegisters: IRegister[];
    isOpenHaltRegisterModal: boolean;
    selectedRowKeys: Key[];
    rows: any[];
}

const initialState: HaltRegisterState = {
    HaltRegisters: [],
    isOpenHaltRegisterModal: false,
    page: 1,
    size: 10,
    totalRow: 0,
    selectedRowKeys: [],
    rows: [],
};

const haltRegisterSlice = createSlice({
    name: 'haltRegisterSlice',
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
        builder.addCase(searchHaltRegisterThunk.fulfilled, (state, action: PayloadAction<any>) => {
            const { data, totalRow } = action.payload;
            const newRows = data.map((item) => ({
                ...item,
                type: getNameByValue(classificationOfLeave, 'value', item.type, 'label'),
                start_date: formatDate(item.start_date),
                end_date: formatDate(item.end_date),
                approval_status_pm: getNameByValue(approvalStatus, 'value', item.approval_status_pm, 'label'),
                approval_status_bod: getNameByValue(approvalStatus, 'value', item.approval_status_bod, 'label'),
            }));
            state.rows = newRows;
            state.totalRow = totalRow;
        })
    }
});


export const searchHaltRegisterThunk = createAsyncThunk(
    'searchHaltRegister',
    async (params: any, { getState }) => {
        const state = getState() as RootState;
        const { page, size } = state.haltRegister;
        const response = await RegisterManagementService.search({
            ...params,
            page,
            size,
        });
        return response;
    }
);

export const { setPage, setSize, setSelectedRowKeys } = haltRegisterSlice.actions;
export const { reducer: haltRegisterReducer } = haltRegisterSlice;
export default haltRegisterReducer;