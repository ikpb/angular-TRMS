import { Time } from '@angular/common';

export interface ReimbursementForm{
id?: number;

userid: string,

dateOfEvent: Date,

address: string,

city: string,

state: string,

cost: number,

gradeFormat: string,

typeOfEvent: string,

workJustification: string,

submissionDate: Date,

description: string,

endDate: Date,

fileUpLoad?: File;

}