import React, { FC } from 'react';
import { Empty, Table as TableComponent, TableProps } from 'antd';

interface Props extends TableProps<any> {
  total?: number;
  current: number;
  pageSize: number;
  handlePageChange: (page: number) => void;
  handleSizeChange: (size: number) => void;
}

const Table: FC<Props> = ({ total, current, pageSize, handlePageChange, handleSizeChange, ...others }) => {
  return (
    <TableComponent
      {...others}
      size="small"
      bordered
      pagination={{
        total,
        showTotal: (total, range) => `Hiển thị ${range[0]} - ${range[1]} của ${total} bản ghi`,
        onChange: handlePageChange,
        onShowSizeChange: (_, pageSize) => handleSizeChange(pageSize),
        pageSizeOptions: [5, 10, 15, 20],
        showQuickJumper: true,
        showSizeChanger: true,
        current,
        pageSize,
        locale: {
          jump_to: 'Đến trang',
          page: '',
          items_per_page: '/ Trang',
        },
      }}
      locale={{ emptyText: <Empty description="Trống" /> }}
    />
  );
};

export default Table;
