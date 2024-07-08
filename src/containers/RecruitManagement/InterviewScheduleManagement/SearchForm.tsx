import { Form, Input, Space } from 'antd';
import TextInput from 'components/TextInput';
import Button from 'antd-button-color';
import Title from 'components/Title';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

function SearchForm() {
  return (
    <Form layout="horizontal">
      <Space>
        <Form.Item>
          <TextInput placeholder="Tìm kiếm theo họ tên, mã nhân viên..." allowClear style={{ width: 500 }} />
        </Form.Item>
        <Form.Item>
          <Button type="success" htmlType="submit" icon={<SearchOutlined />}>
            Tìm kiếm
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
}

export default SearchForm;
