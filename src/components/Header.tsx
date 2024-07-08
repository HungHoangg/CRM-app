import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  UserOutlined,
  UnlockOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import { Dropdown, Menu, Space, Avatar, Layout } from 'antd';
import { path } from 'routers/path';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUser, logOut } from 'utils/Auth';
import { getMenuItem } from 'utils/AntDesign';

const { Header } = Layout;

const items = [
  getMenuItem('Đổi mật khẩu', '/', <UnlockOutlined />),
  getMenuItem('Đăng xuất', path.login, <ExportOutlined />),
];

const HeaderBar = ({ collapsed, setCollapsed }: any) => {
  const navigate = useNavigate();

  const { fullName } = getLoggedInUser();

  const onClick = (data: any) => {
    if (data.key === path.login) {
      logOut();
      navigate(data.key);
    }
  };

  return (
    <Header className="header">
      {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })} */}

      <Space style={{ cursor: 'pointer', marginLeft: 'auto' }}>
        <Avatar size="large" icon={<UserOutlined />} />
        <Dropdown
          menu={{
            onClick,
            items,
          }}
        >
          <Space>
            {fullName}
            <DownOutlined />
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default HeaderBar;
