import { ApiResponse } from './common.model';

export interface CustomerPhotoQuery {
  customerId?: string;
  firstName?: string;
  lastName?: string;
  secondLastName?: string;
}

export interface CustomerPhoto {
  mimeType?: string;
  fileName?: string;
  content?: string;
}

export interface CustomerPhotoData {
  photo?: CustomerPhoto;
}

export type CustomerPhotoResponse = ApiResponse<CustomerPhotoData>;
