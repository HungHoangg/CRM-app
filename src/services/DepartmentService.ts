import BaseService from 'services/BaseService';

const API_END_POINT = 'api/department-tas/';
const DepartmentService = {
  getAll: () => BaseService.get(`${API_END_POINT}get-department`),
};

export default DepartmentService;
