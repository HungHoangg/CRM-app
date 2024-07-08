import type { MenuProps } from 'antd';
import _ from 'lodash';
import { ReactNode, Key } from 'react';

type MenuItem = Required<MenuProps>['items'][number];
export function getMenuItem(
  label: ReactNode,
  key?: Key | null,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export interface AntdOption {
  label: string;
  value: Key;
}

export const convertToSelectOptions = <T = any>(
  array: Array<T>,
  label: keyof T,
  value: keyof T = label
): AntdOption[] =>
  array.map((item) => ({
    label: _.get(item, [label]),
    value: _.get(item, [value]),
  }));
