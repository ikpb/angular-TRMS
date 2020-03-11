import { Time } from '@angular/common';

export interface ReimbursementForm{
id?: number;

userid: string,

dateOfEvent: Date,

address: string,

city: string,

state: string,

cost: number,

estimateReimburse: number,

gradeFormat: string,

typeOfEvent: string,

workJustification: string,

endDate: Date,

description: string,

submissionDate: Date,

fileUpLoad?: File;

}