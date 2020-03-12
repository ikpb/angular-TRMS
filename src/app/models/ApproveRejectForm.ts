
export interface ApproveRejectForm{
    appid?: number;
    formid?:number;
    approvedby?: number;
    timeAppReject?: Date;
    rejected?: boolean;
    rejectedby?: number;
    infoNeeded: String;
}