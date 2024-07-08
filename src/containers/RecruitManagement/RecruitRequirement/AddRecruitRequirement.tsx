import React, { useEffect } from 'react';
import { Col, DatePicker, Form, Row, Select, Space } from 'antd';
import Button from 'antd-button-color';
import TextArea from 'antd/es/input/TextArea';
import TextInput from 'components/TextInput';
import Title from 'components/Title';
import { useAppDispatch, useAppSelector } from 'store';
import {
  addRecruitRequirementThunk,
  getDepartmentListThunk,
  getJobPositionListThunk,
  getJobTitleListThunk,
  getPersonListThunk,
} from './RecruitRequirement.slice';
import { IRecruitRequirementAdd } from 'types/RecruitFile/RecruitRequirement/RecruitRequirement.type';
import NumberInput from 'components/NumberInput';
import { Navigate, useNavigate } from 'react-router-dom';
import { path } from 'routers/path';

const initialValues: IRecruitRequirementAdd = {
  name: '', // Tên yêu cầu tuyển dụng
  start_date: '', // Ngày bắt đầu
  end_date: '', // Ngày kết thúc
  dept_id: null, // Phòng ban
  title: null, // Chức danh
  job_position: null, // Vị trí công việc
  quantity: null, // Số lượng
  request_date: '', // Ngày phản hồi
  onboard_date_expected: '', // Ngày onboard mong muốn
  interviewer_expected: [], // Danh sách người phỏng vấn
  min_salary: null, // Lương tối thiểu
  max_salary: null, // Lương tối đa
  reason: '', // Lý do
  job_description: '', // Mô tả công việc
  job_requirement: '', // Yêu cầu công việc
  note: '', // Ghi chú
};

const AddRecruitRequirement = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { list_dept_id, list_job_postion, jobTitleList, personList } = useAppSelector(
    (state) => state.recruitRequirement
  );
  useEffect(() => {
    dispatch(getDepartmentListThunk());
    dispatch(getJobPositionListThunk());
    dispatch(getJobTitleListThunk());
    dispatch(getPersonListThunk());
  }, []);

  const handleAdd = (data: IRecruitRequirementAdd) => {
    console.log(data);
    dispatch(
      addRecruitRequirementThunk({
        ...data,
        // start_date:
      })
    );
    navigate(path.recruit_requirement);
  };

  return (
    <div>
      <Form layout="vertical" form={form} onFinish={handleAdd}>
        <Space size={25} direction="vertical">
          <Title level={4}>THÊM MỚI YÊU CẦU TUYỂN DỤNG</Title>
          <Title level={5}>THÔNG TIN CHUNG</Title>
        </Space>
        <Row gutter={15} style={{ marginTop: 10 }}>
          <Col span={8}>
            <Form.Item name="name" label="Tên yêu cầu tuyển dụng" rules={[{ required: true }]}>
              <TextInput allowClear />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="start_date" label="Ngày bắt đầu kế hoạch" rules={[{ required: true }]}>
              <DatePicker
                allowClear
                style={{ width: '100%' }}
                placeholder="Từ ngày"
                format={'DD/MM/YYYY'}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="end_date" label="Ngày kết thúc kế hoạch" rules={[{ required: true }]}>
              <DatePicker
                allowClear
                style={{ width: '100%' }}
                placeholder="Từ ngày"
                format={'DD/MM/YYYY'}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Title level={5}>YÊU CẦU TUYỂN DỤNG CHI TIẾT</Title>
        <Title level={5}>Vị trí tuyển dụng</Title>
        <Row gutter={15} style={{ marginTop: 10 }}>
          <Col span={8}>
            <Form.Item name="dept_id" label="Phòng ban" rules={[{ required: true }]}>
              <Select options={list_dept_id} allowClear placeholder="Chọn phòng ban" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="title" label="Chức danh" rules={[{ required: true }]}>
              <Select options={jobTitleList} allowClear placeholder="Chọn chức danh" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="job_position" label="Vị trí công việc" rules={[{ required: true }]}>
              <Select options={list_job_postion} allowClear placeholder="Chọn vị trí công việc" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="quantity" label="Số lượng" rules={[{ required: true }]}>
              <NumberInput allowClear placeholder="Nhập số" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="request_date" label="Thời gian yêu cầu" rules={[{ required: true }]}>
              <DatePicker
                allowClear
                style={{ width: '100%' }}
                placeholder="Chọn ngày"
                format={'DD/MM/YYYY'}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="onboard_date_expected" label="Thời gian onboard mong muốn" rules={[{ required: true }]}>
              <DatePicker
                allowClear
                style={{ width: '100%' }}
                placeholder="Chọn ngày"
                format={'DD/MM/YYYY'}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="interviewer_expected" label="Người phỏng vấn dự kiến" rules={[{ required: true }]}>
              <Select mode="multiple" options={personList} allowClear placeholder="Có thể chọn nhiều" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="min_salary" label="Mức lương tối thiểu" rules={[{ required: true }]}>
              <NumberInput allowClear placeholder="Nhập số" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="max_salary" label="Mức lương tối đa" rules={[{ required: true }]}>
              <NumberInput allowClear placeholder="Nhập số" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="reason" label="Lí do tuyển dụng" rules={[{ required: true }]}>
              <TextArea allowClear placeholder="Nhập nội dung" rows={4} maxLength={500} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="job_description" label="Mô tả công việc" rules={[{ required: true }]}>
              <TextArea allowClear placeholder="Nhập nội dung" rows={4} maxLength={500} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="job_requirement" label="Yêu cầu ứng viên" rules={[{ required: true }]}>
              <TextArea allowClear placeholder="Nhập nội dung" rows={4} maxLength={500} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="note" label="Ghi chú" rules={[{ required: true }]}>
              <TextArea allowClear placeholder="Nhập nội dung" rows={4} maxLength={500} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Button
            type="lightdark"
            htmlType="reset"
            style={{ marginRight: 10 }}
            onClick={() => navigate(path.recruit_requirement)}
          >
            Hủy bỏ
          </Button>
          <Button type="success" htmlType="submit">
            Lưu
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default AddRecruitRequirement;
