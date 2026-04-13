import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Plano {
  nome: string;
  descricao: string;
  preco: string;
  acao: string;
  chamada: string;
  destaque: boolean;
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
      acao: 'Começar grátis',
      chamada: 'Perfeito para testar a plataforma',
      destaque: false,
    },
    {
      nome: 'Mensal',
      descricao: 'Acesso ilimitado para estudar todos os dias.',
      preco: 'R$ 14,90/mês',
      acao: 'Assinar mensal',
      chamada: 'Desbloqueie acesso ilimitado',
      destaque: true,
    },
    {
      nome: 'Vitalício',
      descricao: 'Pagamento único com acesso permanente.',
      preco: 'R$ 29,90',
      acao: 'Assinar vitalício',
      chamada: 'Estude sem limite diário',
      destaque: false,
    },
  ];
}