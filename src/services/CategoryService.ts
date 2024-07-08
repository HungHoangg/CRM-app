import BaseService from 'services/BaseService';

const API_END_POINT = 'api/load-category';
const CategoryService = {
  getByName: (name: string) => BaseService.get(`${API_END_POINT}?type=1&name=${name}&parent=1`),
};

export default CategoryService;
