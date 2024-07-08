import { Col, Form, Row, Select } from 'antd';
import TextInput from 'components/TextInput';
import Button from 'antd-button-color';
import React, { useEffect } from 'react';
import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import DatePicker from 'components/Datepicker';
import { useAppDispatch, useAppSelector } from 'store';
import {
  getDepartmentListThunk,
  getJobPositionListThunk,
  searchRecruitRequirementThunk,
} from './RecruitRequirement.slice';
import { IRecruitRequirementSearch } from 'types/RecruitFile/RecruitRequirement/RecruitRequirement.type';

const initialValues: IRecruitRequirementSearch = {
  code: '', // Mã yêu cầu tuyển dụng
  name: '', // Tên yêu cầu tuyển dụng
  start_date: '', // Từ ngày
  end_date: '', // Đến ngày
  start_onboard: '', //Ngày bắt đầu onboard
  end_onboard: '', //Ngày kết thúc onboard
  list_dept_id: [], // Phòng ban
  list_job_position: [], // vị trí công việc
};

function SearchForm() {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { list_dept_id, list_job_postion } = useAppSelector((state) => state.recruitRequirement);

  useEffect(() => {
    dispatch(searchRecruitRequirementThunk(initialValues));
    dispatch(getDepartmentListThunk());
    dispatch(getJobPositionListThunk());
  }, []);

  const handleSearch = (data: IRecruitRequirementSearch) => {
    dispatch(searchRecruitRequirementThunk(data));
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleSearch}>
      <Row gutter={20}>
        <Col span={6}>
          <Form.Item name="code" label="Mã yêu cầu tuyển dụng">
            <TextInput allowClear placeholder="Nhập mã" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="name" label="Tên yêu cầu tuyển dụng">
            <TextInput allowClear placeholder="Nhập tên yêu cầu" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="list_dept_id" label="Phòng ban">
            <Select mode="multiple" options={list_dept_id} allowClear placeholder="Chọn phòng ban" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="list_job_postion" label="Vị trí công việc">
            <Select mode="multiple" allowClear placeholder="Chọn vị trí công việc" options={list_job_postion} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="start_date" label="Ngày bắt đầu kế hoạch">
            <DatePicker allowClear style={{ width: '100%' }} placeholder="Từ ngày" format={'DD/MM/YYYY'} size="large" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="end_date" label="Ngày kết thúc kế hoạch">
            <DatePicker
              allowClear
              style={{ width: '100%' }}
              placeholder="Đến ngày"
              format={'DD/MM/YYYY'}
              size="large"
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="start_onboard" label="Từ ngày Onboard">
            <DatePicker allowClear style={{ width: '100%' }} placeholder="Từ ngày" format={'DD/MM/YYYY'} size="large" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="end_onboard" label="Đến ngày Onboard">
            <DatePicker
              allowClear
              style={{ width: '100%' }}
              placeholder="Đến ngày"
              format={'DD/MM/YYYY'}
              size="large"
            />
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
}

export default SearchForm;
