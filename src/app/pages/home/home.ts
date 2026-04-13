import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  usuario = {
    nome: 'Amanda',
    statusAssinatura: 'Plano Gratuito',
    validade: 'Acesso ativo',
  };

  usoDiario = {
    respondidas: 3,
    limite: 10,
  };

  get percentualUso(): number {
    return (this.usoDiario.respondidas / this.usoDiario.limite) * 100;
  }
}
