import {
  DeleteOutlined,
  PlusCircleOutlined,
  DownloadOutlined,
  UploadOutlined,
  UnorderedListOutlined,
  CheckOutlined,
  StopOutlined,
} from '@ant-design/icons';
import { Popover, Row, Space, Tooltip } from 'antd';
import Button from 'antd-button-color';
import { ColumnsType } from 'antd/es/table';
import Table from 'components/Table';
import React, { useEffect } from 'react';
import { path } from 'routers/path';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { setPage, setSize, searchRecruitRequirementThunk } from './RecruitRequirement.slice';

function TableSearch() {
  const { rows, page, size, totalRow } = useAppSelector((state) => state.recruitRequirement);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const columns: ColumnsType = [
    {
      dataIndex: 'no',
      title: 'STT',
      width: 50,
      render: (value, item, index) => <Tooltip title={value}>{page * size + index - 9}</Tooltip>,
    },
    {
      dataIndex: 'action',
      title: 'Thao tác',
      width: 90,
      align: 'center',
      render: (value) => (
        <Tooltip title={value}>
          <Popover placement="rightBottom" content={() => <div>ALOALOALO</div>}>
            <UnorderedListOutlined />
          </Popover>
        </Tooltip>
      ),
    },
    {
      dataIndex: 'action1',
      title: 'Hành động',
      align: 'center',
      width: 120,
      render: (value) => (
        <Tooltip title={value}>
          <Space>
            <CheckOutlined style={{ color: 'green' }} />
            <StopOutlined style={{ color: 'red' }} />
          </Space>
        </Tooltip>
      ),
    },
    {
      dataIndex: 'name',
      title: 'Tên yêu cầu tuyển dụng',
      ellipsis: {
        showTitle: false,
      },
      width: 220,
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'department_name',
      title: 'Phòng ban',
      width: 150,
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'title_name',
      title: 'Chức danh',
      width: 170,
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'job_position_name',
      title: 'Vị trí công việc',
      width: 190,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'quantity',
      title: 'Số lượng nhân sự cần tuyển',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'total_candidate_received_offers',
      title: 'Số lượng nhân sự đã nhận offer',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'onboard_date_expected',
      title: 'Thời gian onboard mong muốn',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'start_date',
      title: 'Thời gian bắt đầu',
      width: 200,
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'end_date',
      title: 'Thời gian kết thúc',
      width: 200,
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'approval_status',
      title: 'Trạng thái duyệt',
      width: 170,
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      dataIndex: 'request_status',
      title: 'Trạng thái',
      width: 170,
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
  ];

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    dispatch(searchRecruitRequirementThunk({}));
  };

  const handleSizeChange = (size: number) => {
    dispatch(setSize(size));
    dispatch(searchRecruitRequirementThunk({}));
  };

  useEffect(() => {
    dispatch(searchRecruitRequirementThunk({}));
  }, []);

  return (
    <>
      <Row justify="end" style={{ marginBottom: 10 }}>
        <Button
          type="success"
          onClick={() => navigate(path.add_recruit_requirement)}
          style={{ marginRight: '10px' }}
          icon={<PlusCircleOutlined />}
        >
          Thêm mới
        </Button>
        <Button type="success" style={{ marginRight: '10px' }} icon={<UploadOutlined />}>
          Import
        </Button>
        <Button type="success" style={{ marginRight: '10px' }} icon={<DownloadOutlined />}>
          Export
        </Button>
        <Button danger icon={<DeleteOutlined />}>
          Xóa
        </Button>
      </Row>
      <Table
        total={totalRow}
        current={page}
        pageSize={size}
        dataSource={rows}
        rowKey="id"
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
        columns={columns}
        scroll={{
          x: 1920,
        }}
      />
    </>
  );
}

export default TableSearch;
