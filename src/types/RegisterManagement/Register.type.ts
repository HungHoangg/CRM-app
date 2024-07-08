import { CommonFields } from "types/common.type";

export interface IRegister extends CommonFields{
    id: number;
    staff_email: string;
    registration_type: number;
    type: number;
    reason_text: string;
    reason_select: number;
    supporter: number;
    // plan_ot_name:;
    note: string;
    // break_time:;
    // project:;
    // location_onsite:;
    // contact_onsite:;
    // result_ot_status:;
    approval_status_pm: number;
    // approval_status_bod:;
    start_date: string;
    end_date: string;
    // start_time:;
    // end_time:;
    start_session: number;
    end_session: number;
    note_pm: string;
    note_bod: string;
    reason: string;
    supporter_name: string;
    staff_name: string;
    staff_code: string;
    // project_name:;
    reason_select_name: string;
    // location_onsite_name:;
    // members:;
    total_time_ot: string;

}