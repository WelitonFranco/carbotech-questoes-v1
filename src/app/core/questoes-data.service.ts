import { Injectable } from '@angular/core';

export type AlternativaId = 'A' | 'B' | 'C' | 'D' | 'E';

export interface AlternativaQuestao {
  id: AlternativaId;
  texto: string;
}

export interface Questao {
  questao: number;
  cargo: string;
  ano: number;
  estado: string;
  banca: string;
  enunciado: string;
  alternativas: AlternativaQuestao[];
  respostaCorreta: AlternativaId;
  explicacao: string;
  provaId: string;
}

export interface Prova {
  id: string;
  nome: string;
  cargo: string;
  ano: number;
  estado: string;
  banca: string;
  questoesIds: number[];
}

@Injectable({
  providedIn: 'root',
})
export class QuestoesDataService {
  readonly questoes: Questao[] = [
    {
      questao: 1,
      cargo: 'Agente Penitenciário',
      ano: 2019,
      estado: 'Rio Grande do Sul',
      banca: 'SAILA',
      enunciado: 'Qual alternativa apresenta competência privativa da União?',
      alternativas: [
        { id: 'A', texto: 'Legislar sobre transporte coletivo municipal.' },
        { id: 'B', texto: 'Legislar sobre telecomunicações e radiodifusão.' },
        { id: 'C', texto: 'Instituir imposto sobre transmissão causa mortis.' },
        { id: 'D', texto: 'Organizar o serviço funerário local.' },
        { id: 'E', texto: 'Definir zoneamento urbano municipal.' },
      ],
      respostaCorreta: 'B',
      explicacao:
        'Telecomunicações e radiodifusão são competências legislativas privativas da União, previstas no art. 22 da Constituição.',
      provaId: 'prova-agente-2019-rs',
    },
    {
      questao: 2,
      cargo: 'Agente Penitenciário',
      ano: 2019,
      estado: 'Rio Grande do Sul',
      banca: 'SAILA',
      enunciado: 'No regime disciplinar, a finalidade principal da sanção é:',
      alternativas: [
        { id: 'A', texto: 'Punir exclusivamente com isolamento prolongado.' },
        { id: 'B', texto: 'Aumentar a superlotação para conter conflitos.' },
        { id: 'C', texto: 'Restabelecer a disciplina e a segurança da unidade.' },
        { id: 'D', texto: 'Transferir automaticamente para presídio federal.' },
        { id: 'E', texto: 'Suspender visitas sem previsão normativa.' },
      ],
      respostaCorreta: 'C',
      explicacao:
        'A sanção disciplinar deve preservar a ordem e segurança, observando legalidade, proporcionalidade e devido processo administrativo.',
      provaId: 'prova-agente-2019-rs',
    },
    {
      questao: 3,
      cargo: 'Agente Penitenciário',
      ano: 2019,
      estado: 'Rio Grande do Sul',
      banca: 'SAILA',
      enunciado: 'No atendimento inicial em situação de crise, a melhor conduta é:',
      alternativas: [
        { id: 'A', texto: 'Agir sem comunicação para surpreender o custodiado.' },
        { id: 'B', texto: 'Usar linguagem agressiva para obter obediência imediata.' },
        { id: 'C', texto: 'Negociar com escuta ativa e comando técnico da equipe.' },
        { id: 'D', texto: 'Encerrar toda mediação e aplicar força de imediato.' },
        { id: 'E', texto: 'Ignorar protocolos para reduzir burocracia.' },
      ],
      respostaCorreta: 'C',
      explicacao:
        'Protocolos de gerenciamento de crise priorizam comunicação técnica, escuta ativa e coordenação da equipe antes de escalonamento de força.',
      provaId: 'prova-agente-2019-rs',
    },
    {
      questao: 4,
      cargo: 'Policial Penal',
      ano: 2021,
      estado: 'Santa Catarina',
      banca: 'INTEGRA',
      enunciado: 'Sobre uso progressivo da força, assinale a alternativa correta.',
      alternativas: [
        { id: 'A', texto: 'A força letal é sempre a primeira resposta operacional.' },
        { id: 'B', texto: 'A atuação deve seguir necessidade, legalidade e proporcionalidade.' },
        { id: 'C', texto: 'Protocolos podem ser ignorados diante de resistência verbal.' },
        { id: 'D', texto: 'Equipamentos menos letais são proibidos no sistema prisional.' },
        { id: 'E', texto: 'O agente não precisa registrar ocorrência de uso de força.' },
      ],
      respostaCorreta: 'B',
      explicacao:
        'O uso progressivo da força exige legalidade, necessidade e proporcionalidade, com registro e controle institucional.',
      provaId: 'prova-policial-2021-sc',
    },
    {
      questao: 5,
      cargo: 'Policial Penal',
      ano: 2021,
      estado: 'Santa Catarina',
      banca: 'INTEGRA',
      enunciado: 'A revista em cela deve ser realizada prioritariamente com:',
      alternativas: [
        { id: 'A', texto: 'Planejamento prévio, equipe definida e registro formal.' },
        { id: 'B', texto: 'Apenas um servidor para reduzir exposição institucional.' },
        { id: 'C', texto: 'Ausência de checklist para agilizar a operação.' },
        { id: 'D', texto: 'Acesso livre de visitantes durante a inspeção.' },
        { id: 'E', texto: 'Descarte imediato de materiais sem inventário.' },
      ],
      respostaCorreta: 'A',
      explicacao:
        'Revistas devem seguir planejamento, divisão de funções e cadeia de custódia para manter segurança e rastreabilidade.',
      provaId: 'prova-policial-2021-sc',
    },
  ];

  readonly provas: Prova[] = [
    {
      id: 'prova-agente-2019-rs',
      nome: 'Prova de Agente Penitenciário 2019',
      cargo: 'Agente Penitenciário',
      ano: 2019,
      estado: 'Rio Grande do Sul',
      banca: 'SAILA',
      questoesIds: [1, 2, 3],
    },
    {
      id: 'prova-policial-2021-sc',
      nome: 'Prova de Policial Penal 2021',
      cargo: 'Policial Penal',
      ano: 2021,
      estado: 'Santa Catarina',
      banca: 'INTEGRA',
      questoesIds: [4, 5],
    },
  ];
}
