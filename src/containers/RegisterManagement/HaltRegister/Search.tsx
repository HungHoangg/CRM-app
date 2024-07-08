/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { IHaltRegisterSearch } from 'types/RegisterManagement/HaltRegister.type';
import { Col, Form, Row, Select } from 'antd';
import Button from 'antd-button-color';
import { useAppDispatch } from 'store';
import { searchHaltRegisterThunk } from './HaltRegister.slice';
import TextInput from 'components/TextInput';
import { classificationOfLeave } from 'utils/Options';
import { SearchOutlined, SyncOutlined } from '@ant-design/icons';

const initialValues: IHaltRegisterSearch = {
    type: null,
    start_date: '',
    end_date: '',
    staff_name: '',
    staff_code: '',
    registration_type: 1,
};

const Search = () => {
    const [form] = Form.useForm<IHaltRegisterSearch>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(searchHaltRegisterThunk(initialValues));
    }, []);
    return (
        <Form layout="vertical" form={form}>
            <Row gutter={20}>
                <Col span={4}>
                    <Form.Item name="start_date" label="Từ ngày">
                        <TextInput allowClear />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item name="end_date" label="Đến ngày">
                        <TextInput allowClear />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="staff_code" label="Mã nhân viên">
                        <TextInput allowClear />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="staff_name" label="Họ và tên">
                        <TextInput allowClear />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="status" label="Trạng thái">
                        <Select options={classificationOfLeave} allowClear />
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

export default Search;