import BaseService from 'services/BaseService';

const API_END_POINT = '/api/registration-form/';
const RegisterManagementService = {
  search: (body: any) => BaseService.post(`${API_END_POINT}get-list`, body),
};

export default RegisterManagementService;