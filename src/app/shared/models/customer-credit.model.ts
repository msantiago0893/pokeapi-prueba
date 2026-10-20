import { Address, ApiResponse, PersonName } from './common.model';

export interface CustomerCreditsQuery {
  employeeNumber?: string;
  name?: string;
  lastName?: string;
  secondLastName?: string;
}

export interface CreditLimit {
  max?: number;
  real?: number;
}

export interface CreditDetails {
  applicationDate?: string;
  approvalDate?: string;
  originationDate?: string;
  originatingStore?: number;
  creditLimit?: CreditLimit;
  paymentPunctuality?: string;
}

export interface CustomerCredit {
  employeeNumber: string;
  name: PersonName;
  address?: Address;
  credit?: CreditDetails;
}

export type CustomerCreditResponse = ApiResponse<CustomerCredit[]>;
