import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'task-form', component: TaskFormComponent },
    { path: 'task/new', component: TaskFormComponent },
    { path: 'task/edit/:id', component: TaskFormComponent },
    { path: '**', redirectTo: '' }
];
