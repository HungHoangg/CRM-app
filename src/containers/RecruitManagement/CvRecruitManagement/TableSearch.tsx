import {
  DeleteOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Row, Tooltip } from 'antd';
import Button from 'antd-button-color';
import { ColumnsType } from 'antd/es/table';
import Table from 'components/Table';
import React from 'react';

function TableSearch() {
  const columns: ColumnsType = [
    {
      dataIndex: 'no',
      title: 'STT',
      width: 50,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'action',
      title: 'Thao tác',
      width: 90,
      ellipsis: {
        showTitle: false,
      },
      align: 'center',
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'action1',
      title: 'Hành động',
      align: 'center',
      width: 90,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'apply_date',
      title: 'Thời gian ứng tuyển',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'curator',
      title: 'Phụ trách',
      width: 160,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'source',
      title: 'Nguồn',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'introducer',
      title: 'Người giới thiệu',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'department_name',
      title: 'Phòng ban',
      width: 90,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'title_name',
      title: 'Chức danh',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'job_position_name',
      title: 'Vị trí công việc',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'apply_status',
      title: 'Trạng thái ứng tuyển',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'candidate_name',
      title: 'Họ và tên',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'birthday',
      title: 'Ngày sinh',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'phone_number',
      title: 'SĐT',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'email',
      title: 'Email',
      width: 190,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'url',
      title: 'LinkCV',
      width: 190,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'salary_candidate',
      title: 'Ứng viên offer',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'onboard_date',
      title: 'Thời gian Onboard dự kiến',
      width: 180,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'note',
      title: 'HR ghi chú',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'cv_reviewer',
      title: 'HR lọc CV',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'approval_status',
      title: 'Trạng thái chuyên môn lọc CV',
      width: 250,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_status',
      title: 'Trạng thái phỏng vấn',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_time',
      title: 'Giờ PV',
      width: 160,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_date',
      title: 'Ngày PV',
      width: 110,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_form',
      title: 'Hình thức phỏng vấn',
      width: 210,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'comment_radio',
      title: 'Kết quả',
      width: 110,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'salary_offer',
      title: 'Công ty offer',
      width: 130,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'conclusion',
      title: 'Kết luận',
      width: 90,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_result_note',
      title: 'Ghi chú',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'company_offer_date',
      title: 'Ngày công ty offer',
      width: 190,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'feedback_offer_date',
      title: 'Ngày phản hồi offer',
      width: 190,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'start_work_date',
      title: 'Ngày đi làm',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
  ];
  return (
    <>
      <Row justify="end" style={{ marginBottom: 10 }}>
        <Button type="success" htmlType="submit" style={{ marginRight: '10px' }} icon={<SearchOutlined />}>
          Tìm kiếm
        </Button>
        <Button type="success" style={{ marginRight: '10px' }} icon={<PlusCircleOutlined />}>
          Thêm mới
        </Button>
        <Button type="success" style={{ marginRight: '10px' }} icon={<UploadOutlined />}>
          Import
        </Button>
        <Button type="success" style={{ marginRight: '10px' }} icon={<DownloadOutlined />}>
          Export
        </Button>
      </Row>
      <Table
        total={0}
        current={0}
        pageSize={0}
        handlePageChange={() => {}}
        handleSizeChange={() => {}}
        columns={columns}
        scroll={{
          x: 6000,
        }}
      />
    </>
  );
}

export default TableSearch;
