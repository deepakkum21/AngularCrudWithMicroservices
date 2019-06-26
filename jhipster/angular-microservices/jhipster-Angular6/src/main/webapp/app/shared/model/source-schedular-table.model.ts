export interface ISourceSchedularTable {
    id?: string;
    empId?: number;
    fullName?: string;
    indicator?: string;
    email?: string;
    phone?: number;
    contactPreference?: string;
}

export class SourceSchedularTable implements ISourceSchedularTable {
    constructor(
        public id?: string,
        public empId?: number,
        public fullName?: string,
        public indicator?: string,
        public email?: string,
        public phone?: number,
        public contactPreference?: string
    ) {}
}
