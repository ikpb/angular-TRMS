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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReimbursementService } from './services/reimbursement.service';
import { RequestComponent } from './components/request/request.component'
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { HttpRequestInterceptor } from './classes/HttpRequestInterceptor';
import { AuthGuard } from './auth/auth.guard';
import {TokenInterceptorService} from './service/token-interceptor.service';
import { EmployeeReimbursementsComponent } from './components/employee-reimbursements/employee-reimbursements.component';
import { MyApprovedRejectedComponent } from './components/my-approved-rejected/my-approved-rejected.component';
import { ReimbursementDetailsComponent } from './components/reimbursement-details/reimbursement-details.component';


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
    EmployeeDashboardComponent,
    EmployeeReimbursementsComponent,
    MyApprovedRejectedComponent,
    ReimbursementDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeesService, ReimbursementService, RegisterService,CookieService, LoginService, {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
