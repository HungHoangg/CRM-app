/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Form, Row } from 'antd';
import TextInput from 'components/TextInput';
import Title from 'components/Title';
import React from 'react';
import Information from './Information';

const AddPersonalInformation = () => {
  return (
    <div>
      <Form layout="vertical">
        <Information />
      </Form>
    </div>
  );
};

export default AddPersonalInformation;
