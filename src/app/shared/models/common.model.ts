export interface SuccessMeta {
  transactionID?: string;
  status?: string;
  statusCode?: number;
  timestamp?: string;
}

export interface ApiResponse<T> {
  meta: SuccessMeta;
  data: T;
}

export interface PersonName {
  name?: string;
  lastName?: string;
  secondLastName?: string;
}

export interface City {
  name?: string;
  number?: number;
}

export interface Address {
  street?: string;
  number?: number;
  zone?: string;
  zip?: string;
  city?: City;
}
