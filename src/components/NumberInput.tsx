import React, { memo } from 'react';

import { Input, InputProps } from 'antd';

interface Props extends InputProps {
  positive?: boolean;
  negative?: boolean;
}

const validate = (e, positive, negative) => {
  if (positive) {
    return ['e', negative ? '-' : 'a', 'E', '+', '.', 'ArrowDown', 'ArrowUp'].includes(e.key);
  }
  return ['e', negative ? '-' : 'a', 'E', '+', 'ArrowDown', 'ArrowUp'].includes(e.key);
};

const validateMax = (value: string, max: number | string, min: number | string) => {
  if (Number(value) < Number(max) && Number(value) > Number(min)) {
    return true;
  }
  return false;
};

const NumberField = React.forwardRef(
  ({ onChange, positive = false, max = 1000000000000, min = -1, negative = false, ...rest }: Props, ref: any) => {
    return (
      <Input
        {...rest}
        maxLength={255}
        min={min}
        onKeyDown={(e) => {
          if (validate(e, positive, negative)) {
            e.preventDefault();
          }
        }}
        type="number"
        onChange={(e) => {
          if (validateMax(e.target.value, max, min)) {
            onChange && onChange(e);
          }
        }}
      />
    );
  }
);

export default memo(NumberField);
