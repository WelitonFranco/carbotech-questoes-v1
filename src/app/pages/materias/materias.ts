import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Materia {
  nome: string;
  descricao: string;
}

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
})
export class Materias {
  materias: Materia[] = [
    {
      nome: 'Português',
      descricao: 'Interpretação de texto, gramática e redação para concursos.',
    },
    {
      nome: 'Informática',
      descricao: 'Conceitos de sistemas, segurança e ferramentas mais cobradas.',
    },
    {
      nome: 'Direito Constitucional',
      descricao: 'Princípios fundamentais, direitos e organização do Estado.',
    },
    {
      nome: 'Raciocínio Lógico',
      descricao: 'Estruturas lógicas, análise combinatória e resolução de problemas.',
    },
  ];
}
