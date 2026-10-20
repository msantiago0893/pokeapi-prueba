import { ApiResponse, PersonName } from './common.model';

export interface EmployeeStatus {
  value: string;
  description?: string;
}

export interface EmployeeRole {
  value: string;
  description?: string;
}

export interface Employee {
  employeeNumber: string;
  name: PersonName;
  status: EmployeeStatus;
  role: EmployeeRole[];
}

export interface EmployeeUpdateRequest {
  status?: 'ACTIVE' | 'SUSPENDED';
  role?: 'ADMINISTRATOR' | 'OPERATOR';
}

export type EmployeeResponse = ApiResponse<Employee>;
