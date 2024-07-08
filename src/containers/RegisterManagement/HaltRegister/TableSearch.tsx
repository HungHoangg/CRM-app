import { DeleteOutlined, EditOutlined, EyeInvisibleOutlined, PlusCircleOutlined, VerticalAlignBottomOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import { Row, Space, Tooltip } from 'antd';
import Button from 'antd-button-color';
import { ColumnsType } from 'antd/es/table';
import Table from 'components/Table';
import { Key } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { IRegister } from 'types/RegisterManagement/Register.type';
import { searchHaltRegisterThunk, setPage, setSelectedRowKeys, setSize } from './HaltRegister.slice';
import { path } from 'routers/path';

const TableSearch = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { rows, page, size, totalRow, selectedRowKeys } = useAppSelector((state) => state.haltRegister);

    const handlePageChange = (page: number) => {
        dispatch(setPage(page));
        dispatch(searchHaltRegisterThunk({}));
    };

    const handleSizeChange = (page: number) => {
        dispatch(setSize(page));
        dispatch(searchHaltRegisterThunk({}));
    };

    const columns: ColumnsType<IRegister> = [
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
            title: 'Phân loại',
            dataIndex: 'type',
            ellipsis: {
                showTitle: false,
            },
            render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
        },
        {
            title: 'Mã nhân viên',
            dataIndex: 'staff_code',
            ellipsis: {
                showTitle: false,
            },
            render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'staff_name',
            ellipsis: {
                showTitle: false,
            },
            render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
        },
        {
            title: 'Ngày bắt đầu',
            dataIndex: 'start_date',
            ellipsis: {
                showTitle: false,
            },
            render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
        },
        {
            title: 'Ngày kết thúc',
            dataIndex: 'end_date',
            ellipsis: {
                showTitle: false,
            },
            render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
        },
        {
            title: 'Số ngày',
            dataIndex: 'end_date',
            ellipsis: {
                showTitle: false,
            },
            render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
        },
        {
            title: 'Lý do',
            dataIndex: 'reason',
            ellipsis: {
                showTitle: false,
            },
            render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
        },
        {
            title: 'Trạng thái PM phê duyệt',
            dataIndex: 'approval_status_pm',
            ellipsis: {
                showTitle: false,
            },
            render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
        },
        {
            title: 'Trạng thái BOD phê duyệt',
            dataIndex: 'approval_status_bod',
            ellipsis: {
                showTitle: false,
            },
            render: (value: string) => <Tooltip title={value}>{value}</Tooltip>,
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
        rowSelection={{
          selectedRowKeys,
          preserveSelectedRowKeys: true,
          onChange: (newSelectedRowKeys: Key[]) => dispatch(setSelectedRowKeys(newSelectedRowKeys)),
        }}
        footer={selectedRowKeys.length ? footer : undefined}
      />
    </>
    );
};

export default TableSearch;