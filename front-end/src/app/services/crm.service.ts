import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from '../models/lead.model';

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  private apiUrl = 'http://localhost:5000/api/leads'; 

  constructor(private http: HttpClient) { }

  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>('http://localhost:5000/api/users');
  }
  addCustomer(customerData: any) {
  return this.http.post('http://localhost:5000/api/customers', customerData);
  }
}