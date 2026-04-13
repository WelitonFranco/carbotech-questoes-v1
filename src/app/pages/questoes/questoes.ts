import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Alternativa {
  id: string;
  texto: string;
}

@Component({
  selector: 'app-questoes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './questoes.html',
  styleUrl: './questoes.css',
})
export class Questoes {
  enunciado = 'Qual alternativa apresenta apenas competências previstas na Constituição Federal?';

  alternativas: Alternativa[] = [
    { id: 'A', texto: 'Criar impostos estaduais e aprovar emendas municipais.' },
    { id: 'B', texto: 'Legislar sobre telecomunicações e defesa nacional.' },
    { id: 'C', texto: 'Definir currículo escolar municipal e tratados internacionais.' },
    { id: 'D', texto: 'Julgar crimes comuns e editar leis orgânicas federais.' },
  ];

  alternativaCorreta = 'B';
  alternativaSelecionada = '';
  respondeu = false;

  get podeResponder(): boolean {
    return !!this.alternativaSelecionada && !this.respondeu;
  }

  get acertou(): boolean {
    return this.alternativaSelecionada === this.alternativaCorreta;
  }

  get feedback(): string {
    if (!this.respondeu) {
      return 'Selecione uma alternativa e clique em responder.';
    }

    return this.acertou
    return this.alternativaSelecionada === this.alternativaCorreta
      ? 'Resposta correta! Excelente andamento.'
      : 'Resposta incorreta. Revise a explicação e tente novamente.';
  }

  responder(): void {
    if (!this.podeResponder) {
    if (!this.alternativaSelecionada) {
      return;
    }

    this.respondeu = true;
  }

  proximaQuestao(): void {
    this.alternativaSelecionada = '';
    this.respondeu = false;
  }
}
