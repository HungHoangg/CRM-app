import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { path } from 'routers/path';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMenuItem } from 'utils/AntDesign';
import type { MenuProps } from 'antd';
import { FileProtectOutlined, ScheduleOutlined, SettingOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../assets/images/ECS-log_small.png';

const menuItems: MenuProps['items'] = [
  getMenuItem('Hồ sơ nhân sự', 'sub1', <UserOutlined />, [
    getMenuItem('Thông tin cá nhân', path.personal_information, null),
  ]),

  getMenuItem('Quản lý lịch', 'sub2', <ScheduleOutlined />, [
    getMenuItem('Quản lý lịch phòng họp', path.meeting_room_calendar),
    getMenuItem('Quản lý lịch cá nhân', path.personal_calendar),
  ]),

  getMenuItem('Quản lý đơn đăng ký', 'sub3', <FileProtectOutlined />, [
    getMenuItem('Đăng ký OT', path.overtime_register),
    getMenuItem('Đăng ký đi muộn, về sớm', path.tardiness_late_register),
    getMenuItem('Đăng ký onsite', path.onsite_register),
    getMenuItem('Đăng ký remote', path.remote_register),
    getMenuItem('Đăng ký nghỉ', path.halt_register),
  ]),

  getMenuItem('Quản lý tuyển dụng', 'sub4', <TeamOutlined />, [
    getMenuItem('Yêu cầu tuyển dụng', path.recruit_requirement),
    getMenuItem('Quản lý CV', path.cv_management),
    getMenuItem('Quản lý lịch phỏng vấn', path.interview_schedule),
  ]),

  getMenuItem('Quản trị hệ thống', 'sub5', <SettingOutlined />, [getMenuItem('Danh mục', path.category_management)]),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

const MenuComponent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(['']);
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleSelect = (data: { key: string }) => {
    navigate(data.key);
  };

  const handleGoRoot = () => {
    navigate(path.personal_information);
    setOpenKeys(['sub1']);
  };

  return (
    <>
      <div style={{ height: 80, width: 150, margin: '0 auto 10px auto' }}>
        <img src={logo} alt="IAPP Techasians" width="100%" onClick={handleGoRoot} />
      </div>
      <Menu
        items={menuItems}
        mode="inline"
        onClick={handleSelect}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default MenuComponent;
