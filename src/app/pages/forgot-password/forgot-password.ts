import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  email = '';
  enviado = false;
  loading = false;
  mensagemErro = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  private mapearErroRecuperacao(mensagem: string): string {
    const msg = mensagem.toLowerCase();

    if (msg.includes('invalid email')) {
      return 'Informe um e-mail válido.';
    }

    if (msg.includes('429') || msg.includes('too many requests')) {
      return 'Muitas solicitações em sequência. Aguarde alguns minutos e tente novamente.';
    }

    return 'Não foi possível enviar a recuperação de senha. Tente novamente em instantes.';
  }

  get emailLimpo(): string {
    return this.email.trim().toLowerCase();
  }

  get emailValido(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(this.emailLimpo);
  }

  async enviar(): Promise<void> {
    if (this.loading) return;

    this.mensagemErro = '';
    this.email = this.emailLimpo;

    if (!this.emailValido) {
      this.mensagemErro = 'Informe um e-mail válido';
      return;
    }

    this.loading = true;

    try {
      const resposta = await this.authService.enviarRecuperacaoSenha(this.email);

      if (!resposta?.sucesso) {
        throw new Error(resposta?.erro || 'Erro ao solicitar recuperação de senha');
      }

      this.enviado = true;
    } catch (error: unknown) {
      const mensagem =
        error instanceof Error
          ? error.message
          : 'Erro ao solicitar recuperação de senha';
      this.mensagemErro = this.mapearErroRecuperacao(mensagem);
    } finally {
      this.loading = false;
    }
  }

  voltar(): void {
    this.router.navigate(['/login']);
  }
}
