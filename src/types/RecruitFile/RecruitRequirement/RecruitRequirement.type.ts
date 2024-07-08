import { CommonFields } from 'types/common.type';

// Thông tin yêu cầu tuyển dụng
export interface IRecruitRequirement extends CommonFields {
  approval_node: string;
  approval_status: number;
  code: string;
  department_name: string;
  dept_id: number;
  end_date: string;
  id: number;
  interviewer_expected: string;
  job_description: string;
  job_position: number;
  job_position_name: string;
  job_requirement: string;
  max_salary: string;
  min_salary: string;
  name: string;
  note: string;
  onboard_date_expected: string;
  quantity: number;
  reason: string;
  request_date: string;
  request_status: number;
  start_date: string;
  title: number;
  title_name: string;
  total_candidate_received_offers: string;
}

// Vị trí công việc
export interface IRecruitRequirementPosition extends CommonFields {
  additional_info?: string | null;
  dict_value?: string | null;
  dict_name: string;
  dict_type_id: number;
  id: number;
  parent_id: number;
}

//Phòng ban
export interface IRecruitRequirementDept {
  id: number;
  name: string;
  path: string;
}

export interface IRecruitRequirementSearch {
  name: string;
  code: string;
  list_dept_id: number[];
  list_job_position: number[];
  start_date: string;
  end_date: string;
  start_onboard: string;
  end_onboard: string;
}

export interface IRecruitRequirementAdd {
  name: string;
  start_date: string;
  end_date: string;
  dept_id: number | null;
  title: number | null;
  job_position: number | null;
  quantity: number | null;
  request_date: string;
  onboard_date_expected: string;
  interviewer_expected: number[];
  min_salary: number | null;
  max_salary: number | null;
  reason: string;
  job_description: string;
  job_requirement: string;
  note: string;
}
