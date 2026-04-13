import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  senha = '';
  loading = false;
  mensagemErro = '';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  get emailLimpo(): string {
    return this.email.trim().toLowerCase();
  }

  async entrar(): Promise<void> {
    if (this.loading) return;

    this.mensagemErro = '';
    this.email = this.emailLimpo;

    if (!this.email || !this.senha.trim()) {
      this.mensagemErro = 'Informe e-mail e senha';
      return;
    }

    this.loading = true;
    try {
      const resposta = await this.authService.login(this.email, this.senha.trim());

      if (!resposta?.sucesso) {
        throw new Error(resposta?.erro || 'Não foi possível entrar');
      }

      await this.router.navigate(['/register']);
    } catch (error: unknown) {
      this.mensagemErro = error instanceof Error ? error.message : 'Erro ao efetuar login';
    } finally {
      this.loading = false;
    }
  }
}
