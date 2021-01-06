import { EmployeePayrollFormComponent } from './components/employee-payroll-form/employee-payroll-form.component';
import { DisplayListComponent } from './components/display-list/display-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"create-employee",component:EmployeePayrollFormComponent},
  {path:"",component:DisplayListComponent},
  {path: "create-employee/:id", component: EmployeePayrollFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
