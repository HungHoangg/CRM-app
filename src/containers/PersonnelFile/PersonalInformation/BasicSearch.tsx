import { Form, Space } from 'antd';
import TextInput from 'components/TextInput';
import { SearchOutlined } from '@ant-design/icons';
import Button from 'antd-button-color';

const BasicSearch = () => {
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
};

export default BasicSearch;
