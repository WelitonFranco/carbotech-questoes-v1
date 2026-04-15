import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  usuario = {
    nome: 'Amanda Oliveira',
    email: 'amanda.oliveira@exemplo.com',
    plano: 'Plano Premium (simulado)',
  };

  mensagemLogout = '';

  sair(): void {
    this.mensagemLogout = 'Logout simulado com sucesso. Integração real virá em breve.';
  }
}
