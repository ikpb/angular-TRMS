import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddRequestComponent } from './components/add-request/add-request.component';
import { EditRequestComponent } from './components/edit-request/edit-request.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesService} from './services/employees.service';
import { HttpClientModule } from '@angular/common/http'
import { ReimbursementService } from './services/reimbursement.service';
import { RequestComponent } from './components/request/request.component'
import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EmployeesComponent,
    SidebarComponent,
    AddRequestComponent,
    EditRequestComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    RequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeesService, ReimbursementService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
