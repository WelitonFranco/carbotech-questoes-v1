import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Prova, QuestoesDataService } from '../../core/questoes-data.service';

@Component({
  selector: 'app-provas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './provas.html',
  styleUrl: './provas.css',
})
export class Provas {
  provas: Prova[];

  constructor(
    private readonly router: Router,
    private readonly questoesDataService: QuestoesDataService,
  ) {
    this.provas = this.questoesDataService.provas;
  }

  iniciarProva(provaId: string): void {
    this.router.navigate(['/questoes'], { queryParams: { prova: provaId } });
  }
}
