import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CustomerCreditResponse, CustomerCreditsQuery } from '../models/customer-credit.model';
import { CustomerDetailsQuery, CustomerDetailsResponse } from '../models/customer-detail.model';
import { CustomerPhotoQuery, CustomerPhotoResponse } from '../models/customer-photo.model';
import { EmployeeResponse, EmployeeUpdateRequest } from '../models/employee.model';
import { SalesforceCasesQuery, SalesforceCasesResponse } from '../models/salesforce-case.model';

const BASE_URL = `${environment.apiBaseUrl}/customers/v1/customers`;

@Injectable({ providedIn: 'root' })
export class Customer360Service {
  private readonly http = inject(HttpClient);

  // obtiene la información de un empleado por su número de empleado
  getEmployeeByEmployeeNumber(employeeNumber: string): Observable<EmployeeResponse> {
    return this.http.get<EmployeeResponse>(`${BASE_URL}/${employeeNumber}/access`);
  }

  // actualiza estatus y rol de empleado
  updateEmployee(
    employeeNumber: string,
    payload: EmployeeUpdateRequest,
  ): Observable<EmployeeResponse> {
    return this.http.patch<EmployeeResponse>(`${BASE_URL}/${employeeNumber}/access`, {
      data: payload,
    });
  }

  // busca créditos del cliente por número de empleado o nombre
  searchCustomerCredits(query: CustomerCreditsQuery): Observable<CustomerCreditResponse> {
    return this.http.get<CustomerCreditResponse>(`${BASE_URL}/credits`, {
      params: this.params(query),
    });
  }

  // busca detalle del cliente
  searchCustomerDetails(query: CustomerDetailsQuery): Observable<CustomerDetailsResponse> {
    return this.http.get<CustomerDetailsResponse>(`${BASE_URL}/details`, {
      params: this.params(query),
    });
  }

  // obtiene fotografía del cliente
  searchCustomerPhoto(query: CustomerPhotoQuery): Observable<CustomerPhotoResponse> {
    return this.http.get<CustomerPhotoResponse>(`${BASE_URL}/photos`, {
      params: this.params(query),
    });
  }

  // GET /salesforce/cases: obtiene la lista de casos de Salesforce (fechas, estado y cliente).
  getSalesforceCases(query: SalesforceCasesQuery = {}): Observable<SalesforceCasesResponse> {
    return this.http.get<SalesforceCasesResponse>(`${BASE_URL}/salesforce/cases`, {
      params: this.params(query),
    });
  }

  // Convierte los parámetros de búsqueda en HttpParams, ignorando los vacíos.
  private params(query: object): HttpParams {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, String(value));
      }
    }
    return params;
  }
}
