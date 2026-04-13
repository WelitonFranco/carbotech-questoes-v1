import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  linksNavegacao = [
    { rota: '/', rotulo: 'Splash', exato: true },
    { rota: '/login', rotulo: 'Login' },
    { rota: '/register', rotulo: 'Cadastro' },
    { rota: '/forgot-password', rotulo: 'Recuperar senha' },
    { rota: '/home', rotulo: 'Home' },
    { rota: '/materias', rotulo: 'Matérias' },
    { rota: '/questoes', rotulo: 'Questões' },
    { rota: '/provas', rotulo: 'Provas' },
    { rota: '/planos', rotulo: 'Planos' },
  ];
}
