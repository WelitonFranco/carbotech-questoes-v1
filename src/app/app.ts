import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { LinkNavegacao, MenuLateral } from './shared/menu-lateral/menu-lateral';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MenuLateral],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  menuAberto = false;

  linksNavegacao: LinkNavegacao[] = [
    { rota: '/', rotulo: 'Splash', exato: true },
    { rota: '/login', rotulo: 'Login' },
    { rota: '/register', rotulo: 'Cadastro' },
    { rota: '/forgot-password', rotulo: 'Recuperar senha' },
    { rota: '/home', rotulo: 'Home' },
    { rota: '/materias', rotulo: 'Matérias' },
    { rota: '/questoes', rotulo: 'Questões' },
    { rota: '/provas', rotulo: 'Provas' },
    { rota: '/planos', rotulo: 'Planos' },
    { rota: '/perfil', rotulo: 'Perfil' },
    { rota: '/admin', rotulo: 'Admin' },
  ];

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.fecharMenu();
      });
  }

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  @HostListener('document:keydown.escape')
  onEscapePressionado(): void {
    this.fecharMenu();
  }
}
