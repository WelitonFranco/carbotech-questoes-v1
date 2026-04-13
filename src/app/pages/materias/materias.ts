import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Materia {
  nome: string;
  quantidadeQuestoes: string;
  descricao: string;
  submaterias: string[];
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
      nome: 'Língua Portuguesa',
      quantidadeQuestoes: '20 questões',
      descricao: 'Base de interpretação, gramática e redação prática.',
      submaterias: [
        'Interpretação de texto',
        'Gramática aplicada',
        'Redação prática para concursos',
      ],
    },
    {
      nome: 'Raciocínio Lógico',
      quantidadeQuestoes: '10 questões',
      descricao: 'Lógica e matemática básica aplicada a provas objetivas.',
      submaterias: ['Raciocínio lógico', 'Matemática básica aplicada a concursos'],
    },
    {
      nome: 'Informática',
      quantidadeQuestoes: '10 questões',
      descricao: 'Conteúdo essencial para operação e segurança digital em prova.',
      submaterias: ['Informática básica', 'Informática avançada'],
    },
    {
      nome: 'Legislação Aplicada / Direito',
      quantidadeQuestoes: '30 questões',
      descricao: 'Núcleo jurídico central para preparação de Policial Penal.',
      submaterias: [
        'Direito Penal (Parte Geral e Parte Especial)',
        'Direito Processual Penal',
        'Direitos Humanos e Estatuto do Idoso',
      ],
    },
    {
      nome: 'Legislação da Polícia Penal',
      quantidadeQuestoes: '10 questões',
      descricao: 'Leis e normas específicas da rotina e atuação institucional.',
      submaterias: ['Lei de Execução Penal', 'Regimento Interno', 'Legislação da Polícia Penal'],
    },
    {
      nome: 'Conhecimentos Gerais',
      quantidadeQuestoes: '10 questões (0 a 10 em alguns editais)',
      descricao: 'Bloco complementar conforme exigência específica do edital.',
      submaterias: ['Atualidades e contexto institucional para Policial Penal'],
    },
  ];
}
