import BaseService from 'services/BaseService';
import { IRecruitRequirementAdd } from 'types/RecruitFile/RecruitRequirement/RecruitRequirement.type';

const API_END_POINT = '/api/recruitment-request-tas/';
const RecruitRequirementService = {
  search: (body: any) => BaseService.post(`${API_END_POINT}get-all`, body),
  add: (body: IRecruitRequirementAdd) => BaseService.post(`${API_END_POINT}create`, body),
};

export default RecruitRequirementService;
