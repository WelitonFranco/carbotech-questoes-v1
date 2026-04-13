import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Alternativa {
  id: string;
  texto: string;
}

interface QuestaoSimulada {
  enunciado: string;
  alternativas: Alternativa[];
  alternativaCorreta: string;
  explicacao: string;
}

@Component({
  selector: 'app-questoes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './questoes.html',
  styleUrl: './questoes.css',
})
export class Questoes {
  questoes: QuestaoSimulada[] = [
    {
      enunciado: 'Qual alternativa apresenta competência privativa da União?',
      alternativas: [
        { id: 'A', texto: 'Legislar sobre interesse local.' },
        { id: 'B', texto: 'Legislar sobre telecomunicações.' },
        { id: 'C', texto: 'Instituir guarda municipal para trânsito federal.' },
        { id: 'D', texto: 'Autorizar funcionamento de emissoras estaduais internacionais.' },
      ],
      alternativaCorreta: 'B',
      explicacao:
        'Telecomunicações é matéria de competência privativa da União segundo a Constituição Federal.',
    },
    {
      enunciado: 'Na concordância verbal, qual frase está correta?',
      alternativas: [
        { id: 'A', texto: 'Fazem dois anos que estudo para concurso.' },
        { id: 'B', texto: 'Houveram muitas dúvidas na revisão.' },
        { id: 'C', texto: 'Existe bons materiais gratuitos.' },
        { id: 'D', texto: 'Faz dois anos que estudo para concurso.' },
      ],
      alternativaCorreta: 'D',
      explicacao:
        'Com ideia de tempo decorrido, o verbo fazer é impessoal e deve ficar no singular.',
    },
    {
      enunciado: 'No raciocínio lógico, a negação de “Todos os alunos estudaram” é:',
      alternativas: [
        { id: 'A', texto: 'Nenhum aluno estudou.' },
        { id: 'B', texto: 'Alguns alunos estudaram.' },
        { id: 'C', texto: 'Pelo menos um aluno não estudou.' },
        { id: 'D', texto: 'Todos os alunos não estudaram.' },
      ],
      alternativaCorreta: 'C',
      explicacao: 'A negação de uma proposição universal afirmativa é existencial negativa.',
    },
    {
      enunciado: 'Qual opção representa uma boa prática de segurança da informação?',
      alternativas: [
        { id: 'A', texto: 'Compartilhar senha apenas com colegas da equipe.' },
        { id: 'B', texto: 'Usar autenticação em dois fatores.' },
        { id: 'C', texto: 'Salvar senhas em bloco de notas do computador.' },
        { id: 'D', texto: 'Reutilizar a mesma senha em todos os sistemas.' },
      ],
      alternativaCorreta: 'B',
      explicacao: 'A autenticação em dois fatores reduz risco de acesso indevido mesmo com vazamento de senha.',
    },
    {
      enunciado: 'Na LEP, o trabalho do preso tem finalidade principal de:',
      alternativas: [
        { id: 'A', texto: 'Apenas reduzir pena automaticamente.' },
        { id: 'B', texto: 'Garantir renda exclusiva para o Estado.' },
        { id: 'C', texto: 'Promover educação e produtividade sem remuneração.' },
        { id: 'D', texto: 'Contribuir para ressocialização e disciplina.' },
      ],
      alternativaCorreta: 'D',
      explicacao: 'A Lei de Execução Penal trata o trabalho como meio de ressocialização e formação disciplinar.',
    },
  ];

  indiceQuestaoAtual = 0;
  alternativaSelecionada = '';
  respondeu = false;

  get questaoAtual(): QuestaoSimulada {
    return this.questoes[this.indiceQuestaoAtual];
  }

  get podeResponder(): boolean {
    return !!this.alternativaSelecionada && !this.respondeu;
  }

  get acertou(): boolean {
    return this.alternativaSelecionada === this.questaoAtual.alternativaCorreta;
  }

  responder(): void {
    if (!this.podeResponder) {
      return;
    }

    this.respondeu = true;
  }

  proximaQuestao(): void {
    this.indiceQuestaoAtual = (this.indiceQuestaoAtual + 1) % this.questoes.length;
    this.alternativaSelecionada = '';
    this.respondeu = false;
  }
}
