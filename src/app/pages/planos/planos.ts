import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Plano {
  nome: string;
  descricao: string;
  preco: string;
  acao: string;
  destaque?: boolean;
  chamada: string;
}

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planos.html',
  styleUrl: './planos.css',
})
export class Planos {
  planos: Plano[] = [
    {
      nome: 'Gratuito',
      descricao: 'Acesso limitado para começar sua rotina com foco diário.',
      preco: 'R$ 0,00',
      acao: 'Plano atual',
      chamada: 'Até 10 questões por dia',
    },
    {
      nome: 'Mensal',
      descricao: 'Acesso ilimitado para estudar sem limite diário.',
      preco: 'R$ 14,90',
      acao: 'Assinar mensal',
      destaque: true,
      chamada: 'Acesso ilimitado',
    },
    {
      nome: 'Vitalício',
      descricao: 'Acesso ilimitado permanente para estudar no seu ritmo.',
      preco: 'R$ 29,90',
      acao: 'Assinar vitalício',
      chamada: 'Acesso ilimitado permanente',
    },
  ];
}
