import { API_SUCCESS_STATUS } from '../utils/Constants';
import interceptAuth from './axiosClient';
import { Response } from 'types';
import { showMessage } from 'utils/Helper';

const instanceDownloadFile = interceptAuth('application/json', 'blob');
const instanceFormData = interceptAuth('multipart/form-data');
const instance = interceptAuth();

const BaseService = {
  get: async <T>(url: string = ''): Promise<Response<T>> => {
    try {
      const { data } = await instance.get(url);
      return data;
    } catch (error: any) {
      showMessage.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  post: async <T = any, R = any>(url: string = '', body: T): Promise<Response<R>> => {
    try {
      const response = await instance.post(url, body);
      const totalRow = Number(response.headers['x-total-count']) || 0;
      // const { status, message } = response;
      // if (status === API_SUCCESS_STATUS) {
      //   showMessage.success(message);
      // }
      return { ...response.data, totalRow };
    } catch (error: any) {
      showMessage.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  put: async <T = any, R = any>(url: string = '', body: T): Promise<Response<R>> => {
    try {
      const { data } = await instance.put(url, body);
      const { status, message } = data;
      if (status === API_SUCCESS_STATUS) {
        showMessage.success(message);
      }
      return data;
    } catch (error: any) {
      showMessage.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  delete: async <T = any>(url: string = ''): Promise<Response<T>> => {
    try {
      const { data } = await instance.delete(url);
      const { status, message } = data;
      if (status === API_SUCCESS_STATUS) {
        showMessage.success(message);
      }
      return data;
    } catch (error: any) {
      showMessage.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  downloadFile: (url = '', fileName = '') =>
    new Promise(async (resolve, reject) => {
      await instanceDownloadFile
        .get(url)
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();

          resolve(response.data);
        })
        .catch(async (error) => {
          const responseObj = await error.response.data.text();
          showMessage.error(JSON.parse(responseObj).message);
        });
    }),

  postFile: async <T = null>(url: string = '', body: FormData): Promise<Response<T>> => {
    try {
      const { data } = await instanceFormData.post(url, body);
      const { status, message } = data;
      if (status === API_SUCCESS_STATUS) {
        showMessage.success(message);
      }
      return data;
    } catch (error: any) {
      showMessage.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  putFile: async <T = null>(url: string = '', body: FormData): Promise<Response<T>> => {
    try {
      const { data } = await instanceFormData.put(url, body);
      const { status, message } = data;
      if (status === API_SUCCESS_STATUS) {
        showMessage.success(message);
      }
      return data;
    } catch (error: any) {
      showMessage.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  postImportExcl: (url = '', body = {}, params = {}, config = {}, fileName = '') =>
    new Promise(async (resolve, reject) => {
      await instanceFormData
        .post(url, body, config)
        .then((response: any) => {
          const file = new Blob([response.data]);
          if (Object.keys(response.headers).length) {
            const str = `Import thành công ${+response.headers.total - response.headers.totalerror} trên tổng số ${
              response.headers.total
            } bản ghi`;
            showMessage.success(str);
          }
          if (file) {
            resolve({ file });
          }

          resolve(response.data);
        })
        .catch(async (error) => {
          const responseObj = await error.response.data.text();
          showMessage.error(JSON.parse(responseObj).message);
        });
    }),
};

export default BaseService;
