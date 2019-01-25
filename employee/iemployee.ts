import { Iaddress } from './iaddress';

export interface IEmployee {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    contactAddress: Iaddress;
    permanentAddress: Iaddress;
    email: string;
    phone: number;
    emerContactName: string;
    emerContactNo: number;
    contactPreference: string;
    bloodGp: string;
}
