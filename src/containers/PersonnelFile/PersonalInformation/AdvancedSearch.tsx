/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { Col, Form, Input, Row, Select } from 'antd';
import Button from 'antd-button-color';
import TextInput from 'components/TextInput';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { IPersonalInformationSearch } from 'types';
import { convertToSelectOptions } from 'utils/AntDesign';
import { dataWorkingStatus, isActive } from 'utils/Options';
import {
  getDepartmentListThunk,
  getJobPositionListThunk,
  getJobTitleListThunk,
  searchPersonalInformationThunk,
} from './PersonalInformation.slice';

const initialValues: IPersonalInformationSearch = {
  is_active: 1, // trạng thái
  ist_name: '', // họ tên
  list_code: '', // mã nhân viên
  list_dept_id: [], // phòng ban
  list_job_position: [], // vị trí công việc
  list_title: [], // chức danh
  status: 1, // trạng thái
};

const AdvancedSearch = () => {
  const [form] = Form.useForm<IPersonalInformationSearch>();
  const dispatch = useAppDispatch();

  const { departmentList, jobPositionList, jobTitleList } = useAppSelector((state) => state.personalInformation);

  useEffect(() => {
    dispatch(searchPersonalInformationThunk(initialValues));
    dispatch(getDepartmentListThunk());
    dispatch(getJobPositionListThunk());
    dispatch(getJobTitleListThunk());
  }, []);

  return (
    <Form layout="vertical" form={form}>
      <Row gutter={20}>
        <Col span={8}>
          <Form.Item name="list_code" label="Mã nhân viên">
            <TextInput allowClear />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="ist_name" label="Họ và tên">
            <TextInput allowClear />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="status" label="Trạng thái">
            <Select options={dataWorkingStatus} allowClear />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="list_dept_id" label="Phòng ban">
            <Select mode="multiple" allowClear placeholder="Chọn phòng ban" options={departmentList} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="list_title" label="Chức danh">
            <Select mode="multiple" allowClear placeholder="Chọn chức danh" options={jobTitleList} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="list_job_position" label="Vị trí công việc">
            <Select mode="multiple" allowClear placeholder="Chọn vị trí công việc" options={jobPositionList} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="is_active" label="Trạng thái hoạt động">
            <Select options={isActive} allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Button type="success" htmlType="submit" icon={<SearchOutlined />} style={{ marginRight: 10 }}>
          Tìm kiếm
        </Button>
        <Button type="lightdark" htmlType="reset" icon={<SyncOutlined />}>
          Nhập lại
        </Button>
      </Row>
    </Form>
  );
};

export default AdvancedSearch;
