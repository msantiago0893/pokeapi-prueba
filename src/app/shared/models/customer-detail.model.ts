import { Address, ApiResponse } from './common.model';

export interface CustomerDetailsQuery {
  customerId?: string;
  firstName?: string;
  lastName?: string;
  secondLastName?: string;
}

export interface CustomerName {
  firstName?: string;
  lastName?: string;
  secondLastName?: string;
}

export interface CurrentDebt {
  amount?: number;
  transaction?: { type?: string };
}

export interface SpecialSituation {
  situation?: { key?: string; number?: number };
  acronym?: string;
  description?: string;
  applicationDate?: string;
  applicationEmployee?: number;
  applicationCenter?: number;
}

export interface ReportedAccount {
  number?: string;
  description?: string;
  reportedDate?: string;
}

export interface BureauRequest {
  date?: string;
  requestingParty?: string;
}

export interface BureauUpdateDate {
  date?: string;
  reason?: string;
}

export interface SecondChancePlan {
  name?: string;
  description?: string;
  healDebt?: string | null;
  easyPay?: string | null;
  getUpToDate?: string | null;
  discountsforNegotiation?: string | null;
}

export interface CreditBureau {
  report?: string;
  reportedAccounts?: ReportedAccount[];
  removals?: BureauRequest;
  updates?: BureauRequest;
  updatesDates?: BureauUpdateDate[];
  bankruptCustomer?: {
    secondChancePlans?: SecondChancePlan[];
    collectionVisitStatus?: string | null;
  };
}

export interface CreditBehavior {
  paymentPunctuality?: string;
  specialSituations?: SpecialSituation[];
  activeSalesConditioningAccount?: string;
  creditBureau?: CreditBureau;
}

export interface EmailChange {
  account?: string;
  date?: string;
  place?: string;
}

export interface EmailCredential {
  account?: string;
  status?: boolean;
  changeHistory?: EmailChange[];
}

export interface PhoneChange {
  phone?: string;
  registrationDate?: string;
  cancelationPlace?: string;
}

export interface PhoneCredential {
  number?: string;
  status?: string;
  changeHistory?: PhoneChange[];
}

export interface CredentialsCustomer {
  email?: EmailCredential;
  phone?: PhoneCredential;
}

export interface IneChange {
  registrationDate?: string;
  store?: string;
}

export interface OriginCustomer {
  date?: string;
  store?: string;
  contractSection?: string;
  INE?: string;
  INEchangeHistory?: IneChange[];
}

export interface Purchase {
  id?: string;
  description?: string;
  creditAmount?: number;
  cashAmount?: number;
  paymentMethod?: string;
  card?: { number?: string };
  date?: string;
  store?: string;
  cashRegister?: number;
  price?: number;
  code?: string;
  noteNumber?: number;
  employee?: { number?: number; name?: string };
}

export interface ProductDelivery {
  id?: number;
  datetime?: string;
  sku?: string;
  description?: string;
  address?: Address;
  evidences?: unknown[];
  employeeNumber?: string;
  personWhoRecieved?: string;
  customerPhone?: string;
}

export interface ProductDeliveries {
  deliveries?: ProductDelivery[];
}

export interface CustomerDetail {
  employeeNumber?: string;
  name?: CustomerName;
  address?: Address;
  birthDate?: string;
  CURP?: string;
  RFC?: string;
  currentDebt?: CurrentDebt;
  creditBehavior?: CreditBehavior;
  credentialsCustomer?: CredentialsCustomer;
  originCustomer?: OriginCustomer;
  purchases?: Purchase;
  productDeliveries?: ProductDeliveries;
}

export type CustomerDetailsResponse = ApiResponse<CustomerDetail[]>;
