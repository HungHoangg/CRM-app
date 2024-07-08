import { Form } from 'antd';
import Title from 'components/Title';
import React from 'react';

const JobTitle = () => {
  return (
    <div>
      <Title level={5}>Chức danh nhân sự</Title>
      {/* <Form.List>
        {(fields) => (
          <div>
            {fields.map((field) => (
              <Form.Item {...field}></Form.Item>
            ))}
          </div>
        )}
      </Form.List> */}
    </div>
  );
};

export default JobTitle;
