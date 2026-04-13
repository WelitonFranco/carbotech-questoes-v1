import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Materia {
  nome: string;
  quantidadeQuestoes: string;
  descricao: string;
  submaterias: string[];
}

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
})
export class Materias {
  materias: Materia[] = [
    {
      nome: 'Língua Portuguesa',
      quantidadeQuestoes: '20 questões',
      descricao: 'Interpretação de texto, gramática e redação prática.',
      submaterias: [
        'Interpretação de texto',
        'Gramática',
        'Redação prática',
      ],
    },
    {
      nome: 'Raciocínio Lógico',
      quantidadeQuestoes: '10 questões',
      descricao: 'Estruturas lógicas e matemática básica aplicada a concursos.',
      submaterias: [
        'Raciocínio Lógico',
        'Matemática básica aplicada a questões de concursos',
      ],
    },
    {
      nome: 'Informática',
      quantidadeQuestoes: '10 questões',
      descricao: 'Noções básicas e avançadas de informática cobradas em concursos.',
      submaterias: [
        'Informática básica',
        'Informática avançada',
      ],
    },
    {
      nome: 'Legislação Aplicada / Direito',
      quantidadeQuestoes: '30 questões',
      descricao: 'Conteúdo jurídico e legislação aplicada ao cargo.',
      submaterias: [
        'Direito Penal (Parte Geral e Parte Especial)',
        'Direito Processual Penal',
        'Direitos Humanos e Estatuto do Idoso',
      ],
    },
    {
      nome: 'Legislação da Polícia Penal',
      quantidadeQuestoes: '10 questões',
      descricao: 'Normas específicas da Polícia Penal e execução penal.',
      submaterias: [
        'Lei de Execução Penal',
        'Regimento Interno',
        'Legislação da Polícia Penal',
      ],
    },
    {
      nome: 'Conhecimentos Gerais',
      quantidadeQuestoes: '10 questões',
      descricao: 'Conteúdo geral cobrado conforme o edital do concurso.',
      submaterias: [
        'Conhecimentos gerais para Policial Penal',
        'Atualidades conforme edital',
      ],
    },
  ];
}