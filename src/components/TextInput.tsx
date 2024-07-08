import React, { memo } from 'react';

import { Input, InputProps } from 'antd';

const TextField = React.forwardRef(({ onChange, maxLength = 255, ...rest }: InputProps, ref: any) => {
  return (
    <Input
      onChange={onChange}
      maxLength={255}
      {...rest}
      onBlur={(e) => {
        onChange && onChange({ ...e, target: { ...e.target, value: e.target.value.trim() } });
      }}
    />
  );
});

export default memo(TextField);
