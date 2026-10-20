import { ApiResponse } from './common.model';

export interface SalesforceCasesQuery {
  startDate?: string;
  endDate?: string;
  status?: string;
  customerNumber?: string;
  page?: number;
  limit?: number;
}

export interface CaseInformation {
  customerName?: string;
  creditCustomerId?: string;
  email?: string;
  homePhone?: string;
  mobilePhone?: string;
  caseOwner?: string;
  caseNumber?: string;
  caseFolioNumber?: string;
  group?: string;
  detailedStatus?: string;
  preferredContactMethod?: string;
  reportCategory?: string;
  type?: string;
  cause?: string;
  subCause?: string;
  area?: string;
  subject?: string;
  customerDescription?: string;
  caseSource?: string;
  internalComment?: string;
  originalCase?: string | null;
  priority?: string;
  openedDateTime?: string;
  closedDateTime?: string | null;
  mergedInto?: string | null;
  createdBy?: string;
  reactivationCount?: number;
  pendingCustomerInformation?: boolean;
  closureReason?: string | null;
  caseResolutionDescription?: string | null;
  resolutionDate?: string | null;
  activePunctuality?: string;
  historicalPunctuality?: string;
}

export interface AdjustmentsInformation {
  adjustmentNumber?: string;
  portfolioStatus?: string;
  customerNumber?: string;
  requestStore?: string;
  requestRegion?: string;
  adjustmentRequestDate?: string;
  daysToRegisterAdjustment?: number;
  daysToSendAdjustment?: number;
  daysToAdjustRequest?: number;
  caseNumber?: string;
  caseFolioNumber?: string;
  creationDate?: string;
  requestingEmployeeNumber?: string;
  processingEmployeeNumber?: string;
  firstAdjustmentRequestDate?: string;
  adjustment?: string;
  affectationChannel?: string;
  channel?: string;
  affectationStore?: string;
  affectationRegion?: string;
  affectedPortfolio?: string;
  invoiceNumber?: string;
  invoiceAmount?: number;
  invoiceDate?: string;
  authorizationMethod?: string;
  adjustmentType?: string;
  fraudType?: string | null;
  legalAdjustment?: boolean;
  rulingStatus?: string;
  ruling?: string;
  rulingCause?: string;
  rulingSubCause?: string;
  salesChannel?: string;
  initialRulingDate?: string;
  lastRulingDate?: string;
  adjustedOrRejected?: string;
  rejectionCause?: string | null;
  otherCause?: string | null;
  adjustedAmount?: number;
  adjustmentDate?: string;
  reversal?: boolean;
  reversalCheck?: boolean;
  otherReversalCause?: string | null;
  reversedAmount?: number;
  reversalDate?: string | null;
  lastModificationDate?: string;
  closedDateTime?: string | null;
  closureDate?: string | null;
  generalStatus?: string;
}

export interface ProfecoInvoiceDetails {
  invoiceFolio?: string;
  invoiceNumber?: string;
  profecoRegister?: string;
  portfolioCost?: number;
  portfolio?: string;
  createdBy?: string;
  lastModifiedBy?: string;
}

export interface ProfecoInformation {
  profecoRegisterName?: string;
  complaintMedium?: string;
  profecoCause?: string;
  linkCase?: string | null;
  previousFolio?: string | null;
  customerComment?: string;
  legalNotificationDate?: string;
  cost?: number;
  totalCost?: number;
  detailedStatus?: string;
  cloningStatus?: string;
  customerName?: string;
  customerNumber?: string;
  orderOrInvoiceNumber?: string;
  folioNumber?: string;
  subCause?: string;
  group?: string;
  hearingDate?: string;
  hearingDueDate?: string;
  sourceRegistry?: string;
  ruling?: string;
  resolution?: string;
  solutionComments?: string;
  electronicMoneyAmount?: number;
  createdBy?: string;
  lastModifiedBy?: string;
  fileNumber?: string;
  solutionDate?: string;
  finalComplaintMedium?: string;
  invoiceDetails?: ProfecoInvoiceDetails;
}

export interface CaseDetailResponse {
  caseInformation?: CaseInformation;
  adjustmentsInformation?: AdjustmentsInformation;
  profecoInformation?: ProfecoInformation;
}

export type SalesforceCasesResponse = ApiResponse<CaseDetailResponse | CaseDetailResponse[]>;
