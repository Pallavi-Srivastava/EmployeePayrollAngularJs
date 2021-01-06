import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeePayrollService {

  private getUrl: string = "http://localhost:7039/employee-payroll";

  constructor(private http: HttpClient) { }

  getEmployeeList(){
    return this.http.get(`${this.getUrl}/get`);
  }

  getEmployee(id: any){
    return this.http.get(`${this.getUrl}/get/` + id);
  }

  createEmployee(data: any){
    return this.http.post(`${this.getUrl}/create`,data);
  }

  updateEmployee(data: any){
    return this.http.put(`${this.getUrl}/update/`,data);
  }

  deleteEmployee(id: any){
    return this.http.delete(`${this.getUrl}/delete/` + id);
  }
}
