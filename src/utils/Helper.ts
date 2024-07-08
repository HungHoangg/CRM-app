import moment from 'moment';
import { toast } from 'react-toastify';
import { DATE_FORMAT, TOAST_OPTIONS } from './Constants';

export function isNotNullOrUndefined<T>(data: T) {
  return data !== null && data !== undefined;
}

//Format date to DD/MM/YYYY
export const formatDate = (date?: Date) => {
  return date && moment(date).format(DATE_FORMAT);
};

export const showMessage = {
  success: (message: string) => toast.success(message, TOAST_OPTIONS),
  error: (message: string) => toast.error(message, TOAST_OPTIONS),
  info: (message: string) => toast.info(message, TOAST_OPTIONS),
  warning: (message: string) => toast.warning(message, TOAST_OPTIONS),
};

// lấy tên theo giá trị trả về
export const getNameByValue = <T = any>(array: Array<T>, key: keyof T, value: string | number, name: string) => {
  const found = array.find((item) => item[key] === value);
  return found ? found[name] : null;
};
