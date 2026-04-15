import { Routes } from '@angular/router';
import { Splash } from './pages/splash/splash';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { Home } from './pages/home/home';
import { Materias } from './pages/materias/materias';
import { Questoes } from './pages/questoes/questoes';
import { Planos } from './pages/planos/planos';
import { Provas } from './pages/provas/provas';
import { Perfil } from './pages/perfil/perfil';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
  { path: '', component: Splash },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'home', component: Home },
  { path: 'materias', component: Materias },
  { path: 'questoes', component: Questoes },
  { path: 'provas', component: Provas },
  { path: 'planos', component: Planos },
  { path: 'perfil', component: Perfil },
  { path: 'admin', component: Admin },
];
