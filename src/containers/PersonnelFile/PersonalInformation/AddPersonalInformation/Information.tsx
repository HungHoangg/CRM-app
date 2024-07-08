import React from 'react';
import { Col, Form, Row } from 'antd';
import TextInput from 'components/TextInput';
import Title from 'components/Title';

const Information = () => {
  return (
    <div>
      <Title level={5}>Thông tin cá nhân</Title>
      <Row gutter={15} style={{ marginTop: 10 }}>
        <Col span={18}>
          <Row gutter={[15, 15]}>
            <Col span={8}>
              <Form.Item label="Họ và tên">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Trạng thái">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Ngày sinh">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Giới tính">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Dân tộc">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Loại giấy tờ tùy thân">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Số CMT/CCCD cũ">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Ngày cấp CMT/CCCD cũ">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Nơi cấp CMT/CCCD cũ">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Số CCCD gắn chip">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Ngày cấp CCCD gắn chip">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Nơi cấp CCCD gắn chip">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Trình độ học vấn">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Trường">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Chuyên ngành">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Số điện thoại">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Email cá nhân">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Tình trạng số BHXH">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Mã số BHXH">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Mã số thuế">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Mã chấm công">
                <TextInput allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Nơi làm việc">
                <TextInput allowClear />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={6}>tai anh dai dien</Col>
      </Row>
    </div>
  );
};

export default Information;
