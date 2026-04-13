import { Routes } from '@angular/router';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Splash } from './pages/splash/splash';

export const routes: Routes = [
  { path: '', component: Splash },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
];
