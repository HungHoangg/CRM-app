/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Key, useEffect } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons';
import { Row, Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Table from 'components/Table';
import Button from 'antd-button-color';
import { IPersonalInformation } from 'types';
import { useAppDispatch, useAppSelector } from 'store';
import { searchPersonalInformationThunk, setPage, setSelectedRowKeys, setSize } from './PersonalInformation.slice';
import { useNavigate } from 'react-router-dom';
import { path } from 'routers/path';

const TableSearch = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { rows, page, size, totalRow, selectedRowKeys } = useAppSelector((state) => state.personalInformation);

  useEffect(() => {
    dispatch(searchPersonalInformationThunk({}));
  }, []);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    dispatch(searchPersonalInformationThunk({}));
  };

  const handleSizeChange = (page: number) => {
    dispatch(setSize(page));
    dispatch(searchPersonalInformationThunk({}));
  };

  const columns: ColumnsType<IPersonalInformation> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      width: 45,
      align: 'center',
      render: (value, item, index) => (page === 1 ? index + 1 : (page - 1) * size + (index + 1)),
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      align: 'center',
      width: 100,
      render: (_, record) => (
        <Space>
          <Tooltip title="Xem chi tiết">
            <EyeInvisibleOutlined />
          </Tooltip>
          <Tooltip title="Sửa">
            <EditOutlined />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: 'Mã nhân viên',
      dataIndex: 'code',
      ellipsis: {
        showTitle: false,
      },
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      width: 200,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Email công ty',
      dataIndex: 'company_email',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value: number) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone_number',
      align: 'center',
      width: 150,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Phòng ban',
      dataIndex: 'department',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Chức danh',
      dataIndex: 'job_title',
      ellipsis: {
        showTitle: false,
      },
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Vị trí công việc',
      dataIndex: 'job_position',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Trạng thái làm việc',
      dataIndex: 'status',
      align: 'center',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (value: number) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'is_active',
      align: 'center',
      width: 160,
      ellipsis: {
        showTitle: false,
      },
      render: (value: number) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'birthday',
      width: 100,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Giới tính',
      dataIndex: 'sex',
      align: 'center',
      width: 90,
      render: (value: number) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Số CCCD gắn chip',
      dataIndex: 'identity_card_chip_number',
      width: 200,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Số CMND/CCCD cũ',
      dataIndex: 'identity_card_number',
      align: 'center',
      width: 150,
      render: (value: number) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Ngân hàng',
      dataIndex: 'staff_bank_name',
      width: 250,
      ellipsis: {
        showTitle: false,
      },
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Tài khoản ngân hàng',
      dataIndex: 'acc_number',
      width: 250,
      render: (value: number) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Tình trạng BHXH',
      dataIndex: 'social_insurance_status',
      width: 200,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Mã số BHXH',
      dataIndex: 'social_insurance_number',
      align: 'center',
      width: 150,
      render: (value: number) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Loại xe',
      dataIndex: 'transportation',
      width: 120,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Biển số xe',
      dataIndex: 'number_plate',
      align: 'center',
      width: 100,
      render: (value: number) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Mã chấm công',
      dataIndex: 'timekeeping_code',
      width: 120,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: 'Nơi làm việc',
      dataIndex: 'workplace_name',
      align: 'center',
      width: 250,
      ellipsis: {
        showTitle: false,
      },
      render: (value: number) => <Tooltip title={value}>{value}</Tooltip>,
    },
  ];

  const footer = () => `Đã chọn ${selectedRowKeys.length} bản ghi`;

  return (
    <>
      <Row justify="end" style={{ marginBottom: 10 }}>
        <Space>
          <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => navigate(path.add_personal_information)}>
            Thêm mới
          </Button>
          <Button type="primary" icon={<VerticalAlignTopOutlined />}>
            Import
          </Button>
          <Button type="primary" icon={<VerticalAlignBottomOutlined />}>
            Export
          </Button>
          <Button danger icon={<DeleteOutlined />}>
            Xóa
          </Button>
        </Space>
      </Row>
      <Table
        total={totalRow}
        current={page}
        dataSource={rows}
        pageSize={size}
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
        columns={columns}
        rowKey="id"
        scroll={{
          x: 1500,
        }}
        // rowSelection={{
        //   selectedRowKeys,
        //   preserveSelectedRowKeys: true,
        //   onChange: (newSelectedRowKeys: Key[]) => dispatch(setSelectedRowKeys(newSelectedRowKeys)),
        // }}
        footer={selectedRowKeys.length ? footer : undefined}
      />
    </>
  );
};

export default TableSearch;
