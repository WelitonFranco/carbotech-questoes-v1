import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressoQuestoesService } from '../../core/progresso-questoes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  usuario = {
    nome: 'Amanda',
    statusAssinatura: 'Plano Gratuito',
    validade: 'Acesso ativo',
  };

  constructor(private readonly progressoQuestoesService: ProgressoQuestoesService) {}

  get questoesAcertadasHoje(): number {
    return this.progressoQuestoesService.questoesAcertadasHoje;
  }

  get limiteDiario(): number {
    return this.progressoQuestoesService.limiteDiario;
  }

  get percentualUso(): number {
    return this.progressoQuestoesService.percentualUsoDiario;
  }
}
