import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AddRequestComponent} from './components/add-request/add-request.component';
import {EditRequestComponent} from './components/edit-request/edit-request.component';
import { RequestComponent } from './components/request/request.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {SettingsComponent} from './components/settings/settings.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { EmployeeReimbursementsComponent } from './components/employee-reimbursements/employee-reimbursements.component';
import { ReimbursementDetailsComponent } from './components/reimbursement-details/reimbursement-details.component';
import { AdminViewRequestsComponent } from './components/admin-view-requests/admin-view-requests.component';
import { AdminViewRequestDetailsComponent } from './components/admin-view-request-details/admin-view-request-details.component';

const routes: Routes = [
{path: '', redirectTo: '/employee-dashboard', pathMatch: 'full'},
{path: 'request/add', component: AddRequestComponent, canActivate: [AuthGuard]},
{path: 'request/edit', component: EditRequestComponent, canActivate: [AuthGuard]},
{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'requests', component: RequestComponent, canActivate: [AuthGuard]},
{path: 'employee/details', component: EmployeeDetailsComponent, canActivate: [AuthGuard]},
{path: 'employee-dashboard', component: EmployeeDashboardComponent, canActivate: [AuthGuard]},
{path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard]},
{path: 'my-reimbursements', component: EmployeeReimbursementsComponent, canActivate: [AuthGuard]},
{path: 'my-reimbursements/:id', component: ReimbursementDetailsComponent},
{path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
{path: 'view-requests', component: AdminViewRequestsComponent, canActivate: [AuthGuard]},
{path: 'view-requests/:id', component: AdminViewRequestDetailsComponent, canActivate: [AuthGuard]},
{path: '**', component: NotFoundComponent},

];

@NgModule({
  
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
