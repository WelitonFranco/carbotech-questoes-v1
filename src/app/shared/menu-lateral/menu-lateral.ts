import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface LinkNavegacao {
  rota: string;
  rotulo: string;
  exato?: boolean;
}

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css',
})
export class MenuLateral {
  @Input() aberto = false;
  @Input() links: LinkNavegacao[] = [];
  @Output() fechar = new EventEmitter<void>();

  fecharMenu(): void {
    this.fechar.emit();
  }
}
