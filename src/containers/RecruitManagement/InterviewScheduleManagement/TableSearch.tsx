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
      dataIndex: 'dept_name',
      title: 'Phòng ban',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'job_position_name',
      title: 'Vị trí ứng tuyển',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'candidate_name',
      title: 'Họ và tên',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'candidate_phone_number',
      title: 'SĐT',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'candidate_email',
      title: 'Email ứng viên',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_status',
      title: 'Trạng thái phỏng vấn',
      width: 230,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_time',
      title: 'Giờ phỏng vấn',
      width: 160,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_date',
      title: 'Ngày phỏng vấn',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_form',
      title: 'Hình thức phỏng vấn',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_letter_status',
      title: 'Gửi thư mời phỏng vấn',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_schedule_status',
      title: 'Gửi lịch phỏng vấn',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'offer_letter_status',
      title: 'Gửi thư mời nhận việc',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'thanks_letter_status',
      title: 'Gửi thư cảm ơn',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'comment_radio',
      title: 'Kết quả',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'salary_offer',
      title: 'Công ty offer',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'conclusion',
      title: 'Kết luận',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'interview_result_note',
      title: 'Ghi chú',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'company_offer_date',
      title: 'Ngày công ty offer',
      width: 170,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'feedback_offer_date',
      title: 'Ngày phản hồi offer',
      width: 170,
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
          x: 1920,
        }}
      />
    </>
  );
}

export default TableSearch;
