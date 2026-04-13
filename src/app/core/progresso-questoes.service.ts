import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgressoQuestoesService {
  readonly limiteDiario = 10;

  private readonly questoesAcertadasHojeSignal = signal<Set<number>>(new Set<number>());

  get questoesAcertadasHoje(): number {
    return this.questoesAcertadasHojeSignal().size;
  }

  get percentualUsoDiario(): number {
    return (this.questoesAcertadasHoje / this.limiteDiario) * 100;
  }

  verificarQuestaoJaContabilizada(questao: number): boolean {
    return this.questoesAcertadasHojeSignal().has(questao);
  }

  registrarAcerto(questao: number): { contabilizado: boolean; limiteAtingido: boolean } {
    if (this.verificarQuestaoJaContabilizada(questao)) {
      return { contabilizado: false, limiteAtingido: false };
    }

    if (this.questoesAcertadasHoje >= this.limiteDiario) {
      return { contabilizado: false, limiteAtingido: true };
    }

    const novoSet = new Set(this.questoesAcertadasHojeSignal());
    novoSet.add(questao);
    this.questoesAcertadasHojeSignal.set(novoSet);

    return { contabilizado: true, limiteAtingido: false };
  }
}
