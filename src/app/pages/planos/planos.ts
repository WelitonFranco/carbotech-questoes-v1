import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  imports: [CommonModule],
  templateUrl: './planos.html',
  styleUrl: './planos.css',
})
export class Planos {
  planos: Plano[] = [
    {
      nome: 'Gratuito',
      descricao: 'Ideal para começar com foco diário e acompanhar sua evolução.',
      preco: 'R$ 0,00',
      acao: 'Plano atual',
      chamada: 'Até 10 questões por dia',
    },
    {
      nome: 'Mensal',
      descricao: 'Desbloqueie acesso ilimitado e estude sem limite diário.',
      preco: 'R$ 29,90/mês',
      acao: 'Assinar mensal',
      destaque: true,
      chamada: 'Mais escolhido para evoluir rápido',
    },
    {
      nome: 'Trimestral',
      descricao: 'Melhor custo-benefício para manter consistência por mais tempo.',
      preco: 'R$ 79,90/trimestre',
      acao: 'Assinar trimestral',
      chamada: 'Economia para quem mantém rotina',
    },
  ];
}
