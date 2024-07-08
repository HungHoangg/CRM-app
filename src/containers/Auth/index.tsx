/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Col, Form, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { path } from 'routers/path';
import { useAppDispatch, useAppSelector } from 'store';
import { IAuth } from 'types';
import { login } from './slice';
import './login.scss';
import TextInput from 'components/TextInput';
import logo from '../../assets/images/ECS-log_small.png';
import Button from 'antd-button-color';
const Auth = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.auth);

  const handleFinish = async (values: IAuth) => {
    await dispatch(login(values));
    navigate(path.root);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '120px 30px 30px 30px',
        minHeight: '100vh',
      }}
    >
      <Form
        className="login-form"
        layout="vertical"
        onFinish={handleFinish}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
        requiredMark={'optional'}
      >
        <Row style={{ width: '100%' }} align="middle" justify="center">
          <img src={logo} alt="Techasians" width="20%" height="20%" />
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Tên đăng nhập" name="email" rules={[{ required: true }]}>
              <TextInput style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nhập tên đăng nhập" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Mật khẩu" name="password" rules={[{ required: true }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Nhập mật khẩu" />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ width: '65%', marginTop: 30 }}>
          <Button type="success" block htmlType="submit" loading={isLoading}>
            Đăng nhập
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Auth;
