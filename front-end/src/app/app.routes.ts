import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { UserListComponent } from './components/user-list/user-list';
import { DashboardComponent } from './components/dashboard/dashboard';
import {ProfileComponent} from './components/profile/profile';
import {SettingsComponent} from './components/settings/settings';
export const routes: Routes = [
    
  { path: '', component: LoginComponent },
  { path: 'contact', component: UserListComponent },
  {path:'dashboard',component: DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'settings',component:SettingsComponent},
  { path: '**', redirectTo: '' }
];
