import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Plano {
  nome: string;
  descricao: string;
  preco: string;
  acao: string;
  destaque?: boolean;
}

interface Plano {
  nome: string;
  descricao: string;
  preco: string;
  acao: string;
  destaque?: boolean;
  chamada?: string;
}

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './planos.html',
  styleUrl: './planos.css',
})
export class Planos {
  planos: Plano[] = [
    {
      nome: 'Gratuito',
      descricao: 'Ideal para começar. Até 10 questões por dia.',
      preco: 'R$ 0,00',
      acao: 'Plano atual',
    },
    {
      nome: 'Mensal',
      descricao: 'Mais questões diárias e recursos extras de estudo.',
      preco: 'R$ 29,90/mês',
      acao: 'Assinar mensal',
      destaque: true,
    },
    {
      nome: 'Trimestral',
      descricao: 'Melhor custo-benefício para manter consistência.',
      preco: 'R$ 79,90/trimestre',
      acao: 'Assinar trimestral',
    },
  ];
}
