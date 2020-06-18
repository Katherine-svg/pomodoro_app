import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/account/login/login.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccSettingsComponent } from './components/account/acc-settings/acc-settings.component';
import { PomodoroClockComponent } from './components/core-appservices/pomodoro-clock/pomodoro-clock.component';
import { ArchiveComponent } from './components/core-appservices/archive/archive.component';
import { TasksComponent } from './components/core-appservices/tasks/tasks.component';
import { DashboardComponent } from './components/account/dashboard/dashboard.component';
import { LogoutComponent } from './components/account/logout/logout.component';
import { LogManagmentComponent } from './components/log-managment/log-managment.component';
import { ChartComponent } from './components/account/dashboard/chart/chart.component'

import { FrappeChartsModule } from 'ngx-frappe-chart';
import { CalendarComponent } from './components/account/dashboard/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    AccSettingsComponent,
    PomodoroClockComponent,
    ArchiveComponent,
    TasksComponent,
    DashboardComponent,
    LogoutComponent,
    LogManagmentComponent,
    ChartComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FrappeChartsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
