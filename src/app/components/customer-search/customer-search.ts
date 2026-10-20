import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Customer360Service } from '../../shared/services/customer-360.service';

@Component({
  selector: 'app-customer-search',
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule],
  templateUrl: './customer-search.html',
  styleUrl: './customer-search.scss',
})
export class CustomerSearchComponent {
  private readonly customer360 = inject(Customer360Service);

  readonly result = signal<unknown>(null);

  getEmployee(): void {
    this.customer360
      .getEmployeeByEmployeeNumber('100245')
      .subscribe((res) => this.result.set(res));
  }

  updateEmployee(): void {
    this.customer360
      .updateEmployee('100245', { status: 'ACTIVE', role: 'ADMINISTRATOR' })
      .subscribe((res) => this.result.set(res));
  }

  searchCredits(): void {
    this.customer360
      .searchCustomerCredits({
        employeeNumber: '100245',
        name: 'José',
        lastName: 'Ramos',
        secondLastName: 'Vanegas',
      })
      .subscribe((res) => this.result.set(res));
  }

  searchDetails(): void {
    this.customer360
      .searchCustomerDetails({
        customerId: '100245',
        firstName: 'José',
        lastName: 'Ramos',
        secondLastName: 'Vanegas',
      })
      .subscribe((res) => this.result.set(res));
  }

  searchPhoto(): void {
    this.customer360
      .searchCustomerPhoto({
        customerId: '100245',
        firstName: 'José',
        lastName: 'Ramos',
        secondLastName: 'Vanegas',
      })
      .subscribe((res) => this.result.set(res));
  }

  getCases(): void {
    this.customer360
      .getSalesforceCases({
        startDate: '2026-06-01',
        endDate: '2026-07-24',
        status: 'IN_PROGRESS',
        customerNumber: 'CLI-12345',
        page: 1,
        limit: 20,
      })
      .subscribe((res) => this.result.set(res));
  }
}
