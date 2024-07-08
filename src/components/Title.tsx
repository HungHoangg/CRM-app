import React, { ReactNode, FC } from 'react';
import { Typography } from 'antd';

declare const TITLE_ELE_LIST: [1, 2, 3, 4, 5];

interface Props {
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  level?: typeof TITLE_ELE_LIST[number];
  children: ReactNode;
}

const Title: FC<Props> = ({ type, level, children, ...others }) => {
  return (
    <Typography.Title {...others} type={type} level={level || 3} style={{ color: type || '#00963c', margin: 0 }}>
      {children}
    </Typography.Title>
  );
};

export default Title;
