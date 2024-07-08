import BaseService from './BaseService';

const API_END_POINT = 'api/staff-tas/';

const PersonService = {
  getListPer: (body: { get_all: boolean; is_active: number }) =>
    BaseService.post<typeof body>(`${API_END_POINT}get-list`, body),
};

export default PersonService;
