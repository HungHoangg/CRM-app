import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'containers/Auth/slice';
import personalInformationReducer from 'containers/PersonnelFile/PersonalInformation/PersonalInformation.slice';
import haltRegisterReducer from 'containers/RegisterManagement/HaltRegister/HaltRegister.slice';
import recruitRequirementReducer from 'containers/RecruitManagement/RecruitRequirement/RecruitRequirement.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  personalInformation: personalInformationReducer,
  recruitRequirement: recruitRequirementReducer,
  haltRegister: haltRegisterReducer,
});

export default rootReducer;
