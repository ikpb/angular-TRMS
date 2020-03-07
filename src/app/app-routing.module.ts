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

const routes: Routes = [
{path: '', component: DashboardComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'request/add', component: AddRequestComponent},
{path: 'request/edit', component: EditRequestComponent},
{path: 'requests', component: RequestComponent},
{path: 'employee/details', component: EmployeeDetailsComponent},
{path: 'employees', component: EmployeesComponent},
{path: 'settings', component: SettingsComponent},
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
