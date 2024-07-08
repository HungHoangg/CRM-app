import React, { lazy } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { isAuthenticated } from 'utils/Auth';
import Loadable from 'utils/Loadable';
import { path } from './path';

//Auth
const AuthPage = Loadable(lazy(() => import('containers/Auth')));
//Layout
const Layout = Loadable(lazy(() => import('containers/Layout')));
// Thông tin cá nhân
const PersonalInformationPage = Loadable(lazy(() => import('containers/PersonnelFile/PersonalInformation')));
const AddPersonalInformationPage = Loadable(
  lazy(() => import('containers/PersonnelFile/PersonalInformation/AddPersonalInformation'))
);
// Lịch họp
const PersonalCalendar = Loadable(lazy(() => import('containers/CalenderManagement/PersonalCalendar')));
const MeetingRoomCalendar = Loadable(lazy(() => import('containers/CalenderManagement/MeetingRoomCalendar')));
// Quản lý đơn đăng kí
const OnsiteRegister = Loadable(lazy(() => import('containers/RegisterManagement/OnsiteRegister')));
const OvertimeRegister = Loadable(lazy(() => import('containers/RegisterManagement/OvertimeRegister')));
const HaltRegister = Loadable(lazy(() => import('containers/RegisterManagement/HaltRegister')));
const RemoteRegister = Loadable(lazy(() => import('containers/RegisterManagement/RemoteRegister')));
const TardinessLateRegister = Loadable(lazy(() => import('containers/RegisterManagement/TardinessLateRegister')));
// Quản lí tuyển dụng
const RecruitRequirement = Loadable(lazy(() => import('containers/RecruitManagement/RecruitRequirement')));
const AddRecruitRequirement = Loadable(
  lazy(() => import('containers/RecruitManagement/RecruitRequirement/AddRecruitRequirement'))
);
const CvRecruitManagement = Loadable(lazy(() => import('containers/RecruitManagement/CvRecruitManagement')));
const InterviewScheduleManagement = Loadable(
  lazy(() => import('containers/RecruitManagement/InterviewScheduleManagement'))
);

const Router = () => {
  const location = useLocation();

  return useRoutes([
    {
      path: path.root,
      element: isAuthenticated() ? <Layout /> : <Navigate to={path.login} state={{ from: location }} />,
      children: [
        {
          path: path.personal_information,
          index: true,
          element: <PersonalInformationPage />,
        },
        {
          path: path.add_personal_information,
          element: <AddPersonalInformationPage />,
        },
        {
          path: path.personal_calendar,
          element: <PersonalCalendar />,
        },
        {
          path: path.meeting_room_calendar,
          element: <MeetingRoomCalendar />,
        },
        {
          path: path.onsite_register,
          element: <OnsiteRegister />,
        },
        {
          path: path.overtime_register,
          element: <OvertimeRegister />,
        },
        {
          path: path.tardiness_late_register,
          element: <TardinessLateRegister />,
        },
        {
          path: path.remote_register,
          element: <RemoteRegister />,
        },
        {
          path: path.halt_register,
          element: <HaltRegister />,
        },
        {
          path: path.recruit_requirement,
          element: <RecruitRequirement />,
        },
        {
          path: path.cv_management,
          element: <CvRecruitManagement />,
        },
        {
          path: path.interview_schedule,
          element: <InterviewScheduleManagement />,
        },
        {
          path: path.add_recruit_requirement,
          element: <AddRecruitRequirement />,
        },
      ],
    },
    {
      path: path.login,
      element: isAuthenticated() ? <Navigate to={path.root} state={{ from: location }} /> : <AuthPage />,
    },
  ]);
};

export default Router;
