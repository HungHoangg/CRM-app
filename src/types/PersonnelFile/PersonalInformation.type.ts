import { CommonFields } from 'types/common.type';

// Hồ sơ
export interface IPersonalInformationFile extends CommonFields {
  description: string | null;
  file_name: string;
  id: number;
  staff_file: number;
  staff_id: number;
}

// Vị trí công việc
export interface IPersonalInformationPosition extends CommonFields {
  department_name: string;
  dept_id: number;
  end_date: string;
  id: number;
  job_position: number;
  job_position_name: string;
  staff_id: number;
  start_date: string;
  title: string;
  type: number;
}

// Thông tin cá nhân
export interface IPersonalInformation extends CommonFields {
  acc_number: string;
  address: string;
  avatar: string;
  bank_name: number;
  birthday: string;
  code: string;
  company_email: string;
  contact_name: string;
  contact_phone_number: string;
  current_address: string;
  current_province_id: number;
  current_sub_district_id: number;
  current_town_id: number;
  edu_level: number;
  ethnic: number;
  ethnic_name: string;
  files: IPersonalInformationFile[];
  id: number;
  identity_card_chip_date: string | null;
  identity_card_chip_number: string | null;
  identity_card_chip_number_image_back: string;
  identity_card_chip_number_image_front: string;
  identity_card_chip_place: string | null;
  identity_card_chip_place_name: string | null;
  identity_card_date: string;
  identity_card_number: string;
  identity_card_number_image_back: string | null;
  identity_card_number_image_front: string | null;
  identity_card_place: number;
  identity_card_place_name: string;
  name: string;
  number_plate: string;
  personal_email: string;
  phone_number: string;
  positions: IPersonalInformationPosition[];
  province_id: number;
  relationship: number;
  school: number;
  school_name: string;
  sex: 1 | 2;
  social_insurance_number: string;
  social_insurance_status: number;
  specialization: number;
  specialization_name: string;
  staff_bank_name: string;
  staff_id: string | null;
  status: number;
  sub_district_id: number;
  tax_code: string;
  timekeeping_code: string;
  town_id: number;
  transportation: number;
  type_identity_paper: number;
  workplace: number;
  workplace_name: string;
}

export interface IPersonalInformationSearch {
  is_active: number;
  ist_name: string;
  list_code: string;
  list_dept_id: number[];
  list_job_position: number[];
  list_title: number[];
  status: number;
}
