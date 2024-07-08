import { Tabs } from 'antd';
import Title from 'components/Title';
import React from 'react';
import AdvancedSearch from './AdvancedSearch';
import BasicSearch from './BasicSearch';
import TableSearch from './TableSearch';

const PersonalInformation = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        type="card"
        items={[
          {
            label: <Title level={4}>Tìm kiếm cơ bản</Title>,
            key: '1',
            children: <BasicSearch />,
          },
          {
            label: <Title level={4}>Tìm kiếm nâng cao</Title>,
            key: '2',
            children: <AdvancedSearch />,
          },
        ]}
      />
      <TableSearch />
    </div>
  );
};

export default PersonalInformation;
