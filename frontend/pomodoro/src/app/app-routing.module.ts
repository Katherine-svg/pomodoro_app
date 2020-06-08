import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/account/login/login.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { PomodoroClockComponent } from './components/core-appservices/pomodoro-clock/pomodoro-clock.component';
import { DashboardComponent } from './components/account/dashboard/dashboard.component';
import { TasksComponent } from './components/core-appservices/tasks/tasks.component';
import { AccSettingsComponent } from './components/account/acc-settings/acc-settings.component';
import { LogoutComponent } from './components/account/logout/logout.component';


const routes: Routes = [

  {
    path: '',
    component: LandingComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'pomodoro-clock',
  component: PomodoroClockComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'tasks',
  component: TasksComponent
},
{
  path: 'settings',
  component: AccSettingsComponent
},
{
  path: 'logout',
  component: LogoutComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
