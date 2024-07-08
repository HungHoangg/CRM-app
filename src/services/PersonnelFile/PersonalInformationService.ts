import BaseService from 'services/BaseService';

const API_END_POINT = '/api/staff-tas/';
const PersonalInformationService = {
  search: (body: any) => BaseService.post(`${API_END_POINT}get-list`, body),
};

export default PersonalInformationService;
