import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  blocos = [
    { titulo: 'Usuários', descricao: 'Gestão de contas e permissões (simulado).' },
    { titulo: 'Questões', descricao: 'Curadoria, revisão e organização do banco.' },
    { titulo: 'Provas', descricao: 'Configuração e manutenção de simulados.' },
    { titulo: 'Planos', descricao: 'Gestão de planos e recursos disponíveis.' },
  ];
}
