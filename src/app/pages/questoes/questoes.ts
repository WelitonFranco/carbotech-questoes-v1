import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProgressoQuestoesService } from '../../core/progresso-questoes.service';
import { Questao, QuestoesDataService } from '../../core/questoes-data.service';

interface EstadoQuestao {
  alternativaSelecionadaAtual: string;
  ultimaTentativa?: {
    alternativaRespondida: string;
    acertou: boolean;
    mensagemLimite?: string;
  };
}

@Component({
  selector: 'app-questoes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './questoes.html',
  styleUrl: './questoes.css',
})
export class Questoes {
  provaSelecionadaId: string | null = null;
  get limiteDiario(): number {
    return this.progressoQuestoesService.limiteDiario;
  }

  tituloContexto = 'Treine com questões simuladas e acompanhe seu desempenho.';

  questoesVisiveis: Questao[] = [];
  indiceQuestaoAtual = 0;

  private estadosQuestoes = new Map<number, EstadoQuestao>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly questoesDataService: QuestoesDataService,
    private readonly progressoQuestoesService: ProgressoQuestoesService,
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.provaSelecionadaId = params.get('prova');
      this.configurarQuestoesVisiveis();
    });
  }

  get questaoAtual(): Questao {
    return this.questoesVisiveis[this.indiceQuestaoAtual];
  }

  get estadoAtual(): EstadoQuestao {
    return this.buscarEstadoQuestao(this.questaoAtual.questao);
  }

  get podeVoltarQuestao(): boolean {
    return this.indiceQuestaoAtual > 0;
  }

  get podeAvancarQuestao(): boolean {
    return this.indiceQuestaoAtual < this.questoesVisiveis.length - 1;
  }

  get respondidaNaTentativaAtual(): boolean {
    return !!this.estadoAtual.ultimaTentativa;
  }

  get acertouTentativaAtual(): boolean {
    return !!this.estadoAtual.ultimaTentativa?.acertou;
  }

  get questoesAcertadasHoje(): number {
    return this.progressoQuestoesService.questoesAcertadasHoje;
  }

  get feedback(): string {
    if (!this.respondidaNaTentativaAtual) {
      return 'Selecione uma alternativa e clique em responder.';
    }

    return this.acertouTentativaAtual
      ? 'Resposta correta! Excelente andamento.'
      : 'Resposta incorreta. Revise a explicação e tente novamente.';
  }

  get mensagemLimite(): string {
    return this.estadoAtual.ultimaTentativa?.mensagemLimite ?? '';
  }

  get questaoJaContabilizadaNoDia(): boolean {
    return this.progressoQuestoesService.verificarQuestaoJaContabilizada(this.questaoAtual.questao);
  }

  responder(): void {
    if (!this.estadoAtual.alternativaSelecionadaAtual) {
      return;
    }

    const acertou = this.estadoAtual.alternativaSelecionadaAtual === this.questaoAtual.respostaCorreta;
    let mensagemLimite = '';

    if (acertou) {
      const resultadoContagem = this.progressoQuestoesService.registrarAcerto(this.questaoAtual.questao);
      if (resultadoContagem.limiteAtingido) {
        mensagemLimite = `Você já atingiu ${this.limiteDiario} acertos hoje no plano gratuito.`;
      }
    }

    this.estadosQuestoes.set(this.questaoAtual.questao, {
      alternativaSelecionadaAtual: this.estadoAtual.alternativaSelecionadaAtual,
      ultimaTentativa: {
        alternativaRespondida: this.estadoAtual.alternativaSelecionadaAtual,
        acertou,
        mensagemLimite,
      },
    });
  }

  irParaProximaQuestao(): void {
    if (!this.podeAvancarQuestao) {
      return;
    }

    this.indiceQuestaoAtual += 1;
  }

  irParaQuestaoAnterior(): void {
    if (!this.podeVoltarQuestao) {
      return;
    }

    this.indiceQuestaoAtual -= 1;
  }

  atualizarAlternativaSelecionada(alternativaId: string): void {
    this.estadosQuestoes.set(this.questaoAtual.questao, {
      ...this.estadoAtual,
      alternativaSelecionadaAtual: alternativaId,
    });
  }

  voltarParaListaProvas(): void {
    this.router.navigate(['/provas']);
  }

  private configurarQuestoesVisiveis(): void {
    if (this.provaSelecionadaId) {
      this.questoesVisiveis = this.questoesDataService.questoes.filter(
        (questao) => questao.provaId === this.provaSelecionadaId,
      );

      const prova = this.questoesDataService.provas.find((item) => item.id === this.provaSelecionadaId);
      this.tituloContexto = prova
        ? `Você está resolvendo: ${prova.nome} (${prova.estado} • ${prova.banca})`
        : 'Modo prova simulado ativo.';
    } else {
      this.questoesVisiveis = this.questoesDataService.questoes;
      this.tituloContexto = 'Treine com questões simuladas e acompanhe seu desempenho.';
    }

    this.indiceQuestaoAtual = 0;
  }

  private buscarEstadoQuestao(questaoId: number): EstadoQuestao {
    if (!this.estadosQuestoes.has(questaoId)) {
      this.estadosQuestoes.set(questaoId, { alternativaSelecionadaAtual: '' });
    }

    return this.estadosQuestoes.get(questaoId)!;
  }
}
