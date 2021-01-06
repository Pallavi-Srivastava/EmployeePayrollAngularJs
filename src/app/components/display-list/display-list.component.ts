import { EmployeePayrollService } from './../../services/employee-payroll.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit {

  displayedColumns: string[] = ['profile', 'name', 'gender', 'department', 'salary', 'startDate', 'notes', 'id'];
  employees: any;
  constructor(private employeeService: EmployeePayrollService,
    private router: Router) {}
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.employeeService.getEmployeeList().subscribe((response:any)=>{
      console.log("Response is ====> ",response)
       this.employees = response.data;
      console.log(this.employees)
    })
  }
  deleteEmployee(id: any) {
    console.log(id);
    this.employeeService.deleteEmployee(id)
      .subscribe((response:any) => {
        console.log("Response is ====> ",response)
        this.reloadData();
    })
  }
}
