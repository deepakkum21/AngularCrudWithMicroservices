import { EmployeeModel } from './employee-model';

export class ResolvedEmployeeList {
    constructor(public employeeList: EmployeeModel[], public error: any = null) {}
}
